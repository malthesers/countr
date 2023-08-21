import { defineStore } from "pinia";

export const useHistoryStore = defineStore({
  id: "history-store",
  state: () => {
    return {
      history: [],
    };
  },
  getters: {},
  actions: {},
});
