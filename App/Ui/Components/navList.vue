<script>
    import axios from "axios";

    const template = require("./navList.pug").default;

    export default {
        template: template,
        data: function () {
        },
        props: ["recursiveNavStructure"],
        created: function () {
            axios
                .get("s")
                .then(response => {
                    this.navStructure = JSON.parse(response.data.navStructureString);
                })
                .catch(error => {
                    this.warningMessage = {
                        type: "error",
                        text: `Request failed.  Returned status of ${error}`
                    };
                });
        }
    };

</script>
