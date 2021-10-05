<template lang="pug">
    conponent(:is="fieldParams.template || 'span'" v-if="fieldData.content") {{ fieldData.content }}
</template>

<script>
export default {
  name: "TextLine",
  props: {
    fieldData: { type: Object, default: () => {} },
    fieldParams: { type: Object, default: () => {} }
  }
};
</script>

<style scoped></style>
