<template lang="pug">
div
    input(type="hidden" :name="name" v-model="selected")
    v-radio-group(v-model="selected")
        v-radio(v-for="(item, index) in data" :label="item.label" :key="index")
</template>
<script>
    export default {
        name: "Radio",
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
