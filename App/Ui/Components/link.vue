<script>
    import axios from "axios";

    const template = require("./link.pug").default;

    export default {
        data: function () {
            return {
                warningMessage: []
            };
        },
        template: template,
        computed: {
            list: function () {
                return this.$store.getters.list;
            }
        }
    };
</script>
