<script setup lang="ts">
import {ColorParameters, StyleSet} from "@types";
import {ColorHelper} from "@libs/colorHelper";
import {GenerateColorSet} from "@libs/colorGenerator";
import {useSettingsStore} from "@stores/settings";
import {ref} from "vue";
import type {ColorHSL} from "@libs/colorHelper/index.d";
import {copy} from "copy-anything"


const settingsStore = useSettingsStore()

const styleSet = settingsStore.currentStyleSet as StyleSet

const colorHelper = new ColorHelper()

const colorSet = new GenerateColorSet(styleSet.dominant)

colorSet.generate(
    styleSet.colorParameterCollection,
    styleSet.colorGeneratorParams,
);
const colorCollection = ref(copy(colorSet.colorCollection))


const dominantColorParams = ref(colorHelper.hexToHsl(styleSet.dominant).getValueCollection() as ColorHSL)


function updateColor() {
  styleSet.dominant = colorHelper.hslToHex(dominantColorParams.value).getString()

  colorSet
      .updateColor(dominantColorParams.value)
      .generate(
          styleSet.colorParameterCollection,
          styleSet.colorGeneratorParams
      )
  colorCollection.value = copy(colorSet.colorCollection)
}

function bgColor(color: ColorHSL, index?: number, location?: "dominant" | "sub", subIndex?: number) {
  let textColor = "";
  if (location === 'dominant' && index !== undefined) {
    textColor = colorCollection.value.dominantTextSubCollection[index].hex
  } else if (location === 'sub' && index !== undefined && subIndex !== undefined) {
    textColor = colorCollection.value.combinationCollection[index].textSubCombination[subIndex].hex
  }

  return `background:${colorHelper.getString(color)};color:${textColor}`
}

function updateCombinationColor(type: "hue" | "light" | "saturation", index: number | string, event: number) {
  index = Number(index)
  const colorChanged = colorSet.colorCollection.combinationCollection[index]
  colorChanged[type] = event
  styleSet.colorParameterCollection[index] = generateNewColorSet(
      dominantColorParams.value,
      colorSet.colorCollection.combinationCollection[index]
  )
  colorSet.generate(
      styleSet.colorParameterCollection,
      styleSet.colorGeneratorParams
  )
  colorCollection.value = copy(colorSet.colorCollection)
}

function generateNewColorSet(dominant: ColorHSL, combination: ColorHSL): ColorParameters {
  const newCombination: ColorParameters = {hueVariation: 0}
  newCombination.hueVariation =
      combination.hue - dominant.hue
  if (combination.saturation !== dominant.saturation) {
    newCombination.saturation = combination.saturation
  }
  if (combination.light !== dominant.light) {
    newCombination.light = combination.light
  }
  return newCombination
}

function getStringColor(color: ColorHSL) {

  color = JSON.parse(JSON.stringify(color)) // clone
  color.light = 50
  color.saturation = 100
  return colorHelper.getString(color)
}

function isMainColor(color: string, subColor: string) {
  return color === subColor
}

function resetSetting(setting: keyof ColorParameters, index: number) {
  const newSettings = styleSet.colorParameterCollection[index]
  delete newSettings[setting]

  styleSet.colorParameterCollection[index] = newSettings

  regenerateColorSet()
}

function colorIsHidden(location: "sub" | "dominant", index: number, subIndex?: number) {
  let hiddenCombination
  if (location === 'dominant') {
    hiddenCombination = styleSet.hiddenCombination[location]
  } else if (location === 'sub' && subIndex !== undefined) {
    hiddenCombination = styleSet.hiddenCombination[location][subIndex]
  }
  return hiddenCombination.find((item: number) => item === index) !== undefined
}

function generateColors() {
  colorSet.generate(
      styleSet.colorParameterCollection,
      styleSet.colorGeneratorParams
  )
  colorCollection.value = copy(colorSet.colorCollection)
}

function addColor() {
  const newColorSet = styleSet.colorParameterCollection
  newColorSet.push({
    hueVariation: 0,
  })
  colorSet.generate(
      styleSet.colorParameterCollection,
      styleSet.colorGeneratorParams
  )
  styleSet.hiddenCombination.sub.push([])
  colorCollection.value = colorSet.colorCollection
}

function removeColor(index: number | string) {
  index = Number(index)
  colorSet.colorCollection.combinationCollection.splice(index, 1)
  styleSet.colorParameterCollection.splice(index, 1)
  styleSet.hiddenCombination.sub.splice(index, 1)
  colorCollection.value = colorSet.colorCollection
}

async function regenerateColorSet() {
  colorSet.generate(
      styleSet.colorParameterCollection,
      styleSet.colorGeneratorParams
  )
  colorCollection.value = colorSet.colorCollection

}

function toggleColor(location: 'dominant' | 'sub', index: number, locationIndex?: number) {

  if (location === 'dominant') {
    const existingItemIndex = styleSet.hiddenCombination[
        location
        ].findIndex((item) => item === index)
    if (existingItemIndex === -1) {
      styleSet.hiddenCombination[location].push(index)
    } else {
      styleSet.hiddenCombination[location].splice(existingItemIndex, 1)
    }
  } else if (location === 'sub' && locationIndex !== undefined) {
    const existingItemIndex = styleSet.hiddenCombination[location][
        locationIndex
        ].findIndex((item: number) => item === index)
    if (existingItemIndex === -1) {
      styleSet.hiddenCombination[location][locationIndex].push(index)
    } else {
      styleSet.hiddenCombination[location][locationIndex].splice(
          existingItemIndex,
          1
      )
    }
  }
}

</script>
<template>
  <v-row>
    <v-col cols="6">
      <v-row>
        <v-col cols="6">
          <div class="pic-color-control--container">
            <v-slider
              v-model="styleSet.colorGeneratorParams.light.variation"
              label="Light variation"
              show-ticks="always"
              tick-size="3"
              step="1"
              min="0"
              max="10"
              density="compact"
              hint="Changes the light difference of the first and last sub color"
              @end="generateColors()"
            />
            <v-slider
              v-model="styleSet.colorGeneratorParams.light.curve"
              label="Light curve"
              show-ticks="always"
              tick-size="3"
              step="1"
              hint="Math curve fallowed by the light increase (first one is linear)"
              min="0"
              max="10"
              @end="generateColors()"
            />
            <v-slider
              v-model="styleSet.colorGeneratorParams.light.move"
              label="Light move"
              show-ticks="always"
              step="1"
              tick-size="3"
              min="-8"
              max="8"
              hint="Shift all color's light : left is darker, right is lighter"
              @end="generateColors()"
            />
          </div>
          <div class="pic-color-control--container">
            <v-slider
              v-model="styleSet.colorGeneratorParams.saturation.variation"
              label="Saturation variation"
              show-ticks="always"
              tick-size="3"
              step="1"
              min="0"
              hint="Changes the saturation difference of the first and last"
              max="10"
              @end="generateColors()"
            />
            <v-slider
              v-model="styleSet.colorGeneratorParams.saturation.curve"
              label="Saturation curve"
              show-ticks="always"
              tick-size="3"
              step="1"
              min="0"
              max="10"
              hint="Math curve fallowed by the saturation increase (first one is linear)"
              @end="generateColors()"
            />
            <v-slider
              v-model="styleSet.colorGeneratorParams.saturation.move"
              label="Saturation move"
              show-ticks="always"
              tick-size="3"
              step="1"
              min="-8"
              hint="Shift all color's saturation : left is more saturated, right is less saturated"
              max="8"
              @end="generateColors()"
            />
          </div>
        </v-col>
        <v-col cols="6">
          <div class="pic-color-control--container">
            <v-slider
              v-model="styleSet.colorGeneratorParams.hue.variation"
              label="Hue variation"
              show-ticks="always"
              tick-size="3"
              density="compact"
              step="1"
              min="0"
              hint="Add hue variation based on color theory : darker gets warmer"
              max="10"
              @end="generateColors()"
            />
            <v-slider
              v-model="styleSet.colorGeneratorParams.hue.curve"
              label="hue curve"
              step="1"
              density="compact"
              show-ticks="always"
              hint="Math curve fallowed by the hue shift (first one is linear)"
              tick-size="3"
              min="0"
              max="10"
              @end="generateColors()"
            />
            <v-slider
              v-model="styleSet.colorGeneratorParams.hue.move"
              label="hue move"
              show-ticks="always"
              tick-size="3"
              step="1"
              min="-8"
              max="8"
              hint="Move the hue in the color wheel"
              density="compact"
              @end="generateColors()"
            />
          </div>
          <div class="pic-color-control--container">
            <v-slider
              v-model="styleSet.colorGeneratorParams.text.variation"
              label="Text variation"
              show-ticks="always"
              tick-size="3"
              step="1"
              min="0"
              max="10"
              @end="generateColors()"
            />
            <v-slider
              v-model="styleSet.colorGeneratorParams.text.curve"
              label="Text curve"
              show-ticks="always"
              step="1"
              tick-size="3"
              min="0"
              max="10"
              @end="generateColors()"
            />
            <v-slider
              v-model="styleSet.colorGeneratorParams.text.move"
              label="Text move"
              show-ticks="always"
              tick-size="3"
              step="1"
              min="-8"
              max="8"
              @end="generateColors()"
            />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="9">
          <v-slider
            v-model="styleSet.colorGeneratorParams.count"
            label="Number of sub colors"
            show-ticks="always"
            tick-size="3"
            min="3"
            max="10"
            step="1"
            density="compact"
            @end="generateColors()"
          />
        </v-col>
        <v-col cols="3">
          <v-checkbox
            v-model="styleSet.colorGeneratorParams.full"
            label="Always 10 sub colors"
            @change="generateColors()"
          />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="6">
      <!-- Dominant color -->
      <v-row>
        <v-col cols="2" :style="bgColor(dominantColorParams)" />
        <v-col cols="10">
          <div data-jest="dominant-preview">
            <div class="mb-0">
              <v-slider
                ref="dominantHue"
                v-model="dominantColorParams.hue"
                min="0"
                max="360"
                step="1"
                label="Hue"
                thumb-label="always"
                :thumb-color="getStringColor(dominantColorParams)"
                @update:modelValue="updateColor()"
              />
              <v-slider
                ref="dominantLight"
                v-model="dominantColorParams.light"
                min="0"
                step="1"
                label="light"
                max="100"
                thumb-label="always"
                @update:modelValue="updateColor()"
              />
              <v-slider
                ref="dominantSat"
                v-model="dominantColorParams.saturation"
                min="0"
                step="1"

                max="100"
                thumb-label="always"
                @update:modelValue="updateColor()"
              />
            </div>

            <div class="color-panel--sample">
              <v-card
                v-for="(subColor, index) in colorSet.colorCollection.dominantSubCollection"
                :key="index"
                class="pa-3"
                :class="{'__main':isMainColor(bgColor(subColor), bgColor(dominantColorParams)), '__is-hidden': colorIsHidden('dominant', index)}"
                :style="bgColor(subColor, index, 'dominant')"
                @click="toggleColor('dominant',index)"
              >
                text
              </v-card>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Complementary colors -->
      <v-row
        v-for="(color, index) in colorCollection.combinationCollection"
        :key="color.hex"
        class="sub-color-parameters"
      >
        <v-col cols="2" :style="bgColor(color)">
          <v-btn
            class="center"
            text="text"
            density="compact"
            :data-jest="`remove-color-${index}`"
            @click="removeColor(index)"
          >
            Remove
            Color
          </v-btn>
        </v-col>
        <v-col cols="10">
          <div :data-jest="`sub-preview${index}`">
            <v-slider
              ref="subHue"
              :model-value="color.hue"
              min="0"
              max="360"
              step="1"
              label="Hue"
              thumb-label="always"
              :thumb-color="getStringColor(color)"
              @end="updateCombinationColor('hue', index, $event)"
            />
            <v-slider
              :model-value="color.light"
              label="Light"
              thumb-label="always"
              step="1"
              min="0"
              max="100"
              @update:modelValue="updateCombinationColor('light', index, $event)"
            />
            <v-btn v-if="color.light !== dominantColorParams.light" @click.stop="resetSetting('light', index)">
              reset
            </v-btn>
            <v-slider
              :model-value="color.saturation"
              label="Sat."
              thumb-label="always"
              min="0"
              max="100"
              @update:modelValue="updateCombinationColor('saturation', index, $event)"
            />
          </div>
          <div :key="color.hex" class="color-panel--sample">
            <v-card
              v-for="(subColor, subIndex) in color.subCombination"
              :key="subColor.hex"
              class="pa-3"
              :style="bgColor(subColor, index, 'sub', subIndex)"
              data-jest="sub-combination-square"
              :class="{'__is-hidden': colorIsHidden('sub',subIndex,index)}"
              @click="toggleColor('sub', subIndex, index)"
            >
              text
            </v-card>
          </div>
        </v-col>
      </v-row>
      <div class="color-panel--sample">
        <div v-for="(subColor, index) in colorCollection.graySubCollection" :key="index">
          <v-card class="pa-3" :style="bgColor(subColor)" />
        </div>
      </div>
      <div class="color-panel--sample">
        <div
          v-for="(subColor, index) in colorCollection.alertSubCollection"
          :key="index"
          class="sub-combination"
        >
          <v-card class="pa-3" :style="bgColor(subColor)" />
        </div>
      </div>
      <div class="color-panel--sample">
        <div
          v-for="(subColor, index) in colorCollection.warningSubCollection"
          :key="index"
          class="sub-combination"
        >
          <v-card class="pa-3" :style="bgColor(subColor)" />
        </div>
      </div>
      <div class="color-panel--sample">
        <div
          v-for="(subColor, index) in colorCollection.successSubCollection"
          :key="index"
          class="sub-combination"
        >
          <v-card class="pa-3" :style="bgColor(subColor)" />
        </div>
      </div>
      <div class="color-panel--sample">
        <div
          v-for="(subColor, index) in colorCollection.infoSubCollection"
          :key="index"
          class="sub-combination"
        >
          <v-card class="pa-3" :style="bgColor(subColor)" />
        </div>
      </div>

      <v-btn class="_color-button" text="text" data-jest="addColor" @click="addColor">
        Add Color
      </v-btn>
    </v-col>
  </v-row>
</template>
<style scoped lang="postcss">
.color-panel--sample :deep(.v-card),
.color-panel--sample > div {
  display: inline-block;
}

.__is-hidden {
  background: repeating-linear-gradient(
      45deg,
      #ddd,
      #ddd 16px,
      #333 16px,
      #333 19px
  ) !important;
}

.pic-color-control--container:nth-of-type(even) {
  background: #dfdfdf;
}

.v-row {
  margin: 0;
}

:deep(.v-btn.v-btn--density-compact) {
  height: auto;
  padding: .5rem 0;
}

:deep(.v-btn__content) {
  white-space: normal;
  width: auto;
}

</style>
