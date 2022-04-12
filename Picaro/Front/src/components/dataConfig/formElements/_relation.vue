<template lang="pug">
v-combobox(:items="relationList?.fields || []" item-value="itemId" item-text="content" multiple v-model="selectedRelationCollection")
</template>
<script>
import axios from "axios";

export default {
  name: "RelationEdit",
  props: {
    fieldParams: { type: Object, required: true },
    fieldData: { type: Object, default: null },
    isEdit: { type: Boolean, default: false }
  },
  data() {
    return {
      relationList: [],
      selectedRelationCollection: []
    }
  },
  computed: {
    formatedData() {
      return {
        id: this.fieldParams.id,
        name: this.fieldParams.name,
        content: this.selectedRelationCollectionId,
        fieldType: "relation",
      };
    },
    selectedRelationCollectionId() {
      return this.selectedRelationCollection.map(item => item.itemId)
    }
  },
  watch: {
    selectedRelationCollection() {
      this.$emit("updateData", {
        name: this.fieldParams.name,
        value: this.formatedData
      });
    }
  },
  created() {
    axios.get(`/api/${this.fieldParams.extraParams.modelId}/field/${this.fieldParams.extraParams.field}`)
        .then(response => {
          this.relationList = response.data
        })
        .catch(error => {
          this.$store.dispatch("addAlert", {
            type: "error",
            text: error
          });
        });
  }
}
</script>
<style scoped>

</style>
