<script setup>
</script>

<template>
  <UApp :locale="config.locale" :toaster="config.toaster">
    <NuxtPage />
  </UApp>
</template>


<script setup>
import { it } from '@nuxt/ui/locale'

const config = {
    locale: {
        code: 'it',
        name: 'Italiano',
    },
    toaster: {
        position: 'top-right',
        duration: 1500,
        swipeThreshold: 10,
        expand: false,
        progress: false,
    },
}
</script>