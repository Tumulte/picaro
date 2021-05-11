<template lang="pug">
    div
        v-select(v-model="selected" :items="modelParams.options" item-text="label" item-value="label" :label="modelParams.label" )
</template>

<script>
export default {
    name: "rfCategoryFilter",
    data: function () {
        return {
            selected: ""
        };
    },
    props: {modelParams: {required: true, type: Object}},
    watch: {
        selected() {
            if (!this.isEdit) {
                console.debug(this.selected);
                this.$emit("updateData", {
                    name: this.modelParams.name,
                    value: this.selected
                });
            }
        }
    },
};
</script>

<style scoped>

</style>
