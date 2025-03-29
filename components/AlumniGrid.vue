<template>
    <section class="flex flex-col px-20 py-52 bg-black">
      <h2
        class="mx-auto mb-16 text-9xl font-medium text-yellow-300 uppercase leading-[105px]"
      >
        ALUMNII
      </h2>
      <div class="flex gap-5 max-md:flex-col">
        <div class="w-6/12 max-md:ml-0 max-md:w-full">
          <div
            class="mb-5 text-4xl font-medium text-white uppercase leading-[105px]"
          >
            Anul: 2024
          </div>
        </div>
        <div class="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div class="flex gap-5 justify-end items-center mb-10">
            <div
              class="text-4xl font-medium text-white uppercase leading-[105px]"
            >
              filter
            </div>
            <img
              src="/assets/images/tuborg.jpeg"
              class="h-[82px] w-[82px]"
              alt="Filter icon"
            />
          </div>
        </div>
      </div>
      <div
        class="grid gap-4 grid-cols-[repeat(3,1fr)] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]"
      >
        <article
          v-for="(card, index) in alumniCards"
          :key="index"
          class="flex flex-col p-6 border-2 border-yellow-300 border-solid"
          :class="[`h-[${557 + index * 2}px]`]"
        >
          <div class="mb-5 text-center text-white leading-[370px] text-[309px]">
            {{ card.letter }}
          </div>
          <div class="flex gap-2.5 mb-3">
            <span
              class="text-sm font-medium tracking-wide uppercase text-neutral-900 text-opacity-50"
            >
              {{ card.number }}/
            </span>
            <span
              class="text-2xl font-medium tracking-wider text-yellow-300 uppercase"
            >
              {{ card.title }}
            </span>
          </div>
          <p class="text-xl leading-7 text-white">
            {{ card.description }}
          </p>
        </article>
      </div>
      <nav class="flex gap-5 justify-center items-center mt-10">
        <img
          src="/assets/images/tuborg.jpeg"
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
          src="/assets/images/tuborg.jpeg"
          class="cursor-pointer h-[50px] w-[59px]"
          alt="Next"
        />
      </nav>
    </section>
  </template>
  
  <script setup lang="ts">
  const alumniCards = ref<AlumniCard[]>([
    {
      letter: "A",
      number: "01",
      title: "analysis",
      description:
        "Live workshop where we define the main problems and challenges before building a strategic plan moving forward.",
    },
    {
      letter: "R",
      number: "02",
      title: "research",
      description:
        "Competitive & Market research with the aim of finding that sweet spot that will set your brand apart.",
    },
    {
      letter: "D",
      number: "03",
      title: "design",
      description:
        "Here's where your digital product starts to become a tangible thing with visual elements and a great UX design.",
    },
    {
      letter: "D",
      number: "04",
      title: "development",
      description:
        "Using Webflow, a no-code tool that allow us full creative development & is easy to manage by your team after launch.",
    },
    {
      letter: "O",
      number: "05",
      title: "onboarding",
      description:
        "How to update and maintain your new digital product in minutes using no-code tools that are easy to use.",
    },
    {
      letter: "S",
      number: "06",
      title: "support",
      description:
        "I got you, even after launching your digital product you can still count on me for every question or issue.",
    },
  ]);
  </script>
  