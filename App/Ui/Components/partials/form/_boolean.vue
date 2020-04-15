<template lang="pug">
    v-switch(data-jest="boolean-field"  v-model.trim="bool" :rules="boolRules" :label="label" :name="name")
</template>

<script>

    export default {
        name: "boolean.vue",
        data: function () {
            return {
                bool: "",
                boolRules: [
                    v => (!this.required || !!v) || "Name is required",
                ],
            };
        },
        props: {
            required: {type: Boolean, default: false},
            label: {type: String, required: true},
            name: {type: String, required: true},
        },

    };
</script>

<style scoped>

</style>