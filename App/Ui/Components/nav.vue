<script>
const axios = require("axios");

var navComponent = {
  data: function() {
    return {
      currentNavStructure: {}
    };
  },
  computed: {
    navStructure() {
      return this.$store.getters.navStructure;
    }
  },
  render: function(createElement) {
    var mainRender = listData => {
      var listItem = [];

      for (var item in listData) {
        if (listData[item].hidden === true) {
          continue;
        }
        if (Object.keys(listData[item].children).length > 0) {
          var children = mainRender(listData[item].children);
        } else {
          children = "";
        }
        var link = createElement(
          "a",
          {
            attrs: {
              href: "/" + appName + listData[item].url
            }
          },
          [listData[item].displayName]
        );
        listItem.push(createElement("li", [link, children]));
      }
      return createElement("ul", [listItem]);
    };

    return createElement("div", [mainRender(this.navStructure)]);
  },

  created: function() {
    axios
      .get("/appapi/settings/")
      .then(response => {
        this.$store.commit(
          "navStructure",
          JSON.parse(response.data.navStructureString)
        );
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
