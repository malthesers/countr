import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter-store",
  state: () => {
    return {
      counter: 0,
      method: 1,
      secret: false,
    };
  },
  getters: {
    multipliedCounter: (state) => state.counter * state.method,
  },
  actions: {
    rollTheDie() {
      const luck = Math.floor(Math.random() * 101);
      if (luck === 100) this.secret = true;
    },
  },
});
