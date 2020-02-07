<script>
    import axios from "axios";
    import template from "./adminPanel.pug";

    export default {
        template: template,
        data: function () {
            return {
                warningMessage: "",
                settings: {
                    id: "",
                    applicationName: "",
                    language: "",
                    title: "",
                    devMode: false,
                    messageTimeOut: 10000
                }
            };
        },
        methods: {
            sendAdminForm: function (event) {
                this.$nextTick(() => {
                    let form = event.target;
                    if (form.form) {
                        form = form.form;
                    }
                    const formData = new FormData(form);

                    axios
                        .put(form.action, formData, {
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            }
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
            },
            saveConfig: function (event, noValidation) {
                if (noValidation) {
                    this.sendAdminForm(event);
                } else {
                    this.warningMessage = {
                        text: "Are you sure you want save a new config ?",
                        type: "warning",
                        callback: () => {
                            this.sendAdminForm(event);
                        }
                    };
                }
            }
        },
        created: function () {
            axios
                .get("/appapi/settings/")
                .then(response => {
                    this.settings = response.data;
                })
                .catch(errors => {
                    this.warningMessage = {
                        type: "error",
                        text: `Request failed.  Returned status of ${errors}`
                    };
                });
        },
        computed: {
            setName: function () {
                return this.$store.getters.styleSet.id;
            },
            navStructureString: function () {
                return JSON.stringify(this.$store.getters.navStructure);
            }
        }
    };
</script>
