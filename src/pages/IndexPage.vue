<template>
  <q-page class="row items-center justify-evenly">
    <CounterComponent />
  </q-page>
</template>

<script lang="ts">
import CounterComponent from 'components/CounterComponent.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  components: { CounterComponent },
})
</script>
