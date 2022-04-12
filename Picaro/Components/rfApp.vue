<template lang="pug">
div
  v-app
    admin-tool-bar(id="rf-admin" v-if="settingsLoaded")
    slot
    rf-layout
    rf-alert

</template>
<script>
import adminToolBar from './adminToolBar.vue'
import axios from 'axios'
function filterRouteToStore({
  globalFilters: globalFilters,
  modelFilters: modelFilters,
  globalParams: globalParams,
  modelFilterParams: modelFilterParams,
}) {
  if (!globalFilters) return
  const filterParams = { all: {}, modelFilters: {} }
  if (globalFilters !== '~') {
    globalFilters = decodeURI(globalFilters).split('.')

    globalParams = decodeURI(globalParams).split('..')

    globalFilters.forEach((item, index) => {
      const params = globalParams[index]
      const [action, filters] = params.split('.')
      const method = action.substr(0, 2)
      const field = action.substr(2)
      filterParams.all[item] = { value: filters, method: method, field: field }
    })
  }
  if (modelFilters !== '~') {
    const params = decodeURI(modelFilterParams).split('~')
    decodeURI(modelFilters)
      .split('~')
      .forEach((item, index) => {
        let [models, filters] = item.split('__')
        models = JSON.stringify(models.split('--'))
        filters = filters.split('--')
        const paramsArray = params[index].split('__')
        filterParams.modelFilters[models] = {}
        filters.forEach((subItem, subIndex) => {
          const filterString = paramsArray[subIndex]
          const method = filterString.substr(0, 2)
          const [field, value] = filterString.substr(2).split('..')
          filterParams.modelFilters[models][subItem] = {
            field: field,
            method: method,
            value: value.split('--'),
          }
        })
      })
  }
  return filterParams
}

export default {
  name: 'RfApp',
  components: { adminToolBar },
  props: {
    isLogged: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return { settingsLoaded: false }
  },
  watch: {
    $route(to) {
      if (to.params.globalFilters)
        this.$store.commit('filterCollection', filterRouteToStore(to.params))
    },
  },
  created() {
    axios
      .get('/settingapi/')
      .then((response) => {
        const { styleSet, settings } = response.data
        this.$store.commit('styleSet', styleSet)
        this.$store.commit('settings', settings)
        this.settingsLoaded = true
      })
      .catch((error) => {
        this.$store.dispatch('addAlert', {
          type: 'error',
          text: `Settings Request failed.  Returned status of ${error}`,
        })
      })
    if (this.$route?.params?.globalFilters)
      this.$store.commit(
        'filterCollection',
        filterRouteToStore(this.$route.params)
      )
  },
  mounted() {
    this.$store.commit('isLogged', this.isLogged)
  }
}
</script>
