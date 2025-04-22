import { useAuthStore } from "~/store/auth.store";

export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore();
  if (to.path === "/" && authStore.isLoggedIn) {
    return navigateTo("/");
  }
});
