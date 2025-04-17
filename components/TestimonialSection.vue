<template>
  <Carousel :wrap-around="true" :items-to-show="1" class="w-full">
    <Slide v-for="(testimonial, index) in testimonials" :key="index">
      <section id="testimoniale" class="px-4 mb-30 md:px-20 py-0 w-full">
        <div class="p-0.5 border-2 border-white border-solid">
          <div
            class="flex flex-col md:flex-row md:justify-between px-4 py-4 md:py-8 border-b-2 border-solid border-b-white"
          >
            <div class="text-sm font-medium tracking-wide text-white uppercase">
              <span>Nume:</span>
              <span class="font-bold text-yellow-300">{{
                testimonial.name
              }}</span>
            </div>
            <div class="text-sm font-medium tracking-wide text-white uppercase">
              <span>Prenume:</span>
              <span class="font-bold text-yellow-300">{{
                testimonial.surname
              }}</span>
            </div>
            <div class="text-sm font-medium tracking-wide text-white uppercase">
              <span>Anul alumizrii:</span>
              <span class="font-bold text-yellow-300">{{
                testimonial.graduationYear
              }}</span>
            </div>
            <div class="text-sm font-medium tracking-wide text-white uppercase">
              <span>Generația:</span>
              <span class="font-bold text-yellow-300">{{
                testimonial.generation
              }}</span>
            </div>
          </div>
          <div class="flex md:gap-20 p-3.5 max-sm:flex-col">
            <img
              :src="testimonial.imageUrl"
              class="object-cover h-[494px] w-[505px] max-sm:w-full max-sm:h-[300px]"
              :alt="'Testimonial from ' + testimonial.name"
            />
            <div class="relative px-20 py-6 max-sm:p-5">
              <div class="mb-[60px] opacity-20" v-html="quoteIcon"></div>
              <p
                class="text-2xl leading-8 text-white max-sm:text-xl max-sm:leading-7"
              >
                {{ testimonial.quote }}
              </p>
            </div>
          </div>
          <div
            class="flex justify-center items-center px-0 py-9 border-t-2 border-solid border-t-black"
          >
            <div class="text-sm font-medium tracking-wide text-white uppercase">
              {{ index + 1 }}/{{ testimonials.length }}
            </div>
            <div class="flex gap-5 ml-10">
              <div
                class="cursor-pointer"
                @click="$carousel.prev()"
                v-html="prevArrow"
              ></div>
              <div
                class="cursor-pointer"
                @click="$carousel.next()"
                v-html="nextArrow"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
interface Testimonial {
  name: string;
  surname: string;
  graduationYear: string;
  generation: string;
  imageUrl: string;
  quote: string;
}

const testimonials = ref<Testimonial[]>([
  {
    name: "Alumn",
    surname: "Cafeluța",
    graduationYear: "2025",
    generation: "Toamna 2024",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d805ab4422453d51048528fb1e1e26daf4f49854",
    quote:
      "From the initial meeting to the final delivery, Ethan has created a feeling of trust...",
  },
  {
    name: "Maria",
    surname: "Popescu",
    graduationYear: "2023",
    generation: "Primăvara 2023",
    imageUrl: "https://placehold.co/600x400",
    quote: "A fost o experiență minunată! Recomand cu drag BEST.",
  },
]);
const quoteIcon = `<svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg" class="quote-icon" style="width: 70px; height: 70px; opacity: 0.2; margin-bottom: 60px">
  <g opacity="0.2" clip-path="url(#clip0_27_5684)">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.265625 21.1239C0.265625 7.69529 7.89554 0.980957 21.019 0.980957H27.4281V14.4096H21.3242C17.3566 14.4096 15.2202 15.3252 15.2202 20.8187V28.1435H27.1229V70.2606H0.265625V21.1239ZM42.3827 21.1239C42.3827 7.69529 50.0126 0.980957 63.1361 0.980957H69.5452V14.4096H63.4413C59.1685 14.4096 57.3373 15.3252 57.3373 20.8187V28.1435H69.24V70.2606H42.3827V21.1239Z" fill="#F4ED27"></path>
  </g>
  <defs>
  <clipPath id="clip0_27_5684">
  <rect width="70" height="70" fill="white" transform="translate(0.265625 0.375)"></rect>
  </clipPath>
  </defs>
  </svg>`;

const prevArrow = `<svg width="60" height="51" viewBox="0 0 60 51" fill="none" xmlns="http://www.w3.org/2000/svg" class="nav-arrow prev" style="width: 59px; height: 50px">
  <g clip-path="url(#clip0_27_5691)">
  <path d="M1.54004 29.3461L22.0388 49.8447L27.6781 44.2127L12.8187 29.3461H59.5279V21.3727H12.8187L27.6781 6.50609L22.0388 0.874023L1.54004 21.3727V29.3461Z" stroke="#F4ED27" stroke-miterlimit="10"></path>
  </g>
  <defs>
  <clipPath id="clip0_27_5691">
  <rect width="59" height="50" fill="white" transform="translate(0.890625 0.359375)"></rect>
  </clipPath>
  </defs>
  </svg>`;

const nextArrow = `<svg width="60" height="51" viewBox="0 0 60 51" fill="none" xmlns="http://www.w3.org/2000/svg" class="nav-arrow next" style="width: 59px; height: 50px">
  <g clip-path="url(#clip0_27_5696)">
  <path d="M58.459 21.3727L37.9603 0.874065L32.321 6.50607L47.1804 21.3727L0.471161 21.3727V29.3461L47.1804 29.3461L32.321 44.2127L37.9603 49.8447L58.459 29.3461V21.3727Z" stroke="#F4ED27" stroke-miterlimit="10"></path>
  </g>
  <defs>
  <clipPath id="clip0_27_5696">
  <rect width="59" height="50" fill="white" transform="matrix(-1 0 0 -1 59.1094 50.3594)"></rect>
  </clipPath>
  </defs>
  </svg>`;
</script>
