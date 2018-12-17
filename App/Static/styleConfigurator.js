var settings = require("../../rougeSettings.json");
var vue = require("vue");

var request = new XMLHttpRequest();
var updateGoogleFont(this) = function (vue) {
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200) {
                var data = JSON.parse(request.responseText);

                vue.googleFonts = data;
            }
        }
    };
    request.open(
        "GET",
        "https://www.googleapis.com/webfonts/v1/webfonts?sort=alpha&key=" +
        settings.googleFontKey
    );
}

request.send();
window.addEventListener("load", function () {

    var cssPanel = new vue({
        el: "#css-panel",
        data: {
            fontSize: 20,
            googleFonts: updateGoogleFont(this)
        },
        methods: {
            updateCssProperty: function () {
                document.documentElement.style.setProperty(
                    "--font-size",
                    this.fontSize + "px"
                );
            }
        }
    });
});