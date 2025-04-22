<template>
  <div class="flex items-center justify-center">
    <div class="flex w-full flex-col gap-6">
      <div class="flex w-full flex-col items-center justify-center gap-4">
        <img src="/images/logoBest.png" alt="logo" class="max-w-[102px]" />
        <div class="flex flex-col gap-2">
          <p class="text-center text-lg font-light text-yellow-300">
            Conecteaza-te cu adresa ta @bestis.
          </p>
        </div>
      </div>
      <div class="flex w-full flex-col items-center gap-10">
        <div class="flex w-full flex-col gap-10 px-40 xl:px-80 py-6">
          <div class="flex flex-col xl:px-60 gap-6">
            <div class="items-left flex flex-col justify-start gap-6 text-sm">
              <form class="flex w-full flex-col gap-12">
                <Input
                  v-model="loginFields.username"
                  label="Email"
                  type="email"
                  :errors="v$.username.$errors"
                  autofocus
                  is-required
                  @blur="v$.username.$touch"
                />
              </form>

              <button
                :disabled="disableLogin"
                class="px-5 py-2 font-medium text-center text-black uppercase bg-yellow-300 rounded-lg w-full cursor-pointer hover:bg-yellow-400 disabled:opacity-50 transition"
                @click="login"
              >
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { email, required, helpers } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { useAuthStore } from "~/store/auth.store";

const router = useRouter();
const authStore = useAuthStore();

/**
 * Page Definitions
 */
definePageMeta({
  middleware: ["guest"],
  layout: "login-layout",
});

const loginFields = reactive({
  username: "",
});

const rules = computed(() => ({
  username: {
    required: helpers.withMessage("Adresa de email este obligatorie", required),
    email: helpers.withMessage(
      "Trebuie să fie o adresă de email validă",
      email,
    ),
    bestisDomain: helpers.withMessage(
      "Adresa trebuie să se termine cu @bestis.ro",
      (value: string) => value.endsWith("@bestis.ro")
    ),
  },
}));


const v$ = useVuelidate(rules, loginFields);

const login = async () => {
  if (v$.value.$error) return;
  const payload = {
    email: loginFields.username,
  };

  await authStore.login(payload);

  if (authStore.isLoggedIn) {
    router.push("/");
  }
};

// Compute if the login button should be disabled (empty fields or invalid form)
const disableLogin = getFormButtonDisabledState(loginFields, v$);
</script>
