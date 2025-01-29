<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const { status, data: post } = useFetch(`https://resthotels.it/api/listings/${route.params.slug}`, {
  lazy: true
})
</script>


<template>
  <UContainer>
    <div v-if="status === 'pending'">
    Loading ...
  </div>
    <NuxtLink to="/properties">Indietro</NuxtLink>
    <h1>stai vedendo la proprietà {{ $route.params.slug }}</h1>
    <UCard>
      <template #header>
        <h1>{{ post?.title }}</h1>
      </template>
      <Placeholder class="h-32" />
      <template #footer>
        <Placeholder class="h-8" />
      </template>
    </UCard>
  </UContainer>
</template>
