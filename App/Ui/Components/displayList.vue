<template lang="pug">
    div(:key="key")
        div( v-if="isLogged")
            v-btn(@click="edit = !edit; newItem = false" small class="mr-6" :outlined="!edit" :dark="edit" ) Edit
            v-btn(@click="newItem = !newItem; edit = false" small :outlined="!newItem" :dark="newItem") New
            v-card( class="pa-6 my-6"  v-if="newItem")
                v-card-title
                    h2 New Item
                model(:model-name="moduleParams.model" @reloadData="loadListData" :module-params="moduleParams")
        div(v-for="(item) in filteredList")
            rf-model-field(:field-data="item"  :field-name='key' v-for="(field, key) in item" v-if="field.fieldType && !edit" :is-edit="edit" :key="key" :field-params="modelCollection[moduleParams.model].find(item=> item.name === key)" :module-params="moduleParams")
            v-card( v-if="edit" class="pa-6 my-6")
                model(:model-name="moduleParams.model" @reloadData="loadListData()" :model-data="item" :is-edit="edit" :module-params="moduleParams")
                model-item-edit(:model-name="moduleParams.model" :id="item.id" :is-edit="edit"  @reloadData="loadListData()")
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import { applyFilter } from "./Utils/filter";

export default {
  name: "RfList",
  components: {
    model: () => import("./modelForm.vue"),
    "model-item-edit": () => import("./modelItemEdit.vue")
  },
  props: { moduleParams: { type: Object, required: true } },
  data: function() {
    return {
      edit: false,
      newItem: false,
      key: true,
      listItemData: {},
      activeFilterCollection: []
    };
  },
  watch: {
    filteredList() {
      this.key = !this.key;
    }
  },
  mounted: function() {
    this.loadListData();
  },
  methods: {
    loadListData() {
      if (this.moduleParams.model) {
        axios
          .get(`/api/${this.moduleParams.model}`)
          .then(response => {
            this.$store.dispatch("addItemToList", {
              model: this.moduleParams.model,
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
    ...mapGetters([
      "filterCollectionExpanded",
      "selectedCategories",
      "modelCollection",
      "filterCollection",
      "isLogged"
    ]),
    list() {
      return this.$store.getters.list[this.moduleParams.model] || [];
    },
    filteredList() {
      return this.list.filter(item => {
        return applyFilter(
          item,
          [this.listFilters, this.filterCollection.all],
          this.moduleParams
        );
      });
    },
    tags() {
      return this.$store.getters.tags;
    },
    listFilters() {
      return this.filterCollectionExpanded[this.moduleParams.model];
    }
  }
};
</script>
