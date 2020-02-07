<script>
    const template = require("./modelPanel.pug").default;

    export default {
        template: template,
        /**
         * @type {function}
         */
        data() {
            return {
                dataType: [
                    {
                        name: "text",
                        component: "v-text-field"
                    },
                    {
                        name: "boolean",
                        component: "v-switch"
                    },
                    {
                        name: "number",
                        component: "v-text-field"
                    },
                    {
                        name: "range",
                        component: "v-text-field"
                    },
                    {
                        name: "date",
                        component: "v-text-field"
                    },
                    {
                        name: "tags",
                        component: "v-text-field"
                    },
                    {
                        name: "relation",
                        component: "v-text-field"
                    },
                    {
                        name: "radio",
                        component: "v-text-field"
                    },
                    {
                        name: "select",
                        component: "v-text-field"
                    }
                ],
                modelCollection: [],
                selectedModelIndex: null,
                selectedType: null,
                typeCollection: []
            };
        },
        methods: {
            addModel() {
                this.modelCollection.push({
                    name: `model${this.modelCollection.length}`
                });
                this.selectedModelIndex = this.modelCollection.length - 1;
            },
            selectModel(index) {
                this.selectedModelIndex = index;
            },
            addType() {
                this.typeCollection.push(this.selectedType);
            }
        },
        computed: {
            model() {
                return this.modelCollection[this.selectedModelIndex];
            }
        }
    };
</script>
