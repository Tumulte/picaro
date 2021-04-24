<template lang="pug">
    div
        div(v-for="item in list")
            ul
                component(:is="htmlTag" class="extraClass")
                    a(@click="addFilter(item.id)") {{item[field].content}}
</template>
<script>
import {mapActions} from "vuex";

export default {
    name: "filterLink",
    props: {
        field: {type: String, default: "title"},
        model: {type: String, required: true},
        htmlTag: {type: String, default: "span"},
        extraClass: {type: String, default: ""}
    },
    methods: {
        ...mapActions(["updateFilterCollection"]),
        addFilter(id) {
            this.updateFilterCollection({models: [this.model], type: "layout", filterParams: [id]});
        }
    },
    computed: {

        list: function () {
            return this.$store.getters.list[this.model];
        }
    }
};
</script>
