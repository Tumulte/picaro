<template>
  <button @click="deleteField">
    delete
  </button>
</template>
<script setup lang="ts">
import axios from "axios";

const props = defineProps({
  modelName: {type: String, required: true},
  id: {type: String, required: true}
})

function deleteField() {
  this.awaitConfirmation({
    text: "Are you sure you want to delete that field ?",
    type: "warning"
  })
      .then(this.deleteFromDatabase)
      .catch(() => {
        return;
      });
}

function deleteFromDatabase() {
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


</script>
