<script>
    import axios from "axios";

    const template = require("./tagsList.pug").default;
    export default {
        props: ["customTagName", "rfModel"],
        data: function () {
            return {
                warningMessage: [],
                tagIndexCollection: [],
                tagName: "",
                appName: appName
            };
        },
        template: template,
        methods: {
            appendTagList: function (index) {
                if (!this.tagIndexCollection.includes(index)) {
                    this.tagIndexCollection.push(index);
                }
            },

            makeTagList: function (url, index) {
                if (this.tagIndexCollection.length === 0) {
                    return url + index;
                }
                if (this.tagIndexCollection.includes(index)) {
                    return url + this.tagIndexCollection.join(",");
                } else {
                    return `${url + index},${this.tagIndexCollection.join(",")}`;
                }
            }
        },
        computed: {
            tagCollection: function () {
                return this.$store.getters.tagCollection;
            }
        },
        mounted: function () {
            axios
                .get(
                    `/api/${this.appName.toLowerCase()}/tags?model=${this.$props.rfModel}`
                )
                .then(response => {
                    this.$store.commit("tagCollection", response.data);
                })
                .catch(error => {
                    this.warningMessage.push(error);
                });
        }
    };
</script>
