const userTokenKey = LOCAL_STORAGE_VARIABLES.token;

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    token: localStorage.getItem(userTokenKey),
    loading: false,
  }),
  actions: {
    async login(credentials: LoginPayload): Promise<string | void> {
      try {
        const response = (await useApi(API_ENDPOINTS.request_login_link, {
          method: "POST",
          body: credentials,
        })) as LoginSuccess;
        return response.success;
      } catch (error: unknown) {
        console.error("Login failed: ", error);
      }
    },
    async loginWithMagicLinkToken(rawToken: string): Promise<void> {
      this.loading = true;
      try {
        const response = (await useApi(
          `${API_ENDPOINTS.login}?token=${rawToken}`,
          {
            method: "GET",
          },
        )) as LoginSuccess;

        if (response?.token) {
          this.token = response.token;
          localStorage.setItem(LOCAL_STORAGE_VARIABLES.token, response.token);
        } else {
          throw new Error("Token invalid");
        }
      } catch (error) {
        console.error("Eroare la autentificare cu magic link:", error);
        throw error;
      } finally {
        this.loading = false;
      }
    },
  },
  getters: {
    isLoggedIn: (state) => !isNil(state.token),
  },
});
