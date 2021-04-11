<template lang="pug">
    div( @input="updateCommonData")
        v-text-field(label="Label" data-jest='rf-form-label' :rules="labelRules" v-model.trim="label" v-if="edit" )
        v-text-field(label="name"  data-jest='rf-form-name' :rules="nameRules" v-model.trim="name" v-if="edit")
        v-switch(data-jest='rf-form-required' label="Required" v-model="required"  v-if="edit")
</template>
<script>
    export default {
        props: {
            edit: {
                type: Boolean, default: false
            },
            fieldData: Object
        },
        data() {
            return {
                name: "",
                label: "",
                required: false,
                labelRules: [
                    v => !!v || "Label is required",
                ],
                nameRules: [
                    v => !!v || "Name is required", v => /^[a-z0-9-]+$/.test(v) || "The name must use lower case letters, numbers or \"-\""
                ],
            };
        },
        methods: {
            updateCommonData() {
                this.$emit("changeParentCommonData", {name: this.name, required: this.required, label: this.label});
            }
        },

        created() {
            if (this.fieldData.label) {
                this.label = this.fieldData.label;
                this.name = this.fieldData.name;
                this.required = this.fieldData.required;
            }
        }

    }
    ;

</script>
