<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          :icon="leftDrawerOpen ? 'menu_open' : 'menu'"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> {{ env.name }} </q-toolbar-title>

        <div>{{ title }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> {{ t('titles.mainMenu') }} </q-item-label>

        <RouterMenuLink
          v-for="link in ROUTER_MENU_LINKS"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import RouterMenuLink, {
  RouterMenuLinkProps,
} from 'components/RouterMenuLink.vue'
import { useI18n } from 'vue-i18n'

const ENV = {
  name: process.env.NAME,
  version: process.env.VERSION,
  buildDate: process.env.BUILD_DATE,
}

const TITLE = `${ENV.name} v${ENV.version} build: ${ENV.buildDate}`

const ROUTER_MENU_LINKS: RouterMenuLinkProps[] = [
  {
    title: 'Войти',
    icon: 'login',
    path: '/',
  },
  {
    title: 'Личный Кабинет',
    icon: 'account_circle',
    path: '/account',
  },
]

const leftDrawerOpen = ref(false)
const title = ref(TITLE)
const env = ref(ENV)

const { t } = useI18n()

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
