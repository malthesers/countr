import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "default-store",
  state: () => {
    return {
      counter: 0,
      method: "default",
    };
  },
  getters: {
    doubleCounter(state) {
      return state.counter * 2;
    },
    tripleCounter(state) {
      return state.counter * 3;
    },
  },
});
