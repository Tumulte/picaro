<template lang="pug">

    div
        v-btn(@click="edit = !edit") edit
        div(v-if="edit")
            div(v-for="(layout, index) in modelCollection" :key="index") {{index}}
            v-text-field
            v-btn add
        v-row(v-for="(layoutCommonLine, index) in layoutCommonCollection" :key="index")
            v-col(v-for="layoutCommonColumn in layoutCommonLine" :key="layoutCommonColumn")
                component(:is="layoutCommonColumn" v-if="layoutCommonColumn !== 'default'")
                layout(v-else :selected-layout="selectedLayout")
            v-btn(@click="layoutCommonLine.splice(index + 1,0 , '')" data-jest="add-common-column" v-if="editCommonLayout") + column
            v-btn(@click="layoutCommonCollection.splice(index + 1, 0, [''])" data-jest="add-common-row-inner" v-if="editCommonLayout") + row
        v-btn(@click="layoutCommonCollection.push([''])" data-jest="add-common-row" v-if="editCommonLayout") + row
</template>

<script>
import filterLayout from "./filterLayout.vue";
import filterLink from "./filterLink.vue";
import list from "./displayList.vue";
import {mapGetters, mapState} from "vuex";
import Layout from "./layout.vue";

export default {
    name: "rfLayout",
    data() {
        return {
            edit: false
        };
    },
    components: {Layout, filterLayout, filterLink, list},
    computed: {
        ...mapState(["editCommonLayout"]),
        ...mapGetters(["selectedLayout"]),
        layoutCommonCollection() {
            return this.$store.getters.settings.layoutCommonCollection;
        }
    }
};
</script>

<style scoped>

</style>
