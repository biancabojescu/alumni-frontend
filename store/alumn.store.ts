export const useAlumnStore = defineStore("alumnStore", {
  state: () => ({
    alumnInfos: [] as AlumnData[],
    loading: false,
    pagination: {
      links: {} as PaginationLinks,
      meta: {} as PaginationMeta,
    },
  }),
  actions: {
    async fetchAlumnData(payload: GetAlumnData): Promise<void | undefined> {
      try {
        this.loading = true;

        const response = (await useApi(API_ENDPOINTS.alumn, {
          method: "GET",
          params: payload,
        })) as {
          data: AlumnData[];
          links: PaginationLinks;
          meta: PaginationMeta;
        };
        if (response) {
          this.alumnInfos = response?.data;
          this.pagination = {
            links: response?.links,
            meta: response?.meta,
          };
        }
      } catch (error: unknown) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
  },
  getters: {
    getTotalPages: (state) => {
      return state.pagination.meta?.last_page;
    },
  },
});
