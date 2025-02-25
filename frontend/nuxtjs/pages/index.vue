<script setup>
const { data, error, loading } = await useFetch('https://toovoz.craftus.co/api/collections/items/entries');

if (error.value) {
  console.error('Error fetching data:', error.value);
}
</script>

<template>
  <div>
    <h1>Ciao</h1>
    <div v-if="data">
      <div v-for="item in data.data" :key="item.id">
        <p>{{ item.id }}</p>
        <p>{{ item.title }}</p>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>
