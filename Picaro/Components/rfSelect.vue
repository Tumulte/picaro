<template lang="pug">
label {{ label }}
    select(@change="$emit('change', $event.target.value)" :value="value")
        option(v-for="item in items") {{ item }}
</template>
<script>
export default {
  name: "RfSelect",
  props: {
    items: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    }
  }
};
</script>
