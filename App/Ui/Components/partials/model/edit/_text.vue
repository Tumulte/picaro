<template lang="pug">
    v-text-field(data-jest="text-field" v-model.trim="text" :rules="textRules" :label="label" :name="name")
</template>

<script>

export default {
    name: "text",
    data() {
        return {
            text: "",
            textRules: [
                v => (!this.required || !!v) || "Name is required",
                v => {
                    if (!this.regex) {
                        return true;
                    }
                    let regex = new RegExp(this.regex);
                    return regex.test(v) || "this is not the correct pattern";

                }
            ],
        };
    },
    props: {
        required: {type: Boolean, default: false},
        label: {type: String, required: true},
        name: {type: String, required: true},
        regex: {type: String, default: ""},
        fieldData: {type: Object, default: null},
        isEdit: {type: Boolean, default: false},
    },
    watch: {
        text() {
            this.$emit("updateData", {
                name: this.name,
                value: {content: this.text, fieldType: "text", required: this.required}
            });
        }
    }
};
</script>

<style scoped>

</style>