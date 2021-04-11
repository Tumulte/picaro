<template lang="pug">
    div
        v-form(v-model="valid" @submit.prevent="sendForm()")
            v-switch(v-model="valid" class="ma-4" label="Valid" readonly)
            div(v-for="modelParams in modelCollection[model]" data-jest="form-element")
                component(:is="`rf${modelParams.type}`" :required="modelParams.required" :label="modelParams.label" :regex="modelParams.regex" :name="modelParams.name" :model="model" @updateData="updateData($event)")
            v-btn(type="submit") Submit
</template>
<script>
import axios from "axios";
import rfBoolean from "./partials/model/edit/_boolean.vue";
import rfText from "./partials/model/edit/_text.vue";
import rfRichText from "./partials/model/edit/_richText.vue";
import {mapActions, mapGetters} from "vuex";

export default {
    name: "model",
    data: function () {
        return {
            valid: true,
            currentModelData: {}
        };
    },
    props: {model: String},
    components: {rfBoolean, rfText, rfRichText},
    methods: {
        ...mapActions(["addAlert"]),
        updateData(data) {
            console.debug(data);
            this.$set(this.currentModelData, data.name, data.value);
        },
        sendForm() {
            this.$nextTick(() => {
                axios
                    .post(`/api/${this.settings.applicationName}/${encodeURI(this.model)}`, this.currentModelData)
                    .then(() => {
                        this.addAlert({
                            type: "success",
                            text: "Saved successfully"
                        });
                    }).catch(errors => {
                    this.addAlert({
                            type: "error",
                            text: `Request failed.  Returned status of ${errors}`
                        }
                    );
                });
            });
        }
    },
    computed: {
        ...mapGetters(["modelCollection", "settings"])
    },
    watch: {
        modelCollection() {
            this.currentModelData = this.modelCollection[this.model];
        }
    }
};

</script>

<style scoped>

</style>