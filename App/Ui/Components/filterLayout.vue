<template lang="pug">
    div
        div(v-for="(layout, index) in layoutCollection")
            a(@click="changeLayout(index, layout)") {{index}}
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "filterLayout",
    computed: {
        layoutCollection() {
            return this.$store.getters.settings.layoutCollection;
        }
    },
    methods: {
        ...mapActions(["updateFilterCommonCollection"]),
        changeLayout(index, layout) {
            this.updateFilterCommonCollection({type: "layout", params: index});
        }
    }
};
</script>

<style scoped>

</style>
