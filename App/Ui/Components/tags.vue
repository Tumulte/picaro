<script>
    const template = require("./tags.pug").default;
    const updateTagString = function (tagCollection, model, property) {
        if (tagCollection.length > 0) {
            return (
                `${model}__${tagCollection
                    .map(function (elem) {
                        return elem[property];
                    })
                    .join()}`
            );
        } else {
            return "";
        }
    };
    const keycode = {
        enter: 13,
        up: 38,
        down: 40,
        left: 37,
        right: 39,
        comma: 188,
        space: 32
    };
    export default {
        props: ["rfModel", "rfData"],
        data: function () {
            return {
                tagStringCollection: "",
                currentTagCollection: [],
                currentExistingTagCollection: [],
                matchingTagCollection: [],
                warningMessage: [],
                inputData: {},
                currentTag: "",
                index: 0,
                currentMatchingTagIndex: false,
                selectedExistingTag: "",
                existingTagStringCollection: ""
            };
        },
        template: template,

        methods: {
            detectKeyPress: function (e) {
                if (e.keyCode === keycode.down) {
                    const withinList =
                        this.matchingTagCollection.length > this.currentMatchingTagIndex;
                    if (withinList) {
                        this.currentMatchingTagIndex =
                            this.currentMatchingTagIndex === false
                                ? 1
                                : this.currentMatchingTagIndex + 1;
                        this.setExistingTag();
                    }
                } else if (e.keyCode === keycode.up) {
                    if (this.currentMatchingTagIndex > 0) {
                        this.currentMatchingTagIndex -= 1;
                        this.setExistingTag();
                    } else {
                        this.resetTagSearch();
                    }
                } else if (
                    e.keyCode === keycode.enter ||
                    e.keyCode === keycode.comma ||
                    e.keyCode === keycode.space
                ) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.dispatchNewTag(e);
                }
            },
            detectKeyUp: function (e) {
                if (
                    e.keyCode === keycode.up ||
                    e.keyCode === keycode.down ||
                    e.keyCode === keycode.left ||
                    e.keyCode === keycode.right
                ) {
                    //ignore arrow keys
                    return;
                }
                if (this.currentTag.length > 2) {
                    this.resetTagSearch();
                    this.populateMatchingTags();
                } else {
                    this.resetTagSearch();
                }
            },
            dispatchNewTag: function (e) {
                if (this.matchingTagCollection.length > 0 && this.selectedExistingTag) {
                    this.addExistingTag();
                } else {
                    this.addTag(e);
                }
            },
            setExistingTag: function () {
                if (this.currentMatchingTagIndex - 1 >= 0) {
                    this.selectedExistingTag = this.matchingTagCollection[
                    this.currentMatchingTagIndex - 1
                        ];
                } else {
                    this.selectedExistingTag = false;
                }
            },

            resetTagSearch: function () {
                this.matchingTagCollection = [];
                this.currentMatchingTagIndex = false;
                this.selectedExistingTag = "";
            },
            populateMatchingTags: function () {
                for (let tag in this.tagCollection) {
                    if (
                        this.tagCollection[tag] &&
                        this.tagCollection[tag].name.indexOf(this.currentTag) > -1 &&
                        this.existingTagStringCollection.indexOf(
                            this.tagCollection[tag].id
                        ) === -1
                    ) {
                        this.matchingTagCollection.push(this.tagCollection[tag]);
                    }
                }
            },
            filterTag: function (type) {
                const tagPropertyCollection = [];
                for (let i = 0; i < this.matchingTagCollection; i++) {
                    tagPropertyCollection.push(this.matchingTagCollection[i][type]);
                }
                return tagPropertyCollection;
            },
            checkExistingTag: function () {
                for (let tag in this.tagCollection) {
                    if (this.tagCollection[tag].name === event.target.value) {
                        return this.tagCollection[tag];
                    }
                }
                this.currentTag = "";

                return false;
            },
            addTag: function (event) {
                if (!event.target.value) {
                    return;
                }
                if (this.checkExistingTag()) {
                    this.selectedExistingTag = this.checkExistingTag();

                    this.addExistingTag();
                } else {
                    this.currentTagCollection.push(event.target.value);
                    this.tagStringCollection =
                        `${this.rfModel}__${this.currentTagCollection.join()}`;
                }
                this.currentTag = "";
            },

            addExistingTag: function (tag) {
                if (typeof tag !== "undefined") {
                    this.selectedExistingTag = tag;
                }

                this.currentExistingTagCollection.push(this.selectedExistingTag);
                this.existingTagStringCollection =
                    `${this.rfModel}__${this.currentExistingTagCollection
                        .map(function (elem) {
                            return elem.id;
                        })
                        .join(",")}`;
                this.selectedExistingTag = "";
                this.currentTag = "";
            },
            matchingIndex: function (index) {
                return this.currentMatchingTagIndex === index + 1;
            },
            removeTag: function (index) {
                this.currentTagCollection.splice(index, 1);
                this.tagStringCollection = updateTagString(
                    this.currentTagCollection,
                    this.rfModel,
                    "name"
                );
            },
            removeExistingTag: function (index) {
                this.currentExistingTagCollection.splice(index, 1);
                this.existingTagStringCollection = updateTagString(
                    this.currentExistingTagCollection,
                    this.rfModel,
                    "id"
                );
            },
            populateTags: function () {
                if (this.rfData && this.rfData.tags) {
                    const tagsData = [];
                    for (let tag in this.rfData.tags) {
                        tagsData.push(this.rfData.tags[tag].id);
                        this.currentExistingTagCollection.push(this.rfData.tags[tag]);
                    }
                    this.existingTagStringCollection =
                        `${this.rfModel}__${tagsData.join(",")}`;
                }
            }
        },
        watch: {
            matchingTagCollection: function () {
                this.currentMatchingTagIndex = false;
            }
        },
        computed: {
            tagCollection: function () {
                return this.$store.getters.tagCollection;
            },

            list: function () {
                return this.$store.getters.list;
            }
        },
        mounted: function () {
            this.populateTags();
        }
    };
</script>
