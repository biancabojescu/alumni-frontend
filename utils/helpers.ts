import type { Validation } from "@vuelidate/core";

export const getFormButtonDisabledState = (
  fields: Record<string, null>,
  validator: Ref<Validation>,
) => {
  return computed(() => {
    return (
      Object.values(fields).some((value) => !value) || validator.value.$invalid
    );
  });
};
