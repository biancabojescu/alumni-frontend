<template>
  <div
    v-if="totalPages > 1"
    class="flex justify-center max-md:gap-2 gap-5 whitespace-nowrap text-center text-3xl max-md:text-xl"
  >
    <button :disabled="currentPage === 1" @click="goToPreviousPage">
      <img
        src="/images/chevron_left.png"
        alt="left"
        class="max-md:max-w-[30px] max-w-[45px]"
      />
    </button>

    <nav class="flex items-center max-md:gap-3 gap-4" aria-label="Pagination">
      <button
        v-if="pages[0] !== 1"
        type="button"
        class="flex h-8 w-8 max-md:h-6 max-md:w-6 items-center justify-center rounded-full px-2.5 font-semibold text-yellow-300 hover:bg-secondary"
        @click="goToPage(1)"
      >
        1
      </button>
      <button
        v-if="pages[0] !== 1"
        type="button"
        class="flex h-8 w-8 max-md:h-6 max-md:w-6 items-center justify-center rounded-full px-2.5 font-semibold text-yellow-300 hover:bg-secondary"
        @click="goToPage(pages[0] - 1)"
      >
        ...
      </button>
      <button
        v-for="page in pages"
        :key="page"
        type="button"
        class="flex h-11 w-11 max-md:h-8 max-md:w-8 items-center justify-center rounded-full border-2 font-semibold transition"
        :class="{
          'bg-black text-yellow-300 border-white': page === currentPage,
          'text-yellow-300 border-white hover:bg-secondary':
            page !== currentPage,
        }"
        @click="goToPage(page)"
      >
        {{ page }}
      </button>
      <button
        v-if="pages[pages.length - 1] !== totalPages"
        type="button"
        class="flex h-8 w-8 max-md:h-6 max-md:w-6 items-center justify-center rounded-full px-2.5 font-semibold text-yellow-300 hover:bg-secondary"
        @click="goToPage(pages[pages.length - 1] + 1)"
      >
        ...
      </button>
      <button
        v-if="pages[pages.length - 1] !== totalPages"
        type="button"
        class="flex h-11 w-11 max-md:h-8 max-md:w-8 items-center border-white border-2 justify-center rounded-full px-2.5 font-semibold text-yellow-300 hover:bg-secondary"
        @click="goToPage(totalPages)"
      >
        {{ totalPages }}
      </button>
    </nav>

    <button :disabled="currentPage === totalPages" @click="goToNextPage">
      <img
        src="/images/chevron_left.png"
        alt="right"
        class="rotate-180 max-w-[45px] max-md:max-w-[30px]"
      />
    </button>
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
