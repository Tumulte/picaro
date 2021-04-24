<template lang="pug">
    div
        v-text-field(data-jest="text-field" v-model.trim="text" :rules="textRules" :label="label" :name="name")
        v-btn(v-if="isEdit" data-jest='cancel-boolean' @click="cancelEdit") Cancel
        v-btn(v-if="isEdit && text !== fieldData.content" data-jest='save-boolean' @click="saveEdit") Save
</template>

<script>

export default {
    name: "textLineEdit",
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
        label: {type: String, default: ""},
        name: {type: String, default: ""},
        regex: {type: String, default: ""},
        fieldData: {type: Object, default: null},
        isEdit: {type: Boolean, default: false},
    },
    watch: {
        text() {
            if (!this.isEdit) {
                this.$emit("updateData", {
                    name: this.name,
                    value: this.formatedData
                });
            }
        }
    },
    methods: {
        saveEdit() {
            this.$emit("saveEdit", this.formatedData);
            this.$emit("endEdit");
        },
        cancelEdit() {
            this.$emit("endEdit");
        },
    },
    created() {
        if (this.isEdit) {
            this.text = this.fieldData.content;
        }
    },
    computed: {
        formatedData() {
            return {content: this.text, fieldType: "text-line", required: this.required};
        }
    }
};
</script>

<style scoped>

</style>