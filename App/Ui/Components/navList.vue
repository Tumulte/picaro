<script>
const axios = require("axios");
var template = require("./navList.pug").default;

var navComponent = {
  template: template,
  data: function() {},
  props: ["recursiveNavStructure"],
  created: function() {
    axios
      .get("s")
      .then(response => {
        this.navStructure = JSON.parse(response.data.navStructureString);
      })
      .catch(error => {
        this.warningMessage = {
          type: "error",
          text: "Request failed.  Returned status of " + error
        };
      });
  }
};

module.exports = navComponent;
</script>
