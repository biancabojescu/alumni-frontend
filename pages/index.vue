<template>
  <div class="flex flex-col gap-10 h-full w-full">
    <HeroSection />
    <DescriptionSection />
    <AnniversaryTimeline />
    <AlumniGrid
      v-model:selected-year="selectedYear"
      :alumni="alumni"
      :current-page="currentPage"
      :total-pages="getTotalPages"
      :loading="loading"
      @click="fetchAlumnData"
    />

    <!-- <TestimonialSection /> -->
    <div class="text-center pb-20 text-6xl text-bold text-yellow-300">
      Acuși alumnii 2025...
    </div>
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
const selectedYear = ref();

const alumni = computed(() =>
  alumnInfos.value.map((alumn) => ({
    image: "/images/tuborg.jpeg",
    name: alumn.nume,
    description: alumn.activitati,
    year: alumn.anul_alumnizarii,
  })),
);

const fetchAlumnData = async (page: number) => {
  currentPage.value = page;
  const payload = {
    anul_alumnizarii: selectedYear.value,
    per_page: 6,
    page: currentPage.value,
  };

  await alumnStore.fetchAlumnData(payload);
};

onMounted(async () => {
  fetchAlumnData(currentPage.value);
});

watch(selectedYear, (newYear) => {
  if (newYear) {
    fetchAlumnData(1);
  }
});

</script>
