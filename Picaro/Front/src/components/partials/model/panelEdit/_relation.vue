<template>
  <div>
    <v-select :items="modelCollection" label="Model" item-text="modelName" item-value="id"
              @change="relationParams.modelId = $event"/>
    <v-select :items="selectedModel" label="Model field" v-if="relationParams.modelId" item-text="label" item-value="id"
              @change="sendParams($event)"/>
  </div>
</template>
<script>

export default {
  name: "RelationPanel",
  props: {
    fieldData: {
      type: Object,
      default() {
        return null;
      }
    },
    type: {String, default: null},
    isCreated: {Boolean, default: false}
  },
  data() {
    return {
      relationParams: {
        modelId: null,
        field: null,
        type: 'relation'
      }
    }
  },
  methods: {
    sendParams(event) {
      this.relationParams.field = event
      this.$emit('update-model', this.relationParams)
    }
  },
  computed: {
    selectedModel() {
      return this.modelCollection.find(item => item.id === this.relationParams.modelId)?.model
    }
  }
};
</script>
<style scoped>
</style>
