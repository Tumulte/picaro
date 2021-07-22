<template lang="pug">
    div
        v-btn(@click="edit = !edit") Edit
        model(:model-name="model" @reloadData="loadListData" v-if="edit")
        div(v-for="(item) in list" v-if="checkFilters(item)")
            rf-model-field(:field-data="item"  :field-name='index' v-for="(field, index) in item" v-if="field.fieldType && !edit" :is-edit="edit" :key="index")
            model(:model-name="panelParams.model" @reloadData="reloadListData" :model-data="item" v-if="edit" :is-edit="edit")
            model-item-edit(:model-name="panelParams.model" :id="item.id" :is-edit="edit"  @reloadData="loadListData()" v-if="edit")


</template>
<script>
import axios from "axios";
import ModelItemEdit from "./modelItemEdit.vue";
import Model from "./modelForm.vue";
import {mapGetters} from "vuex";
import checkFilters from "./mixins/checkFilters";

export default {
    name: "rfList",
    components: {Model, ModelItemEdit},
    mixins: [checkFilters],
    data: function () {
        return {
            appName: appName,
            edit: false,
            listItemData: {},
            activeFilterCollection: []
        };
    },
    props: {panelParams: {type: Object, required: true}},
    methods: {

        loadListData() {
            axios
                .get(`/api/${this.appName}/${this.panelParams.model}`)
                .then(response => {
                    this.$store.dispatch("addItemToList", {model: this.model, listData: response.data});
                    this.edit = false;
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
        ...mapGetters(["filterCollectionExpanded", "selectedCategories"]),
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
