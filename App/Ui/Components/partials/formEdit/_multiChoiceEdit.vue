<template lang="pug">
    div
        component(:is="type" :name="commonData.name" :labe="commonData.label" :data="options")
        v-form(v-model="valid")
            formFieldEditCommon(@changeParentCommonData="getCommonData($event)"  :edit="editOrAdd" :fieldData="fieldData" @updateEditedFieldData="saveEdit($event)")
            select(v-model="type")
                option(value="rfRadio") Radio
                option(value="rfCheckbox") Checkbox
                option(value="rfSelect") Select
            h3 Options
            div(v-for="(option, index) in options")
                v-text-field(v-model="option.label")
                v-btn(@click="removeOption(index)") remove
            v-btn(@click="addOption") Add
            v-btn(v-if="!edit && !isEdited" data-jest='edit-boolean' @click="editField" edit) Edit
            v-btn(v-if="isEdited" data-jest='cancel-boolean' @click="cancelEdit") Cancel
            v-btn(v-if="isEdited" data-jest='save-boolean' @click="saveEdit" :disabled="!valid") Save
            v-btn(v-else-if="edit && !isEdited" data-jest="add-button" @click="addField" :disabled="!valid") Add field

</template>
<script>
    import editFieldCommons from "../../mixins/modelEditCommons";
    import formFieldEditCommon from "./formEditCommons/_formFieldEditCommon.vue";
    import rfRadio from "../form/_radio.vue";
    import rfSelect from "../form/_select.vue";
    import rfCheckbox from "../form/_checkbox.vue";


    export default {
        name: "multiChoiceEdit",
        data: function () {
            return {
                type: "rfRadio",
                options: []
            };
        },
        mixins: [editFieldCommons],
        components: {
            formFieldEditCommon,
            rfRadio,
            rfSelect,
            rfCheckbox
        },
        methods: {
            getCommonData(event) {
                event.type = "Text";
                event.regex = this.regex;
                this.commonData = event;
            },
            removeOption(index) {
                this.options.splice(index, 1);
            },
            addOption() {
                this.options.push({label: ""});
            }

        },
    };

</script>
