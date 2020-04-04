export default {
    data: function () {

        return {
            validCounterName: "labelFieldCounter",
            name: "",
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

        saveEdit(data) {
            this.$emit("updateEditedFieldData", data);
        },
    },
    computed: {
        allFieldsValid() {
            return this.$store.getters.validCounter === 0;
        },
    },
};