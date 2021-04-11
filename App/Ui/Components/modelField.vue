<template lang="pug">
    div
        component(:is="`${fieldData[fieldName].fieldType}${edit?'-edit':''}`" :field-data="fieldData[fieldName]" :is-edit="true" @saveEdit="sendForm($event)" @endEdit="edit = false")
        v-btn(@click="toggleEdit()" v-if="!edit") edit


</template>

<script>
import richTextEdit from "./partials/model/edit/_richText.vue";
import richText from "./partials/model/display/_richText.vue";
import {mapActions, mapGetters} from "vuex";
import axios from "axios";

export default {
    name: "modelField",
    components: {richTextEdit, richText},
    data() {
        return {
            edit: false
        };
    },
    props: {fieldData: {type: Object, require: true}, fieldName: {type: String, require: true}},
    methods: {
        ...mapActions(["awaitConfirmation", "addAlert"]),
        toggleEdit() {
            this.edit = !this.edit;
        },
        sendForm(data) {
            let currentFieldData = this.fieldData;
            currentFieldData[this.fieldName] = data;
            this.$nextTick(() => {
                axios
                    .put(`/api/${this.settings.applicationName}/${encodeURI(this.$parent.model)}/${this.fieldData.id}`, currentFieldData)
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
    watch: {},
    computed: {
        ...mapGetters(["fieldEditInProgess", "settings"])
    }
};
</script>

<style scoped>

</style>