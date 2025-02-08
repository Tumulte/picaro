import {ColorHelper, type ColorHSL} from "@picaro/colorhelper";
import "core-js/features/array/for-each"
import "core-js/features/object/entries"
import {ColorGeneratorParams} from "@types";

type ColorParams = ColorHSL & { hex: string }
type VariationParams = { hueVariation: number, light?: number, saturation?: number }
type SubCombination = ColorParams & { subCombination: ColorParams[], textSubCombination: ColorParams[] }

type ColorCollection = {
    dominant: string,
    dominantSubCollection: ColorParams[],
    dominantTextSubCollection: ColorParams[],
    graySubCollection: ColorParams[],
    grayTextSubCollection: ColorParams[],
    alertSubCollection: ColorParams[],
    alertTextSubCollection: ColorParams[],
    warningSubCollection: ColorParams[],
    warningTextSubCollection: ColorParams[],
    infoSubCollection: ColorParams[],
    infoTextSubCollection: ColorParams[],
    successSubCollection: ColorParams[],
    successTextSubCollection: ColorParams[],
    combinationCollection: SubCombination[],
}


const curves = {
    linear(x: number) {
        return x;
    },
    easeIn(x: number) {
        return 1 - Math.cos((x * 3.1415) / 2);
    },
    easeInHard(x: number) {
        return x * x;
    },
    easeInHarder(x: number) {
        return x * x * x;
    },
    easeOut(x: number) {
        return Math.sin((x * 3.1415) / 2);
    },
    easeOutHard(x: number) {
        return 1 - (1 - x) * (1 - x);
    },
    easeOutHarder(x: number) {
        return 1 - Math.pow(1 - x, 3);
    },
    easeInOut(x: number) {
        return -(Math.cos(3.1415 * x) - 1) / 2;
    },
    easeInOutHard(x: number) {
        return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
    },
    easeInOutHarder(x: number) {
        return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    }
};
const curveArray = Object.entries(curves);

const fullIndex = function (array: any[]) {
    const fullCombination = [];
    for (let i = 0; i < 10; i++) {
        const offsetIndex = Math.floor((i * array.length) / 10);

        fullCombination[i] = array[offsetIndex];
    }
    return fullCombination;
};


export class GenerateColorSet {
    dominant
    lightVariation
    satVariation
    hsl
    colorCollection: ColorCollection
    hueCurve
    hueVariation
    hueMove
    colorUtils: ColorHelper
    count
    lightMove
    lightCurve
    satMove
    satCurve
    full
    textLight
    textSaturation
    textHue

    constructor(dominant: string) {
        this.dominant = dominant
        this.lightVariation = 0
        this.satVariation = 10
        this.hueVariation = 0
        this.hueCurve = 0
        this.hueMove = 0
        this.satMove = 0
        this.satCurve = 0
        this.lightMove = 0
        this.lightCurve = 0
        this.count = 10
        this.full = true
        this.textLight = 0
        this.textHue = 0
        this.textSaturation = 0
        this.colorUtils = new ColorHelper(dominant);
        this.hsl = this.colorUtils.hexToHsl().getValueCollection() as ColorHSL;
        this.colorCollection = {
            dominant: dominant,
            combinationCollection: [],
            dominantSubCollection: [],
            dominantTextSubCollection: [],
            graySubCollection: [],
            grayTextSubCollection: [],
            alertSubCollection: [],
            alertTextSubCollection: [],
            warningSubCollection: [],
            warningTextSubCollection: [],
            infoSubCollection: [],
            infoTextSubCollection: [],
            successSubCollection: [],
            successTextSubCollection: [],
        };
    }

    updateColor(newColor: ColorHSL | string) {
        if (typeof newColor === "string") {
            this.colorCollection.dominant = newColor;
            this.hsl = this.colorUtils.hexToHsl(newColor).getValueCollection() as ColorHSL;
        } else if ("hue" in newColor) {
            this.hsl = newColor;
            this.dominant = this.colorUtils.hslToHex(newColor).getString();
            this.colorCollection.dominant = this.colorUtils.hslToHex(newColor).getString();
        } else {
            throw new Error("Invalid color format");
        }
        return this;
    }

    generate(
        colors: VariationParams[] = [],
        {
            count: count = "10",
            text: {light: textLight = "50", saturation: textSaturation = "0", hue: textHue = "0"} = {},
            hue: {variation: hueVariation = "0", curve: hueCurve = "0", move: hueMove = "0"} = {},
            light: {variation: lightVariation = "5", move: lightMove = "0", curve: lightCurve = "0"} = {},
            saturation: {variation: satVariation = "0", move: satMove = "0", curve: satCurve = "0"} = {},
            full: full = true
        }: ColorGeneratorParams | object = {}
    ) {
        this.count = parseInt(count, 10);
        this.hueVariation = parseInt(hueVariation, 10);
        this.hueCurve = parseInt(hueCurve, 10);
        this.hueMove = parseInt(hueMove, 10);
        this.satVariation = parseInt(satVariation, 10);
        this.satMove = parseInt(satMove, 10);
        this.satCurve = parseInt(satCurve, 10);
        this.lightVariation = parseInt(lightVariation, 10);
        this.lightMove = parseInt(lightMove, 10);
        this.lightCurve = parseInt(lightCurve, 10);
        this.full = full;
        this.textLight = parseInt(textLight, 10)
        this.textSaturation = parseInt(textSaturation, 10)
        this.textHue = parseInt(textHue, 10)
        this.colorCollection.dominantSubCollection = this.#createSubCombinationArray(
            this.hsl
        );
        this.colorCollection.dominantTextSubCollection = this.#createTextSubCombination(this.colorCollection.dominantSubCollection)
        this.colorCollection.combinationCollection = [];
        colors.forEach(item => {
            const saturation =
                item.saturation !== undefined ? item.saturation : this.hsl.saturation;
            const light = item.light !== undefined ? item.light : this.hsl.light;
            const combination = {
                hue: this.hsl.hue + item.hueVariation,
                saturation: saturation,
                light: light
            };

            this.#addCombination(combination);
        });

        this.colorCollection.graySubCollection = this.#createSubCombinationArray(
            {
                hue: this.hsl.hue,
                saturation: 0,
                light: this.hsl.light
            },
            true
        );
        this.colorCollection.grayTextSubCollection = this.#createTextSubCombination(this.colorCollection.graySubCollection)
        const vari = (() => {
            const mult = Math.round(this.hsl.hue / 60);
            const peak = 60 * mult;
            return Math.round((this.hsl.hue - peak) / 2);
        })();
        this.colorCollection.alertSubCollection = this.#createSubCombinationArray({
            hue: 0 + vari,
            saturation: this.hsl.saturation,
            light: this.hsl.light
        });
        this.colorCollection.alertTextSubCollection = this.#createTextSubCombination(this.colorCollection.alertSubCollection)

        this.colorCollection.warningSubCollection = this.#createSubCombinationArray({
            hue: 60 + vari,
            saturation: this.hsl.saturation,
            light: this.hsl.light
        });
        this.colorCollection.warningTextSubCollection = this.#createTextSubCombination(this.colorCollection.warningSubCollection)

        this.colorCollection.successSubCollection = this.#createSubCombinationArray({
            hue: 120 + vari * 2,
            saturation: this.hsl.saturation,
            light: this.hsl.light
        });
        this.colorCollection.successTextSubCollection = this.#createTextSubCombination(this.colorCollection.successSubCollection)

        this.colorCollection.infoSubCollection = this.#createSubCombinationArray({
            hue: 240 + vari,
            saturation: this.hsl.saturation,
            light: this.hsl.light
        });
        this.colorCollection.infoTextSubCollection = this.#createTextSubCombination(this.colorCollection.infoSubCollection)

        return this.colorCollection;
    }

    #limiter(value: number, min = 0, max = 100) {
        if (value < min) {
            return min;
        }
        if (value > max) {
            return max;
        }
        return value;
    }

    #base360(angle: number) {
        if (angle > 360) {
            return angle - 360;
        } else if (angle < 0) {
            return angle + 360;
        } else {
            return angle;
        }
    }

    #getSubValues(
        baseValue: number,
        variation: number,
        count = 10,
        move = 0,
        curveIndex = 0
    ) {
        let outOfRange = 0;
        const halfRound = Math.round(count / 2);

        // calculate the number of values outside of the 0-100 range and returns
        // values below 0 as a negative and above 100 as a positive
        for (let i = 1; i <= 5; i++) {
            if (baseValue + (i - 1) * variation > 100) {
                outOfRange += 1;
            } else if (baseValue - i * variation < 0) {
                outOfRange -= 1;
            }
        }
        // value by which to offset all parameters to stay between 0 and 100
        const offset = outOfRange * variation;
        const newOffset = offset + move;

        const valueCollection = [];
        for (let i = 0; i < count; i++) {
            let value;
            if (i < halfRound) {
                value = baseValue - (count / 2 - i) * variation - newOffset;
            } else {
                value = baseValue + (i - count / 2) * variation - newOffset;
            }
            value = Math.round(curveArray[curveIndex][1](value / 100) * 100)
            value = Math.max(value, 0)
            value = Math.min(value, 100)
            valueCollection[i] = value;
        }
        return valueCollection;
    }

    #getHueValue(hue: number, count = 10) {
        const variationAmt = this.hueVariation;
        const curveIndex = this.hueCurve;
        const halfCount = Math.round(count / 2);
        const hueCollection = [];
        for (let i = 0; i < count; i++) {
            let value;
            const j = curveArray[curveIndex][1](i / 10) * 10;
            const variation = variationAmt * j;
            if (i < halfCount) {
                value = hue - variationAmt * halfCount + variation;
            } else {
                value = hue + variationAmt * (j - halfCount);
            }
            hueCollection.push(this.#base360(value) + this.hueMove);
        }
        return hueCollection;
    }

    #addCombination(combination: ColorHSL) {
        combination.hue = this.#base360(combination.hue);
        const hex = this.colorUtils.hslToHex(combination).getString();
        const combinationCollection = this.colorCollection.combinationCollection
        combinationCollection.push({
            hex: hex,
            hue: combination.hue,
            light: combination.light,
            saturation: combination.saturation,
            subCombination: [],
            textSubCombination: []
        });


        this.#addSubCombination();
        const latestCombination = combinationCollection[combinationCollection.length - 1]
        latestCombination.textSubCombination = this.#createTextSubCombination(latestCombination.subCombination)

    }

    #createSubCombinationArray(combination: ColorHSL, gray?: boolean) {
        const lightCollection = this.#getSubValues(
            combination.light,
            this.lightVariation,
            this.count,
            this.lightMove,
            this.lightCurve
        );
        const satCollection = this.#getSubValues(
            combination.saturation,
            this.satVariation,
            this.count,
            this.satMove,
            this.satCurve
        );
        const hueCollection = this.#getHueValue(combination.hue, this.count);
        const subCombination = [];
        for (let i = 0; i < this.count; i++) {
            subCombination[i] = {
                hue: hueCollection[i] || combination.hue,
                light: lightCollection[i],
                saturation: gray ? 0 : satCollection[i],
                hex: this.colorUtils
                    .hslToHex(
                        {
                            hue: hueCollection[i] || combination.hue,
                            light: this.#limiter(lightCollection[i]),
                            saturation: gray ? 0 : this.#limiter(satCollection[i])
                        }
                    )
                    .getString()
            };
        }
        if (this.full) {
            return fullIndex(subCombination);
        }
        return subCombination;
    }

    #getDiff(offset: number, item: ColorParams, invert: ColorParams, param: keyof ColorHSL) {
        let diff = 0
        let mid = 50
        if (param === 'light') {
            mid = 60
        }
        if (param === 'light' && item.hue >= 200 && item.hue <= 300) {
            mid = 75
        }
        if (Math.abs(item[param] - invert[param]) > offset) {
            diff = invert[param]
        } else if (item[param] < mid) {
            diff = item[param] + offset > 100 ? 100 : item[param] + offset
        } else {
            diff = item[param] - offset < 0 ? 0 : item[param] - offset
        }
        return diff
    }

    #createTextSubCombination(combination: ColorParams[]) {
        const half = Math.round(combination.length / 2)
        const invert = [...combination].reverse()
        const textSub: ColorParams[] = []
        combination.forEach((item, index) => {
            const lightDiff = this.#getDiff(this.textLight, item, invert[index], 'light')
            const satDiff = this.#getDiff(this.textSaturation, item, invert[index], 'saturation')

            const colorParams = {hue: invert[index].hue, saturation: satDiff, light: lightDiff, hex: ""}
            const hex = this.colorUtils.hslToHex(colorParams).getString()
            colorParams.hex = hex
            textSub.push(colorParams)

        })
        return textSub
    }

    #addSubCombination() {
        const combinationCollection = this.colorCollection.combinationCollection;

        const lastEntry = combinationCollection[combinationCollection.length - 1];
        lastEntry.subCombination = this.#createSubCombinationArray(lastEntry);
    }
}
