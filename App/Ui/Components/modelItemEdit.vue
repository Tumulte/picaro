<template lang="pug">
    div
        v-btn(@click="deleteField") delete
</template>

<script>
import axios from "axios";
import {mapActions, mapGetters} from "vuex";

export default {
    name: "modelItemEdit",
    props: {
        modelName: {type: String, required: true},
        id: {type: String, required: true}
    },
    methods: {
        ...mapActions(["awaitConfirmation", "addAlert"]),
        async deleteField() {
            await this.awaitConfirmation({text: "Are you sure you want to delete that field ?", type: "warning"});
            axios
                .delete(`/api/${this.settings.applicationName}/${encodeURI(this.modelName)}/${this.id}`)
                .then(() => {
                    this.addAlert({
                        type: "success",
                        text: "Deleted successfully"
                    });
                    this.$emit("reloadData");
                }).catch(errors => {
                this.addAlert({
                        type: "error",
                        text: `Request failed.  Returned status of ${errors}`
                    }
                );
            });
        }
    },
    computed: {
        ...mapGetters(["settings"])
    }
};
</script>

<style scoped>

</style>