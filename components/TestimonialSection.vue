<template>
  <div class="relative w-full">
    <Carousel
      ref="carouselRef"
      :wrap-around="true"
      :items-to-show="1"
      class="w-full"
    >
      <Slide v-for="(testimonial, index) in testimonials" :key="index">
        <section class="px-4 md:px-20 py-6 w-full">
          <div class="border-2 border-white p-4">
            <div
              class="flex flex-col md:flex-row md:justify-between gap-4 border-b-2 border-white pb-4"
            >
              <div class="text-white text-sm uppercase">
                <span>Nume: </span>
                <span class="font-bold text-yellow-300">{{
                  testimonial.name
                }}</span>
              </div>
              <div class="text-white text-sm uppercase">
                <span>Prenume: </span>
                <span class="font-bold text-yellow-300">{{
                  testimonial.surname
                }}</span>
              </div>
              <div class="text-white text-sm uppercase">
                <span>Anul alumizării: </span>
                <span class="font-bold text-yellow-300">{{
                  testimonial.graduationYear
                }}</span>
              </div>
              <div class="text-white text-sm uppercase">
                <span>Generația: </span>
                <span class="font-bold text-yellow-300">{{
                  testimonial.generation
                }}</span>
              </div>
            </div>
            <div class="flex flex-col md:flex-row items-center gap-6 mt-6">
              <img
                :src="testimonial.imageUrl"
                :alt="testimonial.name"
                class="w-full md:w-[400px] h-auto object-cover"
              />
              <div class="relative text-white text-lg md:text-2xl px-4">
                <svg
                  width="60"
                  height="60"
                  class="absolute top-0 left-0 opacity-20"
                >
                  <text x="0" y="40" font-size="60" fill="#F4ED27">“</text>
                </svg>
                <p class="mt-10 mb-10">{{ testimonial.quote }}</p>
              </div>
            </div>
          </div>
        </section>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>

    <div
      class="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8 flex gap-6"
    >
      <button @click="goToPrev">
        <svg
          width="50"
          height="50"
          viewBox="0 0 60 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.54 29.35L22.04 49.84L27.68 44.21L12.82 29.35H59.53V21.37H12.82L27.68 6.51L22.04 0.87L1.54 21.37V29.35Z"
            stroke="#F4ED27"
          />
        </svg>
      </button>
      <button @click="goToNext">
        <svg
          width="50"
          height="50"
          viewBox="0 0 60 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M58.46 21.37L37.96 0.87L32.32 6.51L47.18 21.37H0.47V29.35H47.18L32.32 44.21L37.96 49.84L58.46 29.35V21.37Z"
            stroke="#F4ED27"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Carousel, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const carouselRef = ref();

const goToPrev = () => {
  carouselRef.value?.slideToPrev();
};

const goToNext = () => {
  carouselRef.value?.slideToNext();
};

interface Testimonial {
  name: string;
  surname: string;
  graduationYear: string;
  generation: string;
  imageUrl: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Alumn",
    surname: "Cafeluța",
    graduationYear: "2025",
    generation: "Toamna 2024",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d805ab4422453d51048528fb1e1e26daf4f49854",
    quote:
      "BEST Iași nu e doar o organizație, e locul unde ideile devin prieteni și prietenii devin familie.",
  },
  {
    name: "Maria",
    surname: "Popescu",
    graduationYear: "2023",
    generation: "Primăvara 2023",
    imageUrl: "https://placehold.co/600x400",
    quote: "A fost o experiență minunată! Recomand cu drag BEST.",
  },
];
</script>
