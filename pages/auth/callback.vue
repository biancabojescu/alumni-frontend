<template>
  <div class="h-screen flex items-center justify-center">
    <p>Se face autentificarea...</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "~/store/auth.store";

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();

const rawToken = route.query.token as string;

try {
  if (rawToken) {
    await authStore.loginWithMagicLinkToken(rawToken);
    router.push("/");
  } else {
    router.push("/login");
  }
} catch (error) {
  router.push("/login");
}
</script>
