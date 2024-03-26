<template>
  <div v-for="item in selectedRelation" @click="addFilter(item.itemId)">
    {{ item.content }}
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Relation",
  props: {
    modelContent: {
      type: Object, default: () => {
      }
    },
    fieldParams: {
      type: Object, default: () => {
      }
    },
    moduleParams: {type: Object, default: null},

  },
  data() {
    return {
      relationList: []
    }
  },
  computed: {
    selectedRelation() {
      return this.relationList.fields?.filter(item => this.modelContent.content.includes(item.itemId))
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
  },
  methods: {
    ...mapActions(["updateFilterCollection"]),
    addFilter(id) {
      this.updateFilterCollection({
        models: [this.moduleParams.model],
        type: "filter",
        filterParams: {value: [id], field: this.modelContent.id, method: "fd"}
      });
    }
  }
};
</script>
