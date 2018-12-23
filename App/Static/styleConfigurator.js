var settings = require("../../rougeSettings.json");
var Vue = require("vue");
var WebFont = require("webfontloader");

window.addEventListener("load", function() {
  var cssPanel = new Vue({
    el: "#css-panel",
    data: {
      fontSize: 20,
      googleFonts: this.getGoogleFonts,
      selectedGoogleFont: ""
    },
    methods: {
      updateCssProperty: function() {
        document.documentElement.style.setProperty(
          "--font-size",
          this.fontSize + "px"
        );
      },
      updateCssFont: function(type) {
        WebFont.load({
          google: {
            families: [this.selectedGoogleFont]
          }
        });
        document.documentElement.style.setProperty(
          "--font-family-" + type,
          this.selectedGoogleFont
        );
      }
    },
    mounted: function() {
      var request = new XMLHttpRequest();

      request.open(
        "GET",
        "https://www.googleapis.com/webfonts/v1/webfonts?sort=alpha&key=" +
          settings.googleFontKey
      );
      var self = this;
      request.onreadystatechange = function() {
        if (request.readyState === 4) {
          if (request.status === 200) {
            var data = JSON.parse(request.responseText);

            self.googleFonts = data.items;
          }
        }
      };
      request.send();
    }
  });
});
