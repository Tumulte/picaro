<script>
    import sortobject from "deep-sort-object";
    import Vue from "vue";

    const sortNumberLowToHigh = function (a, b) {
        a = a.split("__")[0];
        b = b.split("__")[0];
        return a - b;
    };
    const recursiveUpdateParentCollection = function (destinationNode, movingNode, index) {
        movingNode.parents = JSON.parse(JSON.stringify(destinationNode.parents));
        if (index !== false) {
            movingNode.parents.push(index);
        }
        if (Object.keys(movingNode.children).length > 0) {
            for (let child in movingNode.children) {
                recursiveUpdateParentCollection(movingNode, movingNode.children[child], movingNode.name);
            }
        }
    };
    const generateStructureFromFileList = function (views) {
        const structure = {};

        const parsedFiles = JSON.parse(views);
        let indexOffset = 0;
        parsedFiles.forEach(function (e, index) {
            if (e.indexOf(".pug") !== -1) {
                const displayName = e.replace(".pug", "");
                const name = `${index - indexOffset}__${displayName}`;

                structure[name] = {
                    hidden: false,
                    children: {},
                    parents: [],
                    name: name,
                    displayName: displayName,
                    url: `/${displayName}`,
                    custom: false,
                };
            } else indexOffset += 1;
        });

        return structure;
    };
    const renameChildren = function (node, oldName, newName) {
        node.parents.forEach(function (item, index) {

            if (item === oldName) {
                node.parents[index] = newName;
            }
        });

        if (Object.keys(node.children).length > 0) {
            for (let child in node.children) {
                renameChildren(node.children[child], oldName, newName);
            }
        }
    };

    //THE COMPONENT
    export default {
        /**
         * @type {function}
         */
        props: ["views"],

        data: function () {
            return {
                movingNode: false,
                showInput: true,
                warningMessage: [],
            };
        },

        render: function (createElement) {
            const saveButton = createElement(
                "v-btn", {
                    on: {
                        click: () => {
                            this.saveNavEntry();
                        },
                    },
                },
                "Save"
            );

            const addButton = createElement(
                "v-btn", {
                    on: {
                        click: () => {
                            this.addNavEntry();
                        },
                    },
                },
                "Add"
            );
            const refreshButton = createElement(
                "Button", {
                    on: {
                        click: () => {
                            this.refreshFiles();
                        },
                    },
                },
                "Refresh files"
            );

            const listContainer = this.generateMainRender(createElement, this.navStructure);
            return createElement("div", [saveButton, listContainer, addButton, saveButton]);
        },

        methods: {
            //RENDER METHODS
            generateMainRender: function (createElement, collection) {
                const listItemCollection = [];

                for (let node in collection) {
                    const hiddenCheck = this.generateHiddenCheck(createElement, node, collection);

                    const nameInput = this.generateNameInput(createElement, node, collection);

                    const urlInput = this.generateUrlInput(createElement, node, collection);

                    const reorderTrigger = this.generateReorderTrigger(createElement, collection, node);
                    let cancel = "";
                    if (node === this.movingNode.name) {
                        cancel = createElement(
                            "v-card", {
                                attrs: {
                                    color: "error",
                                    dark: true
                                },
                                class: "text-center",
                                on: {
                                    click: e => {
                                        e.stopPropagation();
                                        this.cancelSelection();
                                    },
                                },
                            },
                            "cancel"
                        );
                    }
                    let remove = "";
                    if (collection[node].custom) {
                        remove = createElement(
                            "span", {
                                on: {
                                    click: e => {
                                        e.stopPropagation();
                                        this.removeCustom(collection[node]);
                                    },
                                },
                            },
                            "(remove)"
                        );
                    }
                    let children = "";
                    if (Object.keys(collection[node].children).length > 0) {
                        children = this.generateMainRender(createElement, collection[node].children);
                    }

                    //Todo replace parents and display name
                    if (collection[node].parents) {
                        let parents = collection[node].parents.join(",");
                    } else {
                        parents = "";
                    }
                    const nodeKey = createElement(
                        "v-card-title", {
                            class: "py-1 body-2"
                        },
                        [node]
                    );
                    const accordionHeader = createElement("v-expansion-panel-header", {
                        class: "caption py-1"
                    }, ["Parameters"]);
                    const accordionContent = createElement("v-expansion-panel-content", [nameInput, urlInput, hiddenCheck]);
                    const accordion = createElement("v-expansion-panel", [accordionHeader, accordionContent]);
                    const accordionContainer = createElement("v-expansion-panels", {
                        class: "my-1"
                    }, [accordion]);

                    let parents = createElement("v-card-subtitle", [parents]);
                    listItemCollection.push(
                        this.generateListItem(
                            createElement,
                            node,
                            [reorderTrigger, nodeKey, parents, accordionContainer, remove, cancel, children],
                            collection
                        )
                    );
                }
                const warningMessages = createElement("warning-component", {
                    props: {
                        warningMessage: this.warningMessage,
                    },
                });
                listItemCollection.push(warningMessages);

                return createElement("div", listItemCollection);
            },
            generateHiddenCheck: function (createElement, index, collection) {
                return createElement("v-switch", {
                    attrs: {
                        label: "hide",
                        value: collection[index].hidden
                    },
                    on: {
                        change: () => this.toggleNodeData(collection, index),
                        click: event => {
                            collection[index].hidden = !collection[index].hidden;
                            event.stopPropagation();
                        }
                    },
                    class: "_list-item-check",
                });
            },
            generateUrlInput: function (createElement, index, collection) {
                return createElement("v-text-field", {
                    attrs: {
                        type: "text",
                        label: "url",
                        outlined: true,
                        dense: true

                    },
                    domProps: {
                        value: collection[index].url,
                    },
                    on: {
                        click: event => {
                            event.stopPropagation();
                        },
                        change: event => {
                            this.$emit("change", this.updateNodeData(collection, index, "url", event.target.value));
                        },
                    },
                    class: "_list-item-url",
                });
            },
            generateListItem: function (createElement, index, childrenArray, collection) {

                let moveButtonText = "Move";
                if (this.movingNode) {
                    moveButtonText = "Insert Inside";
                }
                let moveButton = createElement("v-card", {
                    class: "text-center",
                    on: {
                        click: e => {
                            e.stopPropagation();
                            this.selectNode(collection[index], index);
                        },
                    },
                }, [moveButtonText]);
                if (index === this.movingNode.name) {
                    moveButton = "";
                }

                childrenArray.splice(childrenArray.length - 1, 0, moveButton);

                return createElement(
                    "v-card", {
                        class: "my-3 mx-3 px-3 py-3",
                        attrs: {
                            dark: collection[index].hidden
                        },
                    },
                    childrenArray
                );
            },
            generateNameInput: function (createElement, index, collection) {
                return createElement("v-text-field", {
                    attrs: {
                        type: "text",
                        label: "Display name",
                        outlined: true,
                        dense: true
                    },
                    domProps: {
                        value: collection[index].displayName,
                    },
                    on: {
                        click: event => {
                            event.stopPropagation();
                        },
                        change: event => {
                            event.stopPropagation();
                            this.$emit("change", this.updateNodeData(collection, index, "displayName", event.target.value));
                        },
                    },
                    class: "_list-item-name",
                });
            },
            generateReorderTrigger: function (createElement, collection, index) {
                if (!this.movingNode) {
                    return "";
                }
                return createElement("v-card", {
                    attrs: {
                        dark: true
                    },
                    class: "text-center",
                    on: {
                        click: () => this.moveNode(collection[index], index)
                    },
                }, ["move here"]);
            },
            updateNodeData: function (collection, item, parameter, data) {
                const node = this.getSubNode(collection[item]);
                Vue.set(node, parameter, data);
            },

            toggleNodeData: function (collection, item) {
                const node = this.getSubNode(collection[item]);
                Vue.set(node, "hidden", !node.hidden);
            },
            selectNode(node, index) {
                if (!this.movingNode) {
                    const newChild = {};
                    newChild.name = index;
                    newChild.data = node;
                    this.movingNode = newChild;
                } else {
                    this.changeNodeLevel(node, index);
                    this.cancelSelection();
                }
            },
            cancelSelection: function () {
                this.movingNode = false;
            },
            getSubBranch: function (node) {
                if (node.parents.length === 0) {
                    return this.navStructure;
                }
                const detachedParents = JSON.parse(JSON.stringify(node.parents));
                let selectedDestinationFile = this.navStructure;
                let firstItem = detachedParents.splice(0, 1);

                firstItem = firstItem.join();
                selectedDestinationFile = selectedDestinationFile[firstItem].children;
                if (detachedParents.length > 0) {
                    detachedParents.forEach(function (e) {
                        selectedDestinationFile = selectedDestinationFile[e].children;
                    });
                }
                return selectedDestinationFile;
            },
            getSubNode: function (node) {
                const nodeBranch = this.getSubBranch(node);
                return nodeBranch[node.name];
            },
            targetIsNotAlreadyParent: function (node) {
                const selectedDestinationFile = this.getSubNode(node);
                return !selectedDestinationFile.children.hasOwnProperty(this.movingNode.name);
            },
            canMoveAtDestination: function (node, index) {
                let targetIsNotAlreadyParent = this.targetIsNotAlreadyParent(node, index);
                let targetIsNotItself = this.getSubNode(node) !== this.movingNode.data;
                return !!(targetIsNotAlreadyParent && targetIsNotItself);


            },
            changeNodeLevel: function (destinationNode, index) {
                if (!this.canMoveAtDestination(destinationNode, index)) {
                    return;
                }
                destinationNode = this.getSubNode(destinationNode);
                this.$set(destinationNode.children, this.movingNode.name, this.movingNode.data);
                const movingNodeBranch = this.getSubBranch(this.movingNode.data);
                delete movingNodeBranch[this.movingNode.name];


                recursiveUpdateParentCollection(destinationNode, this.movingNode.data, index);
            },
            moveNode: function (destinationNode, index) {
                if (!this.movingNode) {
                    return;
                }
                const newPosition = index.split("__")[0];
                const destinationBranch = this.getSubBranch(destinationNode);
                const originBranch = this.getSubBranch(this.movingNode.data);
                const oldKey = this.movingNode.name;
                const name = oldKey.split("__")[1];
                const newKey = `${newPosition}__${name}`;
                Vue.set(destinationBranch, newKey, this.movingNode.data);
                destinationBranch[newKey].name = newKey;
                delete originBranch[this.movingNode.name];
                renameChildren(destinationBranch[newKey], oldKey, newKey);

                if (destinationBranch[index].parents.length < this.movingNode.data.parents.length) {
                    const movementUpward = this.movingNode.data.parents.length - destinationBranch[index].parents.length;
                    destinationBranch[newKey].parents.splice(-movementUpward, movementUpward);
                    recursiveUpdateParentCollection(
                        destinationBranch[`${newPosition}__${name}`],
                        this.movingNode.data,
                        false
                    );
                }
                this.changeSubsequentNumbering(destinationBranch, newPosition);
                this.cancelSelection();
            },
            changeSubsequentNumbering: function (destinationBranch, newPosition) {
                let pastMovedItem = false;
                for (let nodeKey in destinationBranch) {
                    const nodePosition = nodeKey.split("__")[0];
                    const nodeName = nodeKey.split("__")[1];
                    if (nodePosition === newPosition && !pastMovedItem) {
                        pastMovedItem = true;
                    } else if (nodePosition === newPosition && pastMovedItem) {
                        pastMovedItem = false;
                    }

                    if (nodePosition >= newPosition && pastMovedItem) {
                        const offsetPosition = parseInt(nodePosition) + 1;
                        const newKey = `${offsetPosition}__${nodeName}`;
                        destinationBranch[newKey] = destinationBranch[nodeKey];
                        destinationBranch[newKey].name = newKey;

                        delete destinationBranch[nodeKey];
                        renameChildren(destinationBranch[newKey], nodeKey, newKey);

                    }
                }
                destinationBranch = sortobject(destinationBranch, sortNumberLowToHigh);
            },
            addNavEntry: function () {
                const keyArray = Object.keys(this.navStructure);
                const index = parseInt(keyArray[keyArray.length - 1].split("__")[0]) + 1;

                const name = `${index}__custom`;
                Vue.set(this.navStructure, name, {
                    hidden: false,
                    children: {},
                    parents: [],
                    name: name,
                    displayName: "",
                    url: "",
                    custom: true,
                });
            },
            removeCustom: function (node) {
                this.warningMessage = {
                    text: "Are you sure you want to remove this navigation entry ?",
                    type: "warning",
                    callback: () => {
                        const nodeBranch = this.getSubBranch(node);
                        Vue.delete(nodeBranch, node.name);
                    },
                };
            },
            saveNavEntry: function () {
                this.warningMessage = {
                    text: "Are you sure you want to save that navigation ?",
                    type: "warning",
                    callback: () => {
                        document.getElementById("_admin-form-ext-submit").click();
                    },
                };
            },
        },

        computed: {
            navStructure: function () {
                if (Object.keys(this.$store.getters.navStructure).length !== 0) {
                    return this.$store.getters.navStructure;
                } else {
                    this.$store.commit("navStructure", generateStructureFromFileList(this.$props.views));

                    return this.$store.getters.navStructure;
                }
            },
        },
    };
</script>