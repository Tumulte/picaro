<template lang="pug">
    div(id="_color" class="_panel" v-if="$store.getters.loaded")
        v-card(v-if="!miniVariant" class="_container pa-3 ma-3" id="_range-light-container")
            v-slider(label="Light variation" ticks=true tick-size="3" min="0" max="10" name="variation-light-amt" v-model="variationLightAmt" @input="updateVariationAmt()" )
            v-slider(label="Saturation variation" ticks=true tick-size="3" min="0" max="10" name="variation-sat-amt" v-model="variationSatAmt" @input="updateVariationAmt()" )
        v-expansion-panels
            v-expansion-panel(:style="bgColor(dominantColor)" v-if="!miniVariant" data-jest="dominant-preview")
                v-expansion-panel-header(data-jest="dominantExpansion")
                v-expansion-panel-content(:style="bgColor(dominantColor)" class="mb-0")
                    v-slider(min="0" max="360" v-model="dominantColor.hue" @input="updateColor()" label="Hue" thumb-label="always" :thumb-color="getStringColor(dominantColor, true)" ref="dominantHue")
                    v-slider(min="0" label="light" max="100" thumb-label="always" @input="updateColor()" v-model="dominantColor.light" ref="dominantLight")
                    v-slider(min="0" max="100"  thumb-label="always" @input="updateColor()"  v-model="dominantColor.saturation" ref="dominantSat")
            v-row(class="px-3")
                v-card(v-for="(subColor, index) in colorCollection.dominantSubCollection" :key="index" :class="{'__main':isMainColor(bgColor(subColor), bgColor(dominantColor))}" v-on:click="storeColorCoordinate(['dominant', index])" class="pa-3" v-bind:style="bgColor(subColor)")
            v-card(v-for="(color, index) in colorCollection.combinationCollection" :key="index" class="sub-color-parameters")
                v-expansion-panel(v-bind:style="bgColor(color)"  v-if="!miniVariant"  :data-jest="`sub-preview${index}`")
                    v-expansion-panel-header
                    v-expansion-panel-content
                        v-slider(min="0" max="360" v-model="color.hue" label="Hue" ref="subHue" thumb-label="always" :thumb-color="getStringColor(color, true)" @input="updateCombinationColor(index)")
                        v-slider(label="Light" thumb-label="always" min="0" max="100"  v-model="color.light" @input="updateCombinationColor(index)")
                        v-btn(v-if="color.light !== dominantColor.light" @click.stop="resetSetting('light', index, color)" ) reset
                        v-slider(label="Sat." thumb-label="always" min="0" max="100"  v-model="color.saturation" @input="updateCombinationColor(index)")
                v-row(class="px-3")
                    v-card(v-for="(subColor, subIndex) in color.subCombination" :key="subIndex" v-on:click="storeColorCoordinate([index, subIndex])" v-bind:style="bgColor(subColor)" class="pa-3")
                v-card-actions
                    v-btn(text=true @click="removeColor(index)" class="center" v-if="!miniVariant"  :data-jest="`remove-color-${index}`") Remove Color
        v-row(class="px-3")
            div(v-for="(subColor, index) in colorCollection.graySubCollection" v-on:click="storeColorCoordinate(['gray', index])")
                v-card(class="pa-3" v-bind:style="bgColor(subColor)")
        v-row(class="px-3")
            div(v-for="(subColor, index) in colorCollection.alertSubCollection" v-on:click="storeColorCoordinate(['alert', index])" class="sub-combination" )
                v-card(v-bind:style="bgColor(subColor)")
        v-row(class="px-3")
            div(v-for="(subColor, index) in colorCollection.warningSubCollection" v-on:click="storeColorCoordinate(['warning', index])" class="sub-combination")
                v-card(v-bind:style="bgColor(subColor)" )
        v-row(class="px-3")
            div(v-for="(subColor, index) in colorCollection.successSubCollection" v-on:click="storeColorCoordinate(['success', index])" class="sub-combination")
                v-card(v-bind:style="bgColor(subColor)")
        v-row(class="px-3")
            div(v-for="(subColor, index) in colorCollection.infoSubCollection" v-on:click="storeColorCoordinate(['info', index])" class="sub-combination" )
                v-card(v-bind:style="bgColor(subColor)")
        v-card-actions
            v-btn(text=true @click="addColor" class="_color-button" v-if="!miniVariant" data-jest="addColor") Add Color
</template>
<script>
import {colorHelper} from "../colorHelper";

const colorUtils = new colorHelper();

const generateNewColorSet = function (dominant, combination) {
    const newCombination = {};
    newCombination.hueVariation =
        parseInt(combination.hue) - parseInt(dominant.hue);
    if (parseInt(combination.saturation) !== parseInt(dominant.saturation)) {
        newCombination.saturation = parseInt(combination.saturation);
    }
    if (parseInt(combination.light) !== parseInt(dominant.light)) {
        newCombination.light = parseInt(combination.light);
    }

    return newCombination;
};

export default {
    props: ["panelOpened", "miniVariant"],
    data: function () {
        return {
            isMounted: false,
        };
    },
    methods: {
        resetSetting(setting, index) {
            let newSettings = JSON.parse(this.colorParameterCollection.colorSetParamString);
            delete newSettings[index][setting];
            this.updateCombinationColor(index, JSON.stringify(newSettings));
        },
        bgColor: function (color) {
            return `background:${colorUtils.getString(color)}`;
        },
        getStringColor: function (color, hueOnly) {
            if (hueOnly) {
                color = JSON.parse(JSON.stringify(color));
                color.light = 50;
                color.saturation = 100;
            }
            return colorUtils.hslToHex(color).getString();
        },
        checkNum: function (number, min, max) {
            min = min ? min : 0;
            number = number < min ? min : number;
            number = number > max ? max : number;

            return isNaN(parseInt(number)) ? min : number;
        },
        updateColor: function () {
            if (!this.isMounted) {//prevent initial trigger
                return;
            }

            this.colorCollection.dominant = colorUtils
                .hslToHex(this.dominantColor)
                .getString();
            this.$set(
                this.colorParameterCollection,
                "dominant",
                this.colorCollection.dominant
            );
            this.colorCollection = this.colorSet
                .updateColor(this.colorCollection.dominant)
                .generate(
                    this.colorSetParamCollection,
                    parseInt(this.variationLightAmt),
                    parseInt(this.variationSatAmt)
                );
        },

        updateCombinationColor: function (index, customParameters) {
            this.$set(
                this.colorSetParamCollection,
                index,
                generateNewColorSet(
                    this.dominantColor,
                    this.colorCollection.combinationCollection[index]
                )
            );
            this.$set(
                this.colorParameterCollection,
                "colorSetParamString",
                customParameters ? customParameters : JSON.stringify(this.colorSetParamCollection)
            );
            this.colorCollection = this.colorSet.generate(
                this.colorSetParamCollection,
                parseInt(this.variationLightAmt),
                parseInt(this.variationSatAmt)
            );
        },
        updatecolorSetParams: function () {
            this.colorSetParamCollection = JSON.parse(
                this.colorParameterCollection.colorSetParamString
            );
            this.colorCollection = this.colorSet.generate(
                this.colorSetParamCollection
            );
        },
        isMainColor: function (color, subColor) {
            return color === subColor;
        },
        stringify: function (item) {
            return JSON.stringify(item);
        },
        addColor: function () {
            const newColorSet = this.colorSetParamCollection;
            newColorSet.push({
                hueVariation: this.dominantColor.hue
            });
            this.colorParameterCollection.colorSetParamString = JSON.stringify(newColorSet);
            this.colorCollection = this.colorSet.generate(
                this.colorSetParamCollection,
                parseInt(this.variationLightAmt),
                parseInt(this.variationSatAmt)
            );
        },
        removeColor: function (index) {
            this.colorCollection.combinationCollection.splice(index, 1);
            this.colorSetParamCollection.splice(index, 1);
            this.colorParameterCollection.colorSetParamString = JSON.stringify(this.colorSetParamCollection);
        },
        updateVariationAmt: function () {
            this.colorCollection = this.colorSet.generate(
                this.colorSetParamCollection,
                parseInt(this.variationLightAmt),
                parseInt(this.variationSatAmt)
            );
        },

        storeColorCoordinate: function (coordinates) {
            this.$store.commit("currentColor", coordinates);
        }
    },
    mounted() {
        this.isMounted = true;
    },
    computed: {
        colorCollection: {
            get() {
                return this.$store.getters.colorCollection;
            },
            set(newValue) {
                this.$store.commit("colorCollection", newValue);
            }
        },
        colorSet() {
            return this.$store.getters.colorSet;
        },

        dominantColor() {
            if (this.$store.getters.colorCollection.dominant) {
                return colorUtils
                    .hexToHsl(this.$store.getters.colorCollection.dominant)
                    .getValueCollection();
            } else {
                return {};
            }
        },
        //TODO just rename the darn thing
        colorSetParamCollection() {
            return JSON.parse(this.colorParameterCollection.colorSetParamString);
        },
        colorParameterCollection: {
            get() {
                return this.$store.getters.colorParameterCollection;
            },
            set(newValue) {
                this.$store.commit("colorParameterCollection", newValue);
            }
        },
        variationLightAmt: {
            get() {
                return this.colorParameterCollection.variationLightAmt;
            },
            set(newValue) {
                const colorParameterCollection = this.colorParameterCollection;
                colorParameterCollection.variationLightAmt = newValue;
                this.$store.commit(
                    "colorParameterCollection",
                    colorParameterCollection
                );
            }
        },
        variationSatAmt: {
            get() {
                return this.colorParameterCollection.variationSatAmt;
            },
            set(newValue) {
                const colorParameterCollection = this.colorParameterCollection;
                this.$set(colorParameterCollection, "variationSatAmt", newValue);
                this.$store.commit(
                    "colorParameterCollection",
                    colorParameterCollection
                );
            }
        }
    }
};
</script>
