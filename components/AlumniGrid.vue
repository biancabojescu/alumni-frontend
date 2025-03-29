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
    <div class="flex md:flex-row gap-5 max-md:flex-col">
      <div class="md:w-6/12 max-md:ml-0 max-md:w-full">
        <div
          class="md:mb-5 text-2xl md:text-4xl font-medium text-white uppercase"
        >
          Anul: 2024
        </div>
      </div>
      <div class="ml-5 md:w-6/12 max-md:ml-0 max-md:w-full">
        <div
          class="flex gap-2 md:gap-5 md:justify-end items-center mb-4 md:mb-10"
        >
          <div class="text-2xl md:text-4xl font-medium text-white uppercase">
            filter
          </div>
          <img
            src="/public/images/tuborg.jpeg"
            class="h-[20px] w-[20px]"
            alt="Filter icon"
          />
        </div>
      </div>
    </div>
    <div
      class="grid gap-4 grid-cols-[repeat(3,1fr)] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]"
    >
      <article
        v-for="(card, index) in alumni"
        :key="index"
        class="flex flex-col p-6 border-2 border-yellow-300 border-solid"
        :class="[`h-[${557 + index * 2}px]`]"
      >
        <div class="mb-5 text-center text-white leading-[370px] text-[309px]">
          {{ card.image }}
        </div>
        <div class="flex gap-2.5 mb-3">
          <span
            class="text-2xl font-medium tracking-wider text-yellow-300 uppercase"
          >
            {{ card.name }}
          </span>
        </div>
        <p class="text-xl leading-7 text-white">
          {{ card.description }}
        </p>
      </article>
    </div>
    <nav class="flex gap-5 justify-center items-center mt-10">
      <img
        src="/public/images/tuborg.jpeg"
        class="cursor-pointer h-[50px] w-[59px]"
        alt="Previous"
      />
      <div class="text-4xl font-medium text-yellow-300 h-[60px] w-[60px]">
        1
      </div>
      <div class="text-4xl font-medium text-yellow-300 h-[60px] w-[60px]">
        2
      </div>
      <div class="text-4xl text-yellow-300">...</div>
      <img
        src="/public/images/tuborg.jpeg"
        class="cursor-pointer h-[50px] w-[59px]"
        alt="Next"
      />
    </nav>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  alumni: AlumniCard[];
}>();
</script>
