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
  let filterParams = { all: {}, modelFilters: {} };
  if (globalFilters !== "~") {
    globalFilters = decodeURI(globalFilters).split(".");

    globalParams = decodeURI(globalParams).split("..");

    globalFilters.forEach((item, index) => {
      const params = globalParams[index];
      const [action, filters] = params.split(".");
      const method = action.substr(0, 2);
      const field = action.substr(2);
      filterParams.all[item] = { value: filters, method: method, field: field };
    });
  }
  if (modelFilters !== "~") {
    const params = decodeURI(modelFilterParams).split("~");
    decodeURI(modelFilters)
      .split("~")
      .forEach((item, index) => {
        let [models, filters] = item.split("__");
        models = JSON.stringify(models.split("--"));
        filters = filters.split("--");
        const paramsArray = params[index].split("__");
        filterParams.modelFilters[models] = {};
        filters.forEach((subItem, subIndex) => {
          let filterString = paramsArray[subIndex];
          const method = filterString.substr(0, 2);
          const [field, value] = filterString.substr(2).split("..");
          filterParams.modelFilters[models][subItem] = {
            field: field,
            method: method,
            value: value.split("--")
          };
        });
      });
  }
  return filterParams;
}

export default {
  name: "RfApp",
  props: {
    isLogged: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    $route(to) {
      if (to.params.globalFilters)
        this.$store.commit("filterCollection", filterRouteToStore(to.params));
    }
  },
  created() {
    if (this.$route.params.globalFilters)
      this.$store.commit(
        "filterCollection",
        filterRouteToStore(this.$route.params)
      );
  }
};
</script>
