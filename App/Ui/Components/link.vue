<script>
const axios = require("axios");
var template = require("./link.pug").default;

var linkComponent = {
  data: function() {
    return {
      warningMessage: []
    };
  },
  template: template,
  computed: {
    list: function() {
      return this.$store.getters.list;
    }
  }
};
module.exports = linkComponent;
</script>
