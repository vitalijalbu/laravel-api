<script setup>
defineOptions({
  name: 'FilterType', 
});
</script>

<template>
  <UPopover mode="click">
    <UButton icon="i-lucide-rocket" size="md" color="neutral" variant="outline" label="Tipologia" />
    <template #content class="p-4">
      <div class="p-4">
        <UCheckbox label="Check me" description="This is a checkbox." />
        <UCheckbox label="Check me2" description="This is a checkbox.2" />
        <UCheckbox label="Check me3" description="This is a checkbox.3" />
      </div>
    </template>
  </UPopover>
</template>
