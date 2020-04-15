<template lang="pug">
    div
        v-form(v-model="valid" @submit.prevent="sendForm($event)"  method="post" :action="`/api/${appName}/${encodeURI(modelName)}`")
            v-switch(v-model="valid" class="ma-4" label="Valid" readonly)
            div(v-for="model in modelCollection[modelName]" data-jest="form-element")
                component( :is="`rf${model.type}`" :required="model.required" :label="model.label" :regex="model.regex" :name="model.name")
            v-btn(type="submit") Submit

</template>
<script>
    import axios from "axios";
    import rfBoolean from "./partials/form/_boolean.vue";
    import rfText from "./partials/form/_text.vue";

    export default {
        name: "model.vue",
        data: function () {
            return {
                valid: true,
                appName: "",
            };
        },
        props: {modelName: String},
        components: {rfBoolean, rfText},
        computed: {
            modelCollection() {
                return this.$store.getters.modelCollection;
            }
        },
        methods: {
            sendForm(event) {
                this.$nextTick(() => {
                    let form = event.target;

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
        created: function () {
            axios
                .get("/appapi/settings/")
                .then(response => {
                    this.$store.commit(
                        "modelCollection",
                        JSON.parse(response.data.modelCollectionString)
                    );
                    this.appName = response.data.applicationName;

                })
                .catch(error => {

                    this.warningMessage = {
                        type: "error",
                        text: `Request failed.  Returned status of ${error}`
                    };


                });
        }
    };

</script>

<style scoped>

</style>