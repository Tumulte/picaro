<template lang="pug">
    div
        div(v-for="item in list" v-if="checkCategorie(item)")
            ul
                component(:is="htmlTag" class="extraClass")
                    a(@click="addFilter(item.id)" :class="{selected: selectedId === item.id}") {{item[field].content}}
</template>
<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "filterLink",
    data() {
        return {selectedId: ""};
    },
    props: {
        field: {type: String, default: "title"},
        model: {type: String, required: true},
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
        checkCategorie(item) {
            return this.selectedCategory === item.categories.content;
        },
    },
    computed: {
        ...mapGetters(["selectedCategory"]),
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
