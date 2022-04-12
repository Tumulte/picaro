<template lang="pug">
div
    input(type="hidden" :name="name" v-model="selected")
    v-select(v-model="selected" :items="data" :label="label" item-text="label")
</template>
<script>
    export default {
        name: "RfSelect",
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
