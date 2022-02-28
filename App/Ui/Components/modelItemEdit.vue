<template lang="pug">

    v-btn(@click="deleteField" small outlined) delete
</template>
<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ModelItemEdit",
  props: {
    modelName: { type: String, required: true },
    id: { type: String, required: true }
  },
  methods: {
    ...mapActions(["awaitConfirmation", "addAlert"]),
    deleteField() {
      this.awaitConfirmation({
        text: "Are you sure you want to delete that field ?",
        type: "warning"
      })
        .then(this.deleteFromDatabase)
        .catch(() => {
          return;
        });
    },
    deleteFromDatabase() {
      axios
        .delete(`/api/${encodeURI(this.modelName)}/${this.id}`)
        .then(() => {
          this.addAlert({
            type: "success",
            text: "Deleted successfully"
          });
          this.$emit("reloadData");
        })
        .catch(errors => {
          this.addAlert({
            type: "error",
            text: `Request failed.  Returned status of ${errors}`
          });
        });
    }
  },
  computed: {
    ...mapGetters(["settings"])
  }
};
</script>
