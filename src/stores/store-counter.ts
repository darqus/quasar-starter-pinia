import { defineStore } from 'pinia'

interface ICounter {
  counter: number
}

export const useCounterStore = defineStore('counter', {
  state: (): ICounter => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    },
  },
})
