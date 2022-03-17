import { defineStore } from "pinia";

export const useFavStore = defineStore({
  id: "fav-store",
  state: () => {
    return {
      favs: [],
    };
  },
  getters: {},
  actions: {},
});
