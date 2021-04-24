<template lang="pug">
    div
        div(v-for="(layout, index) in layoutCollection")
            a(@click="changeLayout(index)") {{index}}
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
        changeLayout(layout) {
            this.updateFilterCommonCollection({type: "layout", params: layout});
        }
    }
};
</script>

<style scoped>

</style>