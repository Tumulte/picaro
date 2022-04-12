<template lang="pug">
div(id="rf-upload-panel")
    v-file-input(v-model="file")
    v-btn(@click="submit") Submit
    v-tabs
      v-tab( @click="filteredType = 'all'") All
      v-tab(v-for="(type, index) in availableTypeCollection" :key="index" @click="filteredType = type") {{type}}
    template(v-for="file in fileCollection" )
      span(v-if="file.type.includes(filteredType) || filteredType === 'all'")
        img(v-if="file.type.includes('image')" class="rf-upload-panel-thumb" :data-src="file.file" :src="`/uploaded/${getThumb(file.file)}`")
        div(v-else  class="rf-upload-panel-thumb" :data-src="file.file") {{file.file}}
</template>
<script>
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
  name: 'UploadPanel',
  data() {
    return {
      file: [],
      fileCollection: [],
      filteredType: 'all',
    }
  },
  methods: {
    ...mapActions(['addAlert']),
    submit() {
      const formData = new FormData()
      formData.append('file', this.file)

      axios
        .post('/file/upload', formData)
        .then(() => {
          this.addAlert({
            type: 'success',
            text: `File added !`,
          })
          this.file = null
          this.fetchFiles()
        })
        .catch((errors) => {
          this.addAlert({
            type: 'error',
            text: `Request failed.  Returned status of ${errors}`,
          })
        })
    },
    getThumb(img) {
      const [fileName, ext] = img.split('.')
      return fileName + '-thumb.' + ext
    },
    fetchFiles() {
      axios('/file/list').then((response) => {
        this.fileCollection = response.data
      })
    },
  },
  computed: {
    availableTypeCollection() {
      let typeCollection = this.fileCollection.map(
        (item) => item.type.split('/')[1]
      )
      typeCollection = new Set(typeCollection)
      return typeCollection
    },
  },
  created() {
    this.fetchFiles()
  },
}
</script>
