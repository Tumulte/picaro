<script>
    const template = require("./adminToolBar.pug").default;

    export default {
        props: ["views"],
        /**
         * @type {function}
         */
        data: function () {
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
                for (let panel in this.panels) {
                    if (panel !== clickedPanel) {
                        this.panels[panel] = false;
                    }
                }
            }
        }
    };

</script>
