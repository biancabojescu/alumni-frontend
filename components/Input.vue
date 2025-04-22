<template>
  <div>
    <div class="relative w-full" @click="focusInput">
      <!-- Use v-model.trim to remove all whitespaces from the input (start, end) -->
      <input
        :id="uuid"
        ref="inputRef"
        v-model.trim="modelValue"
        :type="currentType === 'number' ? 'text' : currentType"
        :placeholder
        :class="getInputClasses"
        :disabled="disabled"
        :autofocus="autofocus"
        @blur="handleBlur"
        @focus="handleFocus"
      />
      <label
        :for="uuid"
        :class="{
          'left-3 top-1 -translate-y-3.5 font-medium text-white':
            isLabelOnTop || isFocused || modelValue,
          'left-3 top-4 text-white': !isFocused && !modelValue && !isLabelOnTop,
        }"
        class="pointer-events-none absolute origin-[0] bg-black px-1 text-sm transition-all duration-300 ease-in-out"
      >
        {{ label }}
      </label>
      <button
        v-if="type === 'password'"
        :disabled="disabled"
        type="button"
        class="absolute right-4 top-1/2 flex -translate-y-1/2 rounded-md text-white hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow"
        @click.prevent="showPass"
        @keydown.enter.prevent="showPass"
      >
        <NuxtIcon :name="passwordIcon" filled class="text-xl" />
      </button>
      <div v-if="hasSuffixItem" class="absolute right-0 top-0 -translate-y-1/2">
        <slot />
      </div>
    </div>
    <ValidationError v-if="showErrors" :frontend-errors="errors" class="mt-1" />
  </div>
</template>

<script setup lang="ts">
import type { ErrorObject } from "@vuelidate/core";

interface InputProps {
  type?: "text" | "email" | "password" | "date";
  variant?: "flat" | "default" | "focusable" | "flatMobile";
  size?: "compact" | "default" | "mobile";
  centered?: boolean;
  disabled?: boolean;
  autofocus?: boolean;
  label?: string;
  isLabelOnTop?: boolean;
  placeholder?: string;
  errors?: ErrorObject[];
  showErrors?: boolean;
  hasSuffixItem?: boolean;
}

const props = withDefaults(defineProps<InputProps>(), {
  type: "text",
  variant: "default",
  size: "default",
  centered: false,
  disabled: false,
  autofocus: false,
  label: "",
  placeholder: "",
  errors: () => [],
  showErrors: true,
  hasSuffixItem: false,
});

const emit = defineEmits(["blur", "focus"]);

const modelValue = defineModel<string | null | number>();

const uuid = useId();
const inputRef = ref();
const currentType = ref(props.type);
const isFocused = ref(false);

const getInputClasses = computed(() => {
  const baseClasses = `w-full truncate rounded-lg outline-none ${!modelValue.value ? "placeholder-shown" : ""} ${props.type === "password" ? "pr-10" : ""} ${props.disabled ? "text-gray-400" : ""}`;

  const variantClasses = {
    default:
      "bg-black text-white border border-solid border-neutrals-10 focus:ring-1 focus:ring-inset focus:ring-neutrals-90",
    flat: "bg-black text-white border-0 focus:ring-none placeholder:font-normal font-medium text-blueishBlack py-1 px-2",
    focusable:
      "bg-black text-white border-0 focus:ring-1 focus:ring-inset focus:ring-neutrals-10 placeholder:font-normal cursor-pointer focus:cursor-text font-medium text-blueishBlack py-1 px-2 truncate text-ellipsis",
    flatMobile:
      "bg-black text-white border-0 focus:ring-none placeholder:font-normal font-medium  py-1 px-2 placeholder:text-gray-500",
  };

  const sizeClasses = {
    compact:
      "p-2 text-xs placeholder:text-xs sm:text-sm sm:placeholder:text-sm",
    default:
      "p-4 text-xs placeholder:text-sm sm:text-sm sm:placeholder:text-base",
    mobile:
      "text-[15px] placeholder:text-[15px] sm:text-sm sm:placeholder:text-sm",
  };

  return [
    baseClasses,
    sizeClasses[props.size],
    variantClasses[props.variant],
    props.centered ? "text-center" : "",
  ]
    .join(" ")
    .trim();
});

const focusInput = () => {
  inputRef?.value?.focus();
};

const handleFocus = () => {
  isFocused.value = true;
  emit("focus");
};

const selectInput = () => {
  inputRef.value?.select();
};

const handleBlur = () => {
  isFocused.value = false;
  emit("blur");
};

/**
 * Password Icon
 */
const PASSWORD_ICONS = {
  closed: "eye-closed",
  open: "eye-open",
};

const passwordIcon = ref(PASSWORD_ICONS.closed);

const showPass = () => {
  currentType.value = currentType.value === "text" ? "password" : "text";
  passwordIcon.value =
    passwordIcon.value === PASSWORD_ICONS.open
      ? PASSWORD_ICONS.closed
      : PASSWORD_ICONS.open;
};

defineExpose({
  focusInput,
  selectInput,
});
</script>
