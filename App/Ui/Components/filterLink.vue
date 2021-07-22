<template lang="pug">
    div
        div(v-for="item in list" v-if="checkFilters(item)")
            ul
                component(:is="htmlTag" class="extraClass")
                    a(@click="addFilter(item.id)" :class="{selected: selectedId === item.id}") {{item[field].content}}
</template>
<script>
import {mapActions, mapGetters} from "vuex";
import checkFilters from "./mixins/checkFilters";

export default {
    name: "filterLink",
    mixins: [checkFilters],
    data() {
        return {selectedId: ""};
    },
    props: {
        field: {type: String, default: "title"},
        panelParams: {type: Object, required: true},
        htmlTag: {type: String, default: "span"},
        extraClass: {type: String, default: ""}
    },
    methods: {
        ...mapActions(["updateFilterCollection"]),
        addFilter(id) {
            if (this.selectedId !== id) {
                this.selectedId = id;
                this.updateFilterCollection({models: [this.model], type: "link", filterParams: [id]});
            }
        },
    },
    computed: {
        ...mapGetters(["selectedCategories"]),
        list: function () {
            return this.$store.getters.list[this.model];
        },
    }
};
</script>
<style scoped>
.selected {
    text-decoration: underline;
}
</style>
