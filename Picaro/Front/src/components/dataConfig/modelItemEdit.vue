<template>
  <button @click="deleteField">
    delete
  </button>
</template>
<script lang="ts" setup>

defineProps({
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

</script>
