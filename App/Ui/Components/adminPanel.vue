<template lang="pug">
    div
        v-toolbar(color="rgb(47, 70, 116)" dark) Admin Settings
        div(class="px-5 py-5")
            warning-component( :warning-message="warningMessage")
            v-form(action="/appapi/settings/?_method=PUT"  id="_admin-form" method="POST" @submit.prevent="saveConfig($event)")
                v-text-field(name="navStructureString" v-model="navStructureString" dense)
                v-text-field(name="modelCollectionString" v-model="modelCollectionString" dense)
                v-text-field(name="id" v-model="settings.id" dense)
                v-text-field(name="name" v-model="settings.applicationName" label="App Name" dense outlined)
                v-text-field(name="styleSet" v-model="setName" dense)
                v-text-field(name="language" v-model="settings.language" label="App Language" dense outlined)
                v-text-field(name="title" v-model="settings.title" label="App Title" dense outlined)
                v-text-field(v-model="settings.messageTimeOut" label="Message Timeout (in ms)" dense outlined)
                v-switch(v-model="settings.devMode" label="Dev Mode" dense)
                button(@click.prevent="saveConfig($event,true)" id="_admin-form-ext-submit") submit

</template>
<script>
    import axios from "axios";

    export default {
        data: function () {
            return {
                warningMessage: {},
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
            },
            modelCollection() {
                return this.$store.getters.modelCollection;
            },
            modelCollectionString() {
                return JSON.stringify(this.modelCollection);
            }
        }
    };
</script>
