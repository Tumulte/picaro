<template>
  <component :is="header">
    <span>
      <slot />
    </span>
  </component>
</template>

<script setup lang="ts">
import {computed} from "vue"

const props = defineProps({level: {type: String, default: '1'}})
const header = computed(() => {
  return `h${props.level}`
})

</script>
