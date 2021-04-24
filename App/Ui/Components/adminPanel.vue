<template lang="pug">
    div
        v-toolbar(color="rgb(47, 70, 116)" dark) Admin Settings
        div(class="px-5 py-5")
            v-form(id="_admin-form" method="POST" @submit.prevent="saveConfig($event)")
                v-text-field(name="navStructureString" v-model="navStructureString" dense)
                v-text-field(name="id" v-model="settings.id" dense)
                v-text-field(name="name" v-model="settings.applicationName" label="App Name" dense outlined)
                v-text-field(name="styleSet" v-model="styleSet.id" dense)
                v-text-field(name="language" v-model="settings.language" label="App Language" dense outlined)
                v-text-field(name="title" v-model="settings.title" label="App Title" dense outlined)
                v-text-field(v-model="settings.messageTimeOut" label="Message Timeout (in ms)" dense outlined)
                v-switch(v-model="settings.devMode" label="Dev Mode" dense)
                button(@click.prevent="saveConfig($event,true)" id="_admin-form-ext-submit") submit
</template>
<script>
import axios from "axios";
import {mapGetters} from "vuex";

export default {
    methods: {
        createNewModel() {
            axios
                .post(`/api/${appName}/newmodel/${this.newModelName}`)
                .then(() => {
                    this.$store.dispatch("addAlert", {
                        type: "info",
                        text: `The model "${this.newModelName}" was created`
                    });
                })
                .catch(errors => {
                    this.$store.dispatch("addAlert", {
                        type: "error",
                        text: `The model "${this.newModelName}" already exists ${errors}`
                    });
                });
        },
        sendAdminForm: function () {
            this.$nextTick(() => {
                axios
                    .put("/appapi/settings/", this.settings)
                    .then(() => {
                        if (this.newModelName) {
                            this.createNewModel();
                        }
                        this.$store.dispatch("addAlert", {
                            type: "success",
                            text: "Settings saved successfully !"
                        });
                    })
                    .catch(errors => {
                        this.$store.dispatch("addAlert", {
                            type: "error",
                            text: `Request failed.  Returned status of ${errors}`
                        });
                    });
            });
        },
        saveConfig: async function (event, noValidation) {
            if (noValidation) {
                this.sendAdminForm(event);
            } else {
                await this.$store.dispatch("awaitConfirmation", {
                    text: "Are you sure you want saveStyleSet a new config ?",
                    type: "warning"
                });
                this.sendAdminForm(event);

            }
        }
    },

    computed: {
        ...mapGetters(["styleSet", "newModelName", "modelCollection", "settings"]),
        navStructureString: function () {
            return JSON.stringify(this.$store.getters.navStructure);
        },
    }
};
</script>
