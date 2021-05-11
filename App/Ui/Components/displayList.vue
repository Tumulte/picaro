<template lang="pug">
    div
        v-btn(@click="edit = !edit") Edit
        model(:model-name="model" @reloadData="loadListData" v-if="edit")
        div(v-for="(item) in list" v-if="checkFilters(item)")
            rf-model-field(:field-data="item"  :field-name='index' v-for="(field, index) in item" v-if="field.fieldType" :key="index")
            model-item-edit(:model-name="model" :id="item.id"  @reloadData="loadListData()" v-if="edit")

</template>
<script>
import axios from "axios";
import ModelItemEdit from "./modelItemEdit.vue";
import Model from "./modelForm.vue";
import {mapGetters} from "vuex";

export default {
    name: "rfList",
    components: {Model, ModelItemEdit},
    data: function () {
        return {
            appName: appName,
            edit: false,
            listItemData: {},
            activeFilterCollection: []
        };
    },
    props: ["model"],
    methods: {
        checkFilters(item) {
            const isLinked = !(this.listFilters && this.listFilters.link) || this.listFilters.link[0] === item.id;
            const hasCategory = !(this.selectedCategory && item.categories) || this.selectedCategory === item.categories;
            return isLinked && hasCategory;
        },
        loadListData() {
            axios
                .get(`/api/${this.appName}/${this.model}`)
                .then(response => {
                    this.$store.dispatch("addItemToList", {model: this.model, listData: response.data});
                })
                .catch(error => {
                    this.$store.dispatch("addAlert", {
                        type: "error",
                        text: error
                    });
                });
        }
    },
    mounted: function () {
        this.loadListData();
    },


    computed: {
        ...mapGetters(["filterCollectionExpanded", "selectedCategory"]),
        list() {
            return this.$store.getters.list[this.model];
        },
        tags() {
            return this.$store.getters.tags;
        },
        listFilters() {
            return this.filterCollectionExpanded[this.model];
        },

    }
};

</script>
