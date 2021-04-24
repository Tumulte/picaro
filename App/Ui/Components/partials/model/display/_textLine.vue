<template lang="pug">
    span {{ fieldData.content }}
</template>

<script>
export default {
    name: "textLine",
    props: {fieldData: {type: Object, default: ""}},

};
</script>

<style scoped>

</style>