<template>
  <div class="relative flex flex-col h-screen w-full bg-black">
    <Header />
    <main class="flex bg-black gap-10">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css",
    },
  ],
});
</script>
