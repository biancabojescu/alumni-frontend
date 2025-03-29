<template>
  <div class="relative flex flex-col h-screen w-full bg-black">
    <Header />
    <main class="flex bg-black gap-10">
      <slot />
    </main>
    <Footer />
  </div>
</template>
