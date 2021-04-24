export default {
    data: function () {

        return {
            valid: true,
            isEdited: false,
            commonData: {label: "", name: ""},
        };
    },
    props: {
        edit: {
            default: false,
            type: Boolean,
        },
        fieldData: {
            type: Object,
            default: () => ({})

        }
    },
    methods: {

        editField() {
            this.isEdited = true;
        },
        cancelEdit() {
            this.isEdited = false;

        },
        addField: function (extraParams = {}) {
            this.$emit("addFieldData", {...this.commonData, ...extraParams});
            this.isEdited = false;
        },
        saveEdit() {
            this.$emit("updateEditedFieldData", this.commonData);
            this.isEdited = false;
        },
    },

    computed: {
        editOrAdd() {
            return this.edit || this.isEdited;
        }
    }
};