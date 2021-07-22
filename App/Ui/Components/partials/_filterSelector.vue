<template lang="pug">
    div
        v-combobox(multiple small-chips :items="filterList" v-model="currentFilterList" item-text="label" item-value="id" @change="checkForNewElement")
        v-btn(v-if="displaySave" @click="saveFilterList") Save
</template>

<script>
import {mapGetters} from "vuex";
import shortid from "shortid";

export default {
    name: "filterSelector",
    data() {
        return {currentFilterList: [], displaySave: false};
    },
    props: {
        type: {type: String, required: true},
        savedFilters: {type: Array, default: []}
    },
    methods: {
        checkForNewElement() {
            if (this.currentFilterList.find(item => typeof item === "string")) this.displaySave = true;
        },
        saveFilterList() {
            for (let [index, item] of this.currentFilterList.entries()) {
                if (typeof item === "string") {
                    this.currentFilterList[index] = {
                        id: shortid.generate(),
                        label: item
                    };
                    this.filterList.push(this.currentFilterList[index]);
                    this.$store.dispatch("updateAvailableFilters", {property: this.type, value: this.filterList});
                    this.displaySave = false;
                    document.getElementById("_admin-form-ext-submit").click();
                    this.$emit("updateSelectedFilter", {type: this.type, data: this.currentFilterList});

                }
            }
        }
    },
    computed: {
        ...mapGetters(["availableFilterCollection"]),
        filterList() {
            return this.availableFilterCollection[this.type];
        }
    },
    watch: {
        currentFilterList() {
            this.$emit("updateSelectedFilter", {type: this.type, data: this.currentFilterList});
        }
    },
    mounted() {
        this.currentFilterList = this.filterList.filter(item => this.savedFilters.includes(item.id)) || [];
    }

};
</script>

<style scoped>

</style>
