<template lang="pug">
    div
        v-row(v-for="(layoutCommonLine, index) in layoutCommonCollection" :key="index")
            v-col(v-for="layoutCommonColumn in layoutCommonLine" :key="layoutCommonColumn")
                component(:is="layoutCommonColumn" v-if="layoutCommonColumn !== 'default'")
                v-row(v-else v-for="(layoutLine, index) in selectedLayout" :key="index")
                    v-col(v-for="layoutColumn in layoutLine" :key="layoutColumn.id")
                        component(:is="layoutColumn.type" :model="layoutColumn.model")
</template>

<script>
import filterLayout from "./filterLayout.vue";
import filterLink from "./filterLink.vue";
import list from "./displayList.vue";
import {mapGetters} from "vuex";

export default {
    name: "rfLayout",
    components: {filterLayout, filterLink, list},
    computed: {
        ...mapGetters(["selectedLayout"]),
        layoutCommonCollection() {
            return this.$store.getters.settings.layoutCommonCollection;
        }
    }
};
</script>

<style scoped>

</style>
