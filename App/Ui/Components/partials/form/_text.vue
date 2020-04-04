<template lang="pug">
    div
        v-text-field(data-jest='rf-form-text')
        formFieldEditCommon(@changeParentCommonData="getCommonData($event)"  :edit="edit" :fieldData="fieldData" @updateEditedFieldData="saveEdit($event)")
</template>
<script>
    import modelValidation from "../../mixins/modelValidation";
    import editFieldCommons from "../../mixins/modelEditCommons";
    import formFieldEditCommon from "./formElements/_formFieldEditCommon.vue";

    export default {
        mixins: [modelValidation, editFieldCommons],
        components: {
            formFieldEditCommon
        },
        methods: {
            getCommonData(event) {
                let fieldData = {};

                for (let data in event) {
                    fieldData[data] = event[data];
                }
                fieldData.type = "Text";
                this.$emit("updateFieldData", fieldData);

            },


        },
    };

</script>
