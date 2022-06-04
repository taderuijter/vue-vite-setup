<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center pt-5 pb-5">
        <h1>About</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head';

useHead({
  title: 'About - Vue Vite Startup Project',
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

</style>