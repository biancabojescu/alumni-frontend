<template>
    <article
      class="flex w-full h-[259px] max-md:flex-col max-md:h-auto"
      :class="{ 'flex-row-reverse': reverse }"
    >
      <div class="flex flex-col flex-1 gap-1.5 px-6 py-20">
        <h3
          class="text-3xl font-medium tracking-wider leading-8 text-yellow-300 uppercase"
        >
          {{ title }}
        </h3>
        <p class="mt-2.5 text-lg leading-7 text-white">
          {{ description }}
        </p>
      </div>
      <img
        :src="imageUrl"
        :alt="imageAlt"
        class="object-cover rounded-3xl h-[259px] w-[583px] max-md:w-full"
      />
    </article>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    reverse?: boolean;
  }>();
  </script>
  