<script setup>
import FilterType from './filters/type.vue'; 

defineOptions({
  name: 'FIlters', 
});
</script>

<template>
  <div class="flex py-2">
    <!-- Utilizzo del componente FilterType -->
    <FilterType />
  </div>
  <USeparator class="mb-4"/>
</template>
