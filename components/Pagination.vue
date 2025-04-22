<template>
  <div
    v-if="totalPages > 1"
    class="flex justify-center gap-5 whitespace-nowrap text-center text-xl max-md:flex-wrap max-md:pl-5"
  >
    <button
      :disabled="currentPage === 1"
      color="text-yellow-300 text-xl"
      @click="goToPreviousPage"
    >&lt;
    </button>

    <nav class="flex items-center gap-3" aria-label="Pagination">
      <button
        v-if="pages[0] !== 1"
        type="button"
        class="flex h-6 w-6 items-center justify-center rounded-full px-2.5 font-semibold text-white hover:bg-secondary"
        @click="goToPage(1)"
      >
        1
      </button>
      <button
        v-if="pages[0] !== 1"
        type="button"
        class="flex h-6 w-6 items-center justify-center rounded-full px-2.5 font-semibold text-white hover:bg-secondary"
        @click="goToPage(pages[0] - 1)"
      >
        ...
      </button>
      <button
        v-for="page in pages"
        :key="page"
        type="button"
        class="flex h-6 w-6 items-center justify-center rounded-full px-2.5 font-semibold"
        :class="{
          'bg-black text-white': page === currentPage,
          'text-white hover:bg-secondary': page !== currentPage,
        }"
        @click="goToPage(page)"
      >
        {{ page }}
      </button>
      <button
        v-if="pages[pages.length - 1] !== totalPages"
        type="button"
        class="flex h-6 w-6 items-center justify-center rounded-full px-2.5 font-semibold text-white hover:bg-secondary"
        @click="goToPage(pages[pages.length - 1] + 1)"
      >
        ...
      </button>
      <button
        v-if="pages[pages.length - 1] !== totalPages"
        type="button"
        class="flex h-6 w-6 items-center justify-center rounded-full px-2.5 font-semibold text-white hover:bg-secondary"
        @click="goToPage(totalPages)"
      >
        {{ totalPages }}
      </button>
    </nav>

    <button
      :disabled="currentPage === totalPages"
      color="text-yellow-300 text-xl"
      @click="goToNextPage"
    > &gt;</button>
  </div>
</template>

<script setup lang="ts">
const maxShownPages = ref(1);
interface TablePaginationProps {
  currentPage: number;
  totalPages: number;
}

const props = withDefaults(defineProps<TablePaginationProps>(), {
  currentPage: 1,
  totalPages: 1,
});

const emit = defineEmits<{
  "update:currentPage": [number];
}>();

const { currentPage, totalPages } = toRefs(props);
const { pages, goToPage, goToPreviousPage, goToNextPage } = usePagination(
  totalPages,
  currentPage,
  maxShownPages,
  emit
);
</script>
