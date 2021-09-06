<template lang="pug">
    div(:key="key")
        v-btn(@click="edit = !edit; newItem = false" small class="mr-6" :outlined="!edit" :dark="edit" ) Edit
        v-btn(@click="newItem = !newItem; edit = false" small :outlined="!newItem" :dark="newItem") New
        v-card( class="pa-6 my-6"  v-if="newItem")
            v-card-title
                h2 New Item
            model(:model-name="panelParams.model" @reloadData="loadListData" :panel-params="panelParams")
        div(v-for="(item) in filteredList" v-if="checkFilters(item)")
            rf-model-field(:field-data="item"  :field-name='index' v-for="(field, index) in item" v-if="field.fieldType && !edit" :is-edit="edit" :key="index")
            v-card( v-if="edit" class="pa-6 my-6")
                model(:model-name="panelParams.model" @reloadData="loadListData()" :model-data="item" :is-edit="edit" :panel-params="panelParams")
                model-item-edit(:model-name="panelParams.model" :id="item.id" :is-edit="edit"  @reloadData="loadListData()")


</template>
<script>
import axios from "axios";
import ModelItemEdit from "./modelItemEdit.vue";
import Model from "./modelForm.vue";
import { mapGetters } from "vuex";
import checkFilters from "./mixins/checkFilters";

export default {
  name: "RfList",
  components: { Model, ModelItemEdit },
  mixins: [checkFilters],
  props: { panelParams: { type: Object, required: true } },
  data: function() {
    return {
      edit: false,
      newItem: false,
      key: true,
      listItemData: {},
      activeFilterCollection: []
    };
  },
  mounted: function() {
    this.loadListData();
  },
  methods: {
    loadListData() {
      if (this.panelParams.model) {
        axios
          .get(`/api/${this.panelParams.model}`)
          .then(response => {
            this.$store.dispatch("addItemToList", {
              model: this.panelParams.model,
              listData: response.data
            });
            this.edit = false;
          })
          .catch(error => {
            this.$store.dispatch("addAlert", {
              type: "error",
              text: error
            });
          });
      }
    }
  },

  computed: {
    ...mapGetters(["filterCollectionExpanded", "selectedCategories"]),
    list() {
      return this.$store.getters.list[this.panelParams.model];
    },
    filteredList() {
      this.key = !this.key;
      if (!this.list) {
        return [];
      }
      return this.list.filter(item => {
        const applyFilter = function(method, item, checkedValue) {
          if (method === "eq") {
            return item === checkedValue[0];
          }
        };
        if (!this.listFilters) {
          return this.list;
        }
        for (const [, filterParameters] of Object.entries(this.listFilters)) {
          if (!item[filterParameters.field]) {
            return false;
          }
          return applyFilter(
            filterParameters.method,
            item[filterParameters.field],
            filterParameters.value
          );
        }
      });
    },
    tags() {
      return this.$store.getters.tags;
    },
    listFilters() {
      return this.filterCollectionExpanded[this.panelParams.model];
    }
  }
};
</script>
