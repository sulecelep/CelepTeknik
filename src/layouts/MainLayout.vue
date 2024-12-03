<template>
  <q-layout view="hHh lpR fff">
    <!-- style="background-color: #d2d2d4;" -->
    <q-header class="bg-blue-9 glossy" >
      <q-toolbar>
        <!-- <q-btn
        v-if="$q.screen.lt.sm"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        /> -->

        <q-toolbar-title>
          <q-img src="/images/logo.jpeg" class="cursor-pointer" style="width:100px;"/>
          
        </q-toolbar-title>
        
       
        <!-- <q-btn v-if="$q.screen.gt.sm" flat to="/" class="text-grey-2" label="Anasayfa"></q-btn>
        <q-btn
          v-if="$q.screen.gt.sm"
          class="text-grey-2"
          flat
          to="/faq"
          label="Sıkça Sorulan Sorular"
        ></q-btn> -->
        <q-space v-if="$q.screen.gt.sm" />
      </q-toolbar>
    </q-header>

    <!-- <q-drawer
    v-if="$q.screen.lt.sm && leftDrawerOpen===true"
      v-model="leftDrawerOpen"
      side="left" overlay behavior="desktop" bordered
    >
      <q-list>
        <q-item-label
          header
        >
          
        </q-item-label>

        <q-list>
    <q-item v-for="link in essentialLinks" :key="link.title" tag="a" :href="link.link" clickable target="_blank">
      <q-item-section avatar>
        <q-icon :name="link.icon" />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ link.title }}</q-item-label>
        <q-item-label caption>{{ link.caption }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-transparent flat no-shadow">
      <q-toolbar>
        <q-toolbar-title>
          <p align="center" class="text-grey-9 text-caption">
            <b> © {{ new Date().getFullYear() }} Celep Kombi Servis - Tüm Hakları Saklıdır</b>
          </p>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
const $q= useQuasar();

const essentialLinks = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'event',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'event',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'event',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'event',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'event',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'event',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'event',
    link: 'https://awesome.quasar.dev'
  }
];

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
