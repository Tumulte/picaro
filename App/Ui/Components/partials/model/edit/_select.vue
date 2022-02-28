<template lang="pug">
    div
        input(type="hidden" :name="name" v-model="selected")
        v-select(v-model="selected" :items="data" :label="label" item-text="label")
</template>
<script>
    export default {
        name: "rfSelect",
        data: function () {
            return {
                selected: ""
            };
        },
        props: {data: Array, name: {type: String, default: ""}, label: {type: String, default: ""}}
    };
</script>
<style scoped>

</style>
