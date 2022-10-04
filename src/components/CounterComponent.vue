<template>
  <div>
    <p>Counter: {{ storeCounter.$state.counter }}</p>
    <div class="flex q-px-md">
      <div class="row justify-center items-center content-center">
        <q-btn color="primary" label="+" @click="storeCounter.increment" />
      </div>
      <div class="q-gutter-x-md q-ma-none">
        <q-btn color="primary" label="-" @click="storeCounter.decrement" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../stores/store-counter'

const storeCounter = useCounterStore()
</script>
