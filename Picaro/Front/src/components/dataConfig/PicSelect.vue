<template>
  <label>
    {{ label }}
    <select :value="value" @change="emit('change', $event.target.value)">
      <option v-for="item in items" :key="item">
        {{ item }}
      </option>
    </select>
  </label>
</template>

<script setup lang="ts">
defineProps<{
  items: string[];
  label: string;
  value: string;
}>();
const emit = defineEmits<{
  change: (value: string) => void;
}>();
</script>

<style scoped>

</style>
