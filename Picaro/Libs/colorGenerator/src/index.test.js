import {generateColorSet} from "./index";
import {expect, it, describe, test} from "vitest";
import expectedData from "./testData.json"

const generator = new generateColorSet('#67BAA8')
let data = generator.generate();

generator.generate()
describe('Generate colors', () => {
    it('generates the proper data object from the color', () => {
        expect(data).toEqual(expectedData)
    })
    it('generates the new color collection when updated', () => {
        data = generator.updateColor("#789BA9").generate()
        expect(data.dominantSubCollection[4]).toEqual({"hex": "#6A90A0", "hue": 197, "light": 52, "saturation": 22})
    })
    it('generates the new color collection when updated', () => {
        data = generator.generate([{hueVariation: -23}, {hueVariation: 54, light: 34, saturation: 89}])
        expect(data.combinationCollection.length).toBe(2)
    })
})
