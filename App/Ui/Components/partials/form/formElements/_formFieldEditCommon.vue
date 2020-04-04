<template lang="pug">
    div( @input="updateCommonData")
        v-btn(v-if="!edit && !isEdited" data-jest='edit-boolean' @click="editField") Edit
        v-btn(v-if="isEdited" data-jest='cancel-boolean' @click="cancelEdit") Cancel
        v-btn(v-if="isEdited" data-jest='save-boolean' @click="saveEdit" :disabled="!allFieldsValid") Save

        v-text-field(label="Label" data-jest='rf-form-label' v-model.trim="$v.label.$model" v-if="edit || isEdited" )
        v-text-field(label="name"  data-jest='rf-form-name' v-model.trim="$v.name.$model" @changeName="name = $event"  v-if="edit || isEdited")
        v-switch(data-jest='rf-form-requiered' label="Required" v-model="required"  v-if="edit || isEdited")

        .error(v-if="!$v.name.correctNameAttr" data-jest="name-field-error") You can only use lowercase letters, numbers and "-"
</template>
<script>
    import {required} from "vuelidate/lib/validators";
    import modelValidation from "./../../../mixins/modelValidation";

    export default {
        props: {
            edit: {
                type: Boolean, default: false
            },
            fieldData: Object
        },
        data() {
            return {
                validCounterName: "nameFieldCounter",
                name: "",
                label: "",
                isEdited: false,
                required: false
            };
        },
        mixins: [modelValidation],
        validations: {
            name: {
                required,
                correctNameAttr: (name) => {
                    return /^[a-z0-9-]+$/.test(name) || name === "";
                }
            },
            label: {
                required
            }
        },
        methods: {
            editField() {
                this.isEdited = true;
            },
            cancelEdit() {
                this.isEdited = false;
                this.label = this.fieldData.label;
                this.name = this.fieldData.name;
            },

            saveEdit() {
                let fieldData = {name: this.name, type: "Boolean", label: this.label};
                this.isEdited = false;
                this.$emit("updateEditedFieldData", fieldData);

            },
            updateCommonData() {
                this.$emit("changeParentCommonData", {name: this.name, label: this.label, requiered: this.required});
            }
        },
        computed: {
            allFieldsValid() {
                return this.$store.getters.validCounter === 0;
            },
        },
        created() {
            if (this.fieldData) {
                this.label = this.fieldData.label;
                this.name = this.fieldData.name;
                this.required = this.fieldData.required;
            }
        }

    }
    ;

</script>
