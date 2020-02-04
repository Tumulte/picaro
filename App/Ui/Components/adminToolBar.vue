<script>
var template = require("./adminToolBar.pug").default;

var adminToolBarComponent = {
  props: ["views"],
  /**
   * @type {function}
   */
  data: function() {
    return {
      panels: {
        css: false,
        admin: false,
        nav: false,
        styleSet: false,
        models: false
      },
      openPanel: ""
    };
  },
  template: template,
  methods: {
    togglePanel(panel) {
      this.closeAllBut(panel);
      this.panels[panel] = !this.panels[panel];
    },
    setOpenPanel(type) {
      if (this.openPanel === type) {
        this.openPanel = "";
        return;
      }
      this.openPanel = type;
    },
    closeAllBut(clickedPanel) {
      for (var panel in this.panels) {
        if (panel !== clickedPanel) {
          this.panels[panel] = false;
        }
      }
    }
  }
};

module.exports = adminToolBarComponent;
</script>
