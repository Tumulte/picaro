<template lang="pug">
    div cunticolu
        ul(v-for="item in navStructure" v-if="!item.hidden")
            li {{ item.displayName }}
                rf-nav(recursive-nav-structure="item.children" v-if="Object.keys(item.children).length > 0")
</template>
<script>
    import axios from "axios";

    export default {
        data: function () {
            return {
                currentNavStructure: {}
            };
        },
        computed: {
            navStructure() {
                return this.$store.getters.navStructure;
            }
        },
        render: function (createElement) {
            const mainRender = listData => {
                const listItem = [];

                for (let item in listData) {
                    if (listData[item].hidden === true) {
                        continue;
                    }
                    let children = "";
                    if (Object.keys(listData[item].children).length > 0) {
                        children = mainRender(listData[item].children);
                    }
                    const link = createElement(
                        "a",
                        {
                            attrs: {
                                href: `/${appName}${listData[item].url}`
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

        created: function () {
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
                        text: `Request failed.  Returned status of ${error}`
                    };
                });
        }
    };
</script>
