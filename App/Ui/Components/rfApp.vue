<template lang="pug">
    div
        slot
</template>

<script>
function filterRouteToStore({
                                globalFilters: globalFilters,
                                modelFilters: modelFilters,
                                globalParams: globalParams,
                                modelFilterParams: modelFilterParams
                            }) {
    if (!globalFilters) return;
    let filterParams = {all: {}, modelFilters: {}};
    if (globalFilters !== "~") {
        globalFilters = decodeURI(globalFilters).split("__");
        globalParams = decodeURI(globalParams).split("__");
        globalFilters.forEach((item, index) => {
                filterParams.all[item] = globalParams[index].split("--");
            }
        );
    }
    if (modelFilters !== "~") {
        const params = decodeURI(modelFilterParams).split("~");
        decodeURI(modelFilters).split("~").forEach((item, index) => {
            let [models, filters] = item.split("__");
            models = JSON.stringify(models.split("--"));
            filters = filters.split("--");
            const paramsArray = params[index].split("__");
            filterParams.modelFilters[models] = {};
            filters.forEach((subItem, subIndex) => {
                filterParams.modelFilters[models][subItem] = paramsArray[subIndex].split("--");
            });
        });

    }
    return filterParams;
}

export default {
    name: "rfApp",
    watch: {
        $route(to) {
            if (to.params.globalFilters) this.$store.commit("filterCollection", filterRouteToStore(to.params));
        }
    },
    created() {
        if (this.$route.params.globalFilters) this.$store.commit("filterCollection", filterRouteToStore(this.$route.params));
    }
};
</script>

<style scoped>

</style>