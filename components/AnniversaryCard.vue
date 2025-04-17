<template>
  <article
    class="flex w-full h-[400px] gap-20 items-center max-md:mt-10 max-md:flex-col max-md:h-auto"
    :class="{ 'flex-row-reverse': reverse }"
  >
    <div
      class="flex flex-col w-full flex-1 gap-1.5 px-2 py-8 md:py-20"
      :class="reverse ? 'items-end' : 'items-start'"
    >
      <h3
        class="text-3xl md:text-4xl font-medium tracking-wider leading-8 text-yellow-300 uppercase"
      >
        {{ title }}
      </h3>
      <p
        class="w-full mt-2.5 text-lg md:text-2xl leading-7 text-white"
        :class="reverse ? 'text-end items-end' : 'text-start items-start'"
      >
        {{ description }}
      </p>
    </div>
    <img
      :src="imageUrl"
      :alt="imageAlt"
      class="object-cover rounded-3xl h-[400px] w-[892px] max-md:w-full"
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
