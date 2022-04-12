<template lang="pug">
v-switch(data-jest="boolean-field"  v-model.trim="bool" :rules="boolRules" :label="label" :name="name")
</template>
<script>

export default {
    name: "BooleanSwitch",
    props: {
        required: {type: Boolean, default: false},
        label: {type: String, required: true},
        name: {type: String, required: true},
    },
    data: function () {
        return {
            bool: "",
            boolRules: [
                v => (!this.required || !!v) || "Name is required",
            ],
        };
    },
    watch: {
        bool() {
            this.$emit("updateData", {
                name: this.name,
                value: {content: this.bool, fieldType: "boolean-switch", required: this.required}
            });
        }
    }
};
</script>
<style scoped>

</style>
