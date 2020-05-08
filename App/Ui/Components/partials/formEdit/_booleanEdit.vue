<template lang="pug">
    div
        v-switch(data-jest='rf-form-switch' :label="commonData.label ? commonData.label:fieldData.label")
        v-btn(v-if="!edit && !isEdited" data-jest='edit-boolean' @click="editField" outlined) Edit

        v-form(v-model="valid")
            formFieldEditCommon(@changeParentCommonData="getCommonData($event)" @updateEditedFieldData="saveEdit()" :edit="editOrAdd" :fieldData="fieldData")

            v-btn(v-if="isEdited" data-jest='cancel-boolean' @click="cancelEdit") Cancel
            v-btn(v-if="isEdited" data-jest='save-boolean' @click="saveEdit" :disabled="!valid") Save
            v-btn(v-else-if="edit && !isEdited" data-jest="add-button" @click="addField" :disabled="!valid") Add field

</template>
<script>
    import editFieldCommons from "../../mixins/modelEditCommons";
    import formFieldEditCommon from "./formEditCommons/_formFieldEditCommon.vue";

    export default {
        name: "BooleanEdit",
        mixins: [editFieldCommons],
        components: {
            formFieldEditCommon
        },
        methods: {
            getCommonData(event) {
                event.type = "Boolean";
                this.commonData = event;
            },

        }
    };
</script>
