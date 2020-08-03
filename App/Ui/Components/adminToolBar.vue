<template lang="pug">
    div
        v-toolbar(dense=true fixed=true)
            v-btn(@click="togglePanel('admin')" :dark="!panels.admin" :outlined="panels.admin" :depressed="panels.admin" color="rgb(79, 103, 156)" class="ml-2" x-small=true) Admin
            v-btn(@click="togglePanel('nav')" :dark="!panels.nav" :outlined="panels.nav" :depressed="panels.nav" color="rgb(79, 103, 156)" class="ml-2" x-small=true) Nav
            v-btn(@click="togglePanel('css')" :dark="!panels.css" :outlined="panels.css" :depressed="panels.css" color="rgb(79, 103, 156)" class="ml-2" x-small=true) CSS
            v-btn(@click="togglePanel('models')" :dark="!panels.models" :outlined="panels.models" :depressed="panels.models" color="rgb(176, 91, 48)" class="ml-2" x-small=true) Models
            v-btn(@click="togglePanel('users')" :dark="!panels.css" :outlined="panels.css" :depressed="panels.css" color="rgb(228, 167, 94)" class="ml-2" x-small=true) Users

        v-navigation-drawer(v-model="panels.css" fixed=true width="auto" right=true)
            v-container
                v-row
                    v-col
                        v-navigation-drawer(permanent=true width="300")
                            css-panel-selector
                    v-col
                        v-btn(@click="setOpenPanel('color')" text=true) open
                        div(class="subpanels" :class="{'__open': subpanelOpenned('color')}")
                            css-panel-color(:mini-variant="openPanel !== 'color'" :panel-opened="openPanel === 'color'")
                    v-col
                        v-btn(@click="setOpenPanel('ratio')" text=true) open
                        div(class="subpanels" :class="{'__open': subpanelOpenned('ratio')}")
                            css-panel-ratio(:mini-variant="openPanel !== 'ratio'")
                    v-col
                        v-btn(@click="setOpenPanel('main')" text=true) open
                        div(class="subpanels" :class="{'__open': subpanelOpenned('main')}")
                            css-panel-main(:mini-variant="openPanel !== 'main'")
        v-navigation-drawer(v-model="panels.admin" right=true fixed=true width="300")
            admin-panel
        v-navigation-drawer(v-model="panels.nav" right=true fixed=true width="300")
            nav-panel(:views="views")
        v-navigation-drawer(v-model="panels.models" right=true fixed=true width="400")
            model-panel

</template>
<script>
    import adminPanel from "./adminPanel.vue";
    import modelPanel from "./modelPanel.vue";
    import navPanel from "./navPanel.vue";
    import cssPanelSelector from "./cssPanelSelector.vue";
    import cssPanelRatio from "./cssPanelRatio.vue";
    import cssPanelColor from "./cssPanelColor.vue";

    export default {
        props: ["views"],
        components: {adminPanel, modelPanel, navPanel, cssPanelSelector, cssPanelColor, cssPanelRatio},
        data: function () {
            return {
                panels: {
                    css: true,
                    admin: false,
                    nav: false,
                    styleSet: false,
                    models: false
                },
                openPanel: ""
            };
        },
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
            },
            subpanelOpenned(name) {
                return this.openPanel === name;
            }
        }
    };

</script>
<style scoped="true">
    .subpanels {
        width: 50px;
    }

    .subpanels.__open {
        width: 300px;
    }
</style>