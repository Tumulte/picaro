<template lang="pug">
    div
        v-row(v-for="(layoutLine, index) in selectedLayout.layout" :key="index")
            v-col(v-for="(layoutColumn, columnIndex) in layoutLine" :key="layoutColumn.id")
                v-select(:items="availableLayout" @change="$set(layoutColumn,'type', $event)")
                v-select(:items="modelCollectionNames" @change="$set(layoutColumn,'model', $event)")
                filter-selector(type="categories" :savedFilters="layoutColumn.categories" @updateSelectedFilter="changeLayoutProperty(index, columnIndex, $event)" )
                v-btn(@click="linkPanel(`${index}-${columnIndex}`, layoutColumn)") link

                component(:is="layoutColumn.type ? layoutColumn.type : 'div'" :panelParams="linkedPanel[`${index}-${columnIndex}`] || layoutColumn" :key="index + componentKey")
                v-btn(@click="layoutLine.splice(index + 1,0 , initPanel(layoutColumn))" data-jest="add-common-column") + column
            v-btn(@click="selectedLayout.splice(index + 1, 0, [ initPanel(layoutLine[0])])" data-jest="add-common-row-inner") + row
        v-btn(v-if="selectedLayout.length=== 0" @click="selectedLayout.push([{model:null, type:null, category: null}])" data-jest="add-common-row") + row

</template>

<script>
import filterLayout from "./filterLayout.vue";
import filterLink from "./filterLink.vue";
import list from "./displayList.vue";
import {mapActions, mapGetters, mapState} from "vuex";
import FilterSelector from "./partials/_filterSelector";

export default {
    components: {FilterSelector, filterLayout, filterLink, list},
    data() {
        return {availableLayout: ["filterLink", "list"], componentKey: 0, linkedPanel: {}};
    },
    name: "layout",
    props: {
        selectedLayout: {
            type: Object,
            required: true
        }
    },

    computed: {
        ...mapGetters(["modelCollectionNames", "pendingLinkedPanel"]),
    }
    ,
    methods: {
        ...mapActions(["updateLayout"]),
        linkPanel(coordinate, panelData) {
            if (!this.pendingLinkedPanel) {
                this.$store.commit("setPendingLinkedPanel", coordinate);
            } else {
                this.linkedPanel[this.pendingLinkedPanel] = panelData;
                this.$store.commit("setPendingLinkedPanel", "");
                this.componentKey += 1; //reload component
            }
        },
        changeLayoutProperty(lineIndex, columnIndex, payload) {
            this.updateLayout({
                layoutName: this.selectedLayout.name,
                lineIndex: lineIndex,
                columnIndex: columnIndex,
                payload: payload
            });
            this.componentKey += 1; //reload component
        },
        initPanel({model, category}) {
            if (model && category) {
                return {model, type: "div", category};
            } else {
                return {model: null, type: "div", category: null};
            }
        }
    }
}
;
</script>

<style scoped>

</style>
