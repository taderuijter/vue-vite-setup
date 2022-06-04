<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center pt-5 pb-5">
        <h1>Homepage</h1>
        <p>This data comes from the store.</p>
        <default-button v-if="!store.storage.active" :onClick="store.setLocalStorage" styling="btn__primary btn--block">Activate LocalStorage</default-button>
        <default-button v-else :onClick="removeStorage" styling="btn__primary btn--block">Remove LocalStorage</default-button>

        <div class="mt-5" v-if="!store.storage.active">
          <p>Counter: {{ store.counter }}</p>
          <default-button :onClick="store.increment" styling="btn__transparant">Increase</default-button>
          <div class="mt-2">
            <span tabindex="0" class="btn__link" @click="storeReset" @keydown.enter="storeReset">Reset</span>
          </div>
        </div>

        <div class="mt-5" v-else>
          <p>Saved Counter: {{ store.storage.counter }}</p>
          <default-button :onClick="store.incrementStorage" styling="btn__transparant">Increment</default-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import modules
import { useHead } from '@vueuse/head';
import { useDefaultStore } from '@/stores/default';
import DefaultButton from '@/components/DefaultButton.vue';

// Use the store
const store = useDefaultStore();

function storeReset() {
  store.$reset();
}

function removeStorage() {
  localStorage.clear();
  store.storage.active = false;
}

// Add Meta's to the app
useHead({
  title: 'Vue Vite Startup Project - by Nomad Ventures',
  meta: [
    { name: 'description', content: 'Meta Description' },
    { property: 'og:title', content: 'Vue Vite Startup Project - by Nomad Ventures'},
    { property: 'og:site_name', content: 'Vue Vite Startup'},
    { property: 'og:description', content: 'go description'},
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.nomadventrs.com'},
    { property: 'og:image', content: 'url to img' },
    { property: 'twitter:card', content: 'card type' },
    { property: 'twitter:title', content: 'Vue Vite Startup Project - by Nomad Ventures' },
    { property: 'twitter:url', content: 'URL of page' },
    { property: 'twitter:description', content: 'Brief description in less than 200 characters' },
    { property: 'twitter:image', content: 'URL of unique image, recommended minimum dimensions of 440×220 pixels' }
  ]
});
</script>

<style lang="scss" scoped>
.small {
  font-size: 10px;
}
</style>