<template>
  <q-layout view="hHh lpR fff">
    <!-- style="background-color: #d2d2d4;" -->
    <q-header class="bg-blue-9 glossy" >
      <q-toolbar>
        <q-btn
        v-if="$q.screen.lt.md"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title clickable @click="router.push('/')">
          <q-img src="/images/logo.jpeg" class="cursor-pointer"  style="width:100px;"/>
          
        </q-toolbar-title>
        
       
        <q-btn v-if="$q.screen.gt.sm" flat to="/" class="text-grey-2" label="Anasayfa"></q-btn>
        <q-btn
          v-if="$q.screen.gt.sm"
          class="text-grey-2"
          flat
          to="/petek-temizligi"
          label="Petek TEMİZLİGİ"
        ></q-btn>
        <q-btn
          v-if="$q.screen.gt.sm"
          class="text-grey-2"
          flat
          to="/kombi-bakimi"
          label="KOMBİ BAKIMI"
        ></q-btn>
        <q-btn
          v-if="$q.screen.gt.sm"
          class="text-grey-2"
          flat
          to="/kombi-arizasi"
          label="KOMBİ ARIZASI"
        ></q-btn>
        <q-space v-if="$q.screen.gt.sm" />
      </q-toolbar>
    </q-header>

    <q-drawer
    class="bg-grey-2"
    v-if="$q.screen.lt.md && leftDrawerOpen===true"
      v-model="leftDrawerOpen"
      side="left" overlay behavior="desktop" bordered
    >
      

        <q-list class="q-mt-xl" style="margin-top:200px;">
    <q-item class="bg-grey-3 q-mb-md"  v-for="link in essentialLinks" :key="link.title" :to="link.link" clickable>
      <q-item-section avatar>
        <q-icon :name="link.icon" />
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-h6 text-bold"><strong>{{ link.title }}</strong></q-item-label>
        
      </q-item-section>
    </q-item>
  </q-list>
      
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-transparent flat no-shadow">

      <div class="q-mt-lg" align="center">
        <q-card
          class="my-card text-white"
          style="
            background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
       
          "
          
        >
          <q-card-section>
            <div class="text-h5"><strong>CELEP KOMBİ SERVİSİ</strong></div>
            <p class="text-body1 q-mt-md"><strong>Kombi Bakım/Onarımı ve Petek Temizliği İçin Bize Ulaşın</strong></p>
            <q-chip
              square
              class="q-mt-sm cursor-pointer"
              color="deep-orange"
              text-color="white"
              clickable
              @click="callPhone"
              icon="call"
              size="lg"
            >
              0539 667 63 53
            </q-chip>
          </q-card-section>
        </q-card>
      </div>
      <q-toolbar class="q-ma-none q-pa-none">
        <q-toolbar-title >
          <p align="center" class="text-grey-9 text-caption q-ma-none q-pa-none">
            <b>Copyright © {{ new Date().getFullYear() }} Celep Kombi Servis - Tüm Hakları Saklıdır</b>
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
import { useRouter } from 'vue-router';

const router = useRouter();
const essentialLinks = [
  {
    title: 'ANASAYFA',
    caption: 'Anasayfa',
    icon: 'home',
    link: '/home'
  },
  {
    title: 'PETEK TEMİZLİĞİ',
    caption: 'Petek Temizliği',
    icon: 'blinds',
    link: '/petek-temizligi'
  },
  {
    title: 'KOMBİ BAKIMI',
    caption: 'Kombi Bakımı',
    icon: 'construction',
    link: '/kombi-bakimi'
  },
  {
    title: 'KOMBİ ARIZASI',
    caption: 'Kombi Arızası',
    icon: 'warning',
    link: '/kombi-arizasi'
  }
];

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const callPhone = () => {
  window.location.href = "tel:05396676353";
};
</script>
