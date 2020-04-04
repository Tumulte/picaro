<template lang="pug">
    div
        v-switch(data-jest='rf-form-switch')
        formFieldEditCommon(@changeParentCommonData="getCommonData($event)" @updateEditedFieldData="saveEdit($event)" :edit="edit" :fieldData="fieldData")
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
                fieldData.type = "Boolean";
                this.$emit("updateFieldData", fieldData);

            },
        },
    };

</script>
