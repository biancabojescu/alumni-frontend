<template>
  <header
    class="flex justify-between items-center py-4 px-12 bg-black max-lg:p-4"
  >
    <img src="/public/images/logoBest.png" class="h-[80px]" alt="logoBest" />
    <nav class="flex gap-10 items-center">
      <a
        href="#acasa"
        class="font-medium tracking-wide text-white uppercase max-md:hidden"
      >
        ACASĂ
      </a>
      <a
        href="#aniversari"
        class="font-medium tracking-wide text-white uppercase max-md:hidden"
      >
        Aniversări
      </a>
      <a
        href="#alumni"
        class="font-medium tracking-wide text-white uppercase max-md:hidden"
      >
        Alumni
      </a>
      <button
        class="px-5 py-2 font-medium text-center text-black uppercase bg-yellow-300 rounded-full w-full"
        @click="logout"
      >
        <NuxtIcon name="logout" filled class="text-xl" />
      </button>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/store/auth.store";

const authStore = useAuthStore();
const router = useRouter();

const logout = () => {
  authStore.token = null;
  localStorage.removeItem(LOCAL_STORAGE_VARIABLES.token);
  router.push("/");
};
</script>
