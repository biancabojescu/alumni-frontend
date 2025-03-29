<template>
  <div class="flex flex-col gap-10 h-full w-full">
    <HeroSection />
    <DescriptionSection />
    <AnniversaryTimeline />
    <AlumniGrid :alumni="alumni" />
    <TestimonialSection />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "guest",
  layout: "default",
});

const alumni = [
  {
    image: "B",
    name: "Bianca",
    description: "Buna sunt Bianca!",
    year: "2024",
  },
] as AlumniCard[];
</script>
