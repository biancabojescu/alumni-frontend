export const usePagination = (
  totalPages: Ref<number>,
  currentPage: Ref<number>,
  maxShownPages: Ref<number>,
  emit: Function
) => {
  const pages = computed(() =>
    Array.from(
      { length: Math.min(2 * maxShownPages.value + 1, totalPages.value) },
      (_, i) => {
        const start = Math.max(
          1,
          Math.min(
            currentPage.value - maxShownPages.value,
            totalPages.value - maxShownPages.value * 2
          )
        );
        return Math.min(start + i, totalPages.value);
      }
    )
  );

  function goToPage(page: number) {
    emit("update:currentPage", page);
  }

  function goToPreviousPage() {
    if (currentPage.value > 1) {
      emit("update:currentPage", currentPage.value - 1);
    }
  }

  function goToNextPage() {
    if (currentPage.value < totalPages.value) {
      emit("update:currentPage", currentPage.value + 1);
    }
  }

  return { pages, goToPage, goToPreviousPage, goToNextPage };
};
