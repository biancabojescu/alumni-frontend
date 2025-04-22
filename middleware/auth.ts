import { useAuthStore } from "~/store/auth.store";

export default defineNuxtRouteMiddleware(async () => {
  const authStore = useAuthStore();
  if (!authStore.isLoggedIn) {
    return navigateTo("/login");
  }
});
