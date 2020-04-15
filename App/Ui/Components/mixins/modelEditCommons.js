export default {
    data: function () {

        return {
            valid: true,
            isEdited: false,
            commonData: {}
        };
    },
    props: {
        edit: {
            default: false,
            type: Boolean,
        },
        fieldData: {
            type: Object,
        }
    },
    methods: {

        editField() {
            this.isEdited = true;
        },
        cancelEdit() {
            this.isEdited = false;

        },
        addField() {
            this.$emit("addFieldData", this.commonData);
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