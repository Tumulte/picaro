<template lang="pug">
    div
        div(v-for="(item, index) in list" v-if="checkFilters(item)")
            slot(v-bind:item="item")

            div(@click="editItem(index)") edit
        //rf-form(v-if="edit === index" :rf-model="rfModel" :rf-data="listItemData")

</template>
<script>
    import axios from "axios";
    import richText from "./partials/display/_richText.vue";

    export default {
        name: "rfList",
        data: function () {
            return {
                appName: appName,
                filterCollection: false,
                edit: false,
                listItemData: {}
            };
        },
        props: ["rfModel"],
        methods: {
            checkFilters: function (item) {
                if (!this.filterCollection) {
                    return true;
                }
                for (let filter in this.filterCollection) {
                    if (this.filterCollection[filter] === item[filter]) {
                        return true;
                    }
                }
                return false;
            },
            editItem: function (index) {
                if (this.edit !== index) {
                    this.edit = index;
                    this.listItemData = this.list[index];
                } else {
                    this.edit = false;
                    this.listItemData = {};
                }
            }
        },
        mounted: function () {
            axios
                .get(`/api/${this.appName}/${this.$props.rfModel}`)
                .then(response => {
                    this.$store.commit("list", response.data);
                })
                .catch(error => {
                    this.$store.dispatch("addAlert", {
                        type: "error",
                        text: error
                    });
                });
        },
        watch: {
            $route: function (to) {
                this.filterCollection = {};
                if (to.params.id) {
                    this.filterCollection.id = to.params.id;
                } else if (to.params.type) {
                    this.filterCollection[to.params.type] = this.tags[to.params.tag];
                }
            }
        },
        computed: {
            list: function () {
                return this.$store.getters.list;
            },
            tags: function () {
                return this.$store.getters.tags;
            }
        }
    };

</script>
