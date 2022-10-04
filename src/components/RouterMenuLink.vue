<template>
  <q-item clickable :to="path">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
export interface RouterMenuLinkProps {
  title: string
  path?: string
  icon?: string
}
withDefaults(defineProps<RouterMenuLinkProps>(), {
  path: '/',
  icon: '',
})
</script>
