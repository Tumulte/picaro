<template lang="pug">
div
    input(type="hidden" :name="name" v-model="selected")
    v-checkbox(v-for="(item, index) in data" :label="item.label" :key="index" :name="item.label")
</template>
<script>
    export default {
        name: "RfCheckbox",
        props: {data: Array, name: {type: String, default: ""}, label: {type: String, default: ""}},
        data: function () {
            return {
                selected: ""
            };
        }
    };
</script>
<style scoped>

</style>
