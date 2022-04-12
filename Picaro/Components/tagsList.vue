<template lang="pug">
  div( :key="$route.fullPath")
    div(v-for="(item, index) in tagCollection")
      ul
        router-link(:to="makeTagList('/tag/'+ tagName +'/', item.id)" @click.native="appendTagList(item.id)" tag="li")
          a {{item.name}}
</template>
<script>
import axios from "axios";

export default {
  props: ["customTagName", "rfModel"],
  data: function () {
    return {
      warningMessage: [],
      tagIndexCollection: [],
      tagName: "",
      // eslint-disable-next-line no-undef
      appName: appName
    };
  },
  computed: {
    tagCollection: function () {
      return this.$store.getters.tagCollection;
    }
  },
  mounted: function () {
    axios
        .get(
            `/api/${this.appName.toLowerCase()}/tags?model=${this.$props.rfModel}`
        )
        .then(response => {
          this.$store.commit("tagCollection", response.data);
        })
        .catch(error => {
          this.warningMessage.push(error);
        });
  },
  methods: {
    appendTagList: function (index) {
      if (!this.tagIndexCollection.includes(index)) {
        this.tagIndexCollection.push(index);
      }
    },

    makeTagList: function (url, index) {
      if (this.tagIndexCollection.length === 0) {
        return url + index;
      }
      if (this.tagIndexCollection.includes(index)) {
        return url + this.tagIndexCollection.join(",");
      } else {
        return `${url + index},${this.tagIndexCollection.join(",")}`;
      }
    }
  }
};
</script>
