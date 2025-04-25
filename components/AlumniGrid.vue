<template>
  <section
    id="alumni"
    class="flex flex-col gap-8 px-4 md:px-20 py-10 md:py-30 bg-black"
  >
    <h2
      class="mx-auto md:mb-16 text-6xl md:text-9xl font-medium text-yellow-300 uppercase leading-[105px]"
    >
      ALUMNII
    </h2>
    <div class="flex md:flex-row md:justify-between gap-5 max-md:flex-col">
      <div class="md:w-6/12 max-md:ml-0 max-md:w-full">
        <div
          class="md:mb-5 text-2xl md:text-4xl font-medium text-white uppercase"
        >
          Anul: {{ year ? year : "Toti" }}
        </div>
      </div>
      <div
        class="flex gap-2 md:gap-5 justify-end items-center mb-4 md:mb-10 justify-end"
      >
        <div class="max-md:ml-0 justify-end max-md:w-full relative">
          <button
            class="flex gap-2 md:gap-5 justify-end items-center mb-2"
            @click="toggleDropdown"
          >
            <div class="text-2xl md:text-4xl font-medium text-white uppercase">
              Filter
            </div>
            <NuxtIcon name="filter" filled class="text-4xl pt-2" />
          </button>

          <div
            v-if="dropdownOpen"
            class="absolute lg:right-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
          >
            <div>
              <select
                class="block w-full px-4 py-2 text-base text-black bg-yellow-300 font-semibold rounded-md"
                @change="handleYearChange"
              >
                <option disabled selected value="">Selectează anul</option>
                <option v-for="year in years" :key="year" :value="year">
                  {{ year }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid gap-4 grid-cols-[repeat(3,1fr)] max-lg:grid-cols-[1fr]">
      <article
        v-for="(card, index) in alumni"
        :key="index"
        class="flex flex-col p-6 border-2 border-yellow-300 border-solid"
        :class="[`h-[${557 + index * 2}px]`]"
      >
        <img
          :src="card.image"
          alt="Poză alumn"
          class="mb-5 w-full h-[370px] object-cover"
        />

        <div class="flex gap-2.5 mb-3">
          <span
            class="text-2xl font-medium tracking-wider text-yellow-300 uppercase"
          >
            {{ card.name }}
          </span>
        </div>
        <div class="text-xl leading-7 text-white">
          <template v-if="Array.isArray(formattedDescriptions[index])">
            <p v-for="(line, i) in formattedDescriptions[index]" :key="i">
              - {{ line }}
            </p>
          </template>
          <template v-else>
            <p>{{ formattedDescriptions[index] }}</p>
          </template>
        </div>
      </article>
    </div>
    <Pagination
      v-if="!loading"
      :current-page="currentPage"
      :total-pages="props.totalPages"
      @update:current-page="handleCurrentPage"
    />
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  alumni: AlumniCard[];
  totalPages: number;
  currentPage: number;
  loading: boolean;
}>();

const years = [2020, 2021, 2022, 2023, 2024];
const dropdownOpen = ref(false);
const selectedYear = defineModel<string | null | number>("selectedYear");

const year = computed(() => {
  return selectedYear.value ? selectedYear.value.toString() : "";
});

const emit = defineEmits<{
  click: [page: number];
}>();

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const handleYearChange = (event: Event) => {
  selectedYear.value = Number((event.target as HTMLSelectElement).value);
  dropdownOpen.value = false;
};

const handleCurrentPage = async (page: number) => {
  emit("click", page);
  await nextTick();
  const alumniSection = document.getElementById("alumni");
  if (alumniSection) {
    alumniSection.scrollIntoView({ behavior: "smooth" });
  }
};

const formattedDescriptions = computed(() =>
  props.alumni.map((card) => {
    if (card.description.startsWith("-")) {
      return card.description
        .split("-")
        .filter((line) => line.trim() !== "")
        .map((line) => line.trim());
    } else {
      return card.description;
    }
  })
);
</script>
