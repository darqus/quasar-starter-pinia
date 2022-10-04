import { defineStore } from 'pinia'

interface ILogin {
  name: string | null
  age: number | null
  accept: boolean | null
}

export const useLoginStore = defineStore('login', {
  state: (): ILogin => ({
    name: null,
    age: null,
    accept: null,
  }),
  /* getters: {
    doubleCount: (state) => state.counter * 2,
  }, */
  actions: {
    onReset() {
      this.name = null
      this.age = null
      this.accept = null
    },
  },
})
