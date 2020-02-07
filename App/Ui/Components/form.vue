<script>
    import formGenerator from "../../formGenerator";
    import axios from "axios";

    export default {
        props: ["rfModel", "rfData"],
        data: function () {
            return {
                form: "",
                template: "",
                tagStringCollection: "",
                matchingTagCollection: [],
                warningMessage: [],
                inputData: {},
                formData: {}
            };
        },
        template:
            "<div><v-runtime-template :template=\"formData.template\"/><warning-component :warningMessage=\"warningMessage\"/></div>",

        methods: {
            createInput: function (name) {
                if (!this.inputData.hasOwnProperty(name)) {
                    this.inputData[name] = "";
                }
            },

            sendForm: function (event) {
                this.$nextTick(() => {
                    let form = event.target;

                    if (form.form) {
                        form = form.form;
                    }
                    const formData = new FormData(form);

                    axios
                        .post(form.action, formData, {
                            headers: {"Content-Type": "application/x-www-form-urlencoded"}
                        })
                        .then(() => {
                            this.warningMessage = {
                                type: "success",
                                text: "Saved successfully"
                            };
                        })
                        .catch(errors => {
                            this.warningMessage = {
                                type: "error",
                                text: `Request failed.  Returned status of ${errors}`
                            };
                        });
                });
            }
        },
        computed: {
            tagCollection: function () {
                return this.$store.getters.tagCollection;
            },
            formType: {
                get() {
                    return this.$store.getters.formType;
                },
                set(newValue) {
                    this.$store.commit("formType", newValue);
                }
            },
            list: function () {
                return this.$store.getters.list;
            }
        },
        watch: {
            template: function () {
                this.formType = this.formData.type;
            }
        },
        mounted: function () {
            const formData = formGenerator({
                /* eslint-disable no-undef */
                app: appName.toLowerCase(),
                table: this.rfModel
            });

            if (this.rfData) {
                this.inputData = this.rfData;
            }
            this.formData = formData;
        }
    };
</script>
