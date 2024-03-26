<template>
  <div>
    <v-select
      :items="modelCollection"
      label="Model"
      item-text="modelName"
      item-value="id"
      @change="relationParams.modelId = $event"
    />
    <v-select
      v-if="relationParams.modelId"
      :items="selectedModel"
      label="Model field"
      item-text="label"
      item-value="id"
      @change="sendParams($event)"
    />
  </div>
</template>
<script>

export default {
  name: "RelationPanel",
  props: {
    modelContent: {
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
  computed: {
    selectedModel() {
      return this.modelCollection.find(item => item.id === this.relationParams.modelId)?.model
    }
  },
  methods: {
    sendParams(event) {
      this.relationParams.field = event
      this.$emit('update-model', this.relationParams)
    }
  }
};
</script>
<style scoped>
</style>
