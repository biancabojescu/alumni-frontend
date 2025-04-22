<template>
  <div class="flex flex-col gap-10 h-full w-full">
    <HeroSection />
    <DescriptionSection />
    <AnniversaryTimeline />
    <AlumniGrid
      :alumni="alumni"
      :current-page="currentPage"
      :total-pages="getTotalPages"
      :loading="loading"
      @click="fetchAlumnData"
    />

    <TestimonialSection />
  </div>
</template>

<script setup lang="ts">
import { useAlumnStore } from "~/store/alumn.store";

definePageMeta({
  middleware: "auth",
  layout: "default",
});
const alumnStore = useAlumnStore();
const { alumnInfos, loading, getTotalPages } = storeToRefs(alumnStore);
const currentPage = ref(1);

const alumni = computed(() =>
  alumnInfos.value.map((alumn) => ({
    image: "/images/tuborg.jpeg",
    name: alumn.nume,
    description: alumn.activitati,
    year: alumn.anul_alumnizarii,
  })),
);

const fetchAlumnData = async (page: number) => {
  const payload = {
    per_page: 6,
    page: page,
  };

  currentPage.value = page;
  await alumnStore.fetchAlumnData(payload);
};

onMounted(async () => {
  fetchAlumnData(currentPage.value);
});
</script>
