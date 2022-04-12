<template lang="pug">
  div
    ul(v-for="item in navStructure" v-if="!item.hidden")
      li {{ item.displayName }}
        rf-nav(recursive-nav-structure="item.children" v-if="Object.keys(item.children).length > 0")

</template>
<script>
import axios from "axios";

export default {
  props: ["recursiveNavStructure"],
  data() {
    return {
      navStructure: []
    }
  },
  created: function () {
    axios
        .get("s")
        .then(response => {
          this.navStructure = JSON.parse(response.data.navStructureString);
        })
        .catch(error => {
          this.warningMessage = {
            type: "error",
            text: `Request failed.  Returned status of ${error}`
          };
        });
  },
};

</script>
