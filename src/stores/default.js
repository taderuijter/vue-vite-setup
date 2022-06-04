import { defineStore, acceptHMRUpdate } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useDefaultStore = defineStore({
  id: 'defaultstore',

  // States
  state: () => ({
    counter: 0,
    storage: {
      active: useLocalStorage("storage:active", false),
      counter: useLocalStorage("storage:counter", 0),
    }
  }),

  // Getters
  getters: {
    doubleCount: (state) => state.counter * 2
  },

  // Actions
  actions: {
    increment() {
      this.counter++;
    },
    setLocalStorage(){
      this.storage.active = true;
    },
    incrementStorage(){
      this.storage.counter++;
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDefaultStore, import.meta.hot));
}