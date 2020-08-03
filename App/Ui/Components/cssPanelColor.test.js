import {createLocalVue, mount} from "@vue/test-utils";

import Vuetify from "vuetify";
import Vue from "vue";
import colorPanel from "./cssPanelColor.vue";
import Vuelidate from "vuelidate";
import Vuex from "vuex";
import userStore from "../../Store/user";
import adminStore from "../../Store/admin";


const colorParameterCollection = {
    "dominant": "#7094E1",
    "colorSetParamString": "[{\"hueVariation\":-201,\"saturation\":73,\"light\":49},{\"hueVariation\":-188,\"saturation\":87,\"light\":58}]",
    "variationLightAmt": 5,
    "variationSatAmt": 8
};

const colorSet = {
    "lightVariation": 5,
    "satVariation": 8,
    "hsl": {"light": 66, "saturation": 65, "hue": 221},
    "colorCollection": {
        "dominant": "#7094E1",
        "combinationCollection": [{
            "hex": "#D85F22",
            "hue": 20,
            "light": 49,
            "saturation": 73,
            "subCombination": [{"hue": 20, "light": 24, "saturation": 25, "hex": "#4D382E"}, {
                "hue": 20,
                "light": 29,
                "saturation": 33,
                "hex": "#624232"
            }, {"hue": 20, "light": 34, "saturation": 41, "hex": "#7A4B33"}, {
                "hue": 20,
                "light": 39,
                "saturation": 49,
                "hex": "#945333"
            }, {"hue": 20, "light": 44, "saturation": 57, "hex": "#B05B30"}, {
                "hue": 20,
                "light": 49,
                "saturation": 65,
                "hex": "#CE622C"
            }, {"hue": 20, "light": 54, "saturation": 73, "hex": "#DF6D34"}, {
                "hue": 20,
                "light": 59,
                "saturation": 81,
                "hex": "#EB7A42"
            }, {"hue": 20, "light": 64, "saturation": 89, "hex": "#F58851"}, {
                "hue": 20,
                "light": 69,
                "saturation": 97,
                "hex": "#FD9663"
            }]
        }, {
            "hex": "#F19D37",
            "hue": 33,
            "light": 58,
            "saturation": 87,
            "subCombination": [{"hue": 33, "light": 33, "saturation": 23, "hex": "#685641"}, {
                "hue": 33,
                "light": 38,
                "saturation": 31,
                "hex": "#7F6443"
            }, {"hue": 33, "light": 43, "saturation": 39, "hex": "#987243"}, {
                "hue": 33,
                "light": 48,
                "saturation": 47,
                "hex": "#B48041"
            }, {"hue": 33, "light": 53, "saturation": 55, "hex": "#C98E45"}, {
                "hue": 33,
                "light": 58,
                "saturation": 63,
                "hex": "#D79B50"
            }, {"hue": 33, "light": 63, "saturation": 71, "hex": "#E4A75E"}, {
                "hue": 33,
                "light": 68,
                "saturation": 79,
                "hex": "#EEB46D"
            }, {"hue": 33, "light": 73, "saturation": 87, "hex": "#F6C07E"}, {
                "hue": 33,
                "light": 78,
                "saturation": 95,
                "hex": "#FCCC92"
            }]
        }],
        "dominantSubCollection": [{"hue": 221, "light": 41, "saturation": 25, "hex": "#4E5F83"}, {
            "hue": 221,
            "light": 46,
            "saturation": 33,
            "hex": "#4F679C"
        }, {"hue": 221, "light": 51, "saturation": 41, "hex": "#4F6FB5"}, {
            "hue": 221,
            "light": 56,
            "saturation": 49,
            "hex": "#587BC6"
        }, {"hue": 221, "light": 61, "saturation": 57, "hex": "#6387D4"}, {
            "hue": 221,
            "light": 66,
            "saturation": 65,
            "hex": "#7094E1"
        }, {"hue": 221, "light": 71, "saturation": 73, "hex": "#7FA1EB"}, {
            "hue": 221,
            "light": 76,
            "saturation": 81,
            "hex": "#90B0F3"
        }, {"hue": 221, "light": 81, "saturation": 89, "hex": "#A3BFFA"}, {
            "hue": 221,
            "light": 86,
            "saturation": 97,
            "hex": "#B9CFFE"
        }],
        "graySubCollection": [{"hue": 221, "light": 41, "saturation": 0, "hex": "#696969"}, {
            "hue": 221,
            "light": 46,
            "saturation": 0,
            "hex": "#6C727F"
        }, {"hue": 221, "light": 51, "saturation": 0, "hex": "#6E7B96"}, {
            "hue": 221,
            "light": 56,
            "saturation": 0,
            "hex": "#7485AA"
        }, {"hue": 221, "light": 61, "saturation": 0, "hex": "#7C90BB"}, {
            "hue": 221,
            "light": 66,
            "saturation": 0,
            "hex": "#869CCB"
        }, {"hue": 221, "light": 71, "saturation": 0, "hex": "#92A8D9"}, {
            "hue": 221,
            "light": 76,
            "saturation": 0,
            "hex": "#A0B5E4"
        }, {"hue": 221, "light": 81, "saturation": 0, "hex": "#B0C3EE"}, {
            "hue": 221,
            "light": 86,
            "saturation": 0,
            "hex": "#C2D2F5"
        }, {"hue": 0, "light": 0, "saturation": 0, "hex": "#000"}, {
            "hue": 0,
            "light": 100,
            "saturation": 0,
            "hex": "#fff"
        }],
        "alertSubCollection": [{"hue": 0, "light": 41, "saturation": 25, "hex": "#834E4E"}, {
            "hue": 0,
            "light": 46,
            "saturation": 33,
            "hex": "#9C4F4F"
        }, {"hue": 0, "light": 51, "saturation": 41, "hex": "#B54F4F"}, {
            "hue": 0,
            "light": 56,
            "saturation": 49,
            "hex": "#C65858"
        }, {"hue": 0, "light": 61, "saturation": 57, "hex": "#D46363"}, {
            "hue": 0,
            "light": 66,
            "saturation": 65,
            "hex": "#E17070"
        }, {"hue": 0, "light": 71, "saturation": 73, "hex": "#EB7F7F"}, {
            "hue": 0,
            "light": 76,
            "saturation": 81,
            "hex": "#F39090"
        }, {"hue": 0, "light": 81, "saturation": 89, "hex": "#FAA3A3"}, {
            "hue": 0,
            "light": 86,
            "saturation": 97,
            "hex": "#FEB9B9"
        }],
        "warningSubCollection": [{"hue": 60, "light": 41, "saturation": 25, "hex": "#83834E"}, {
            "hue": 60,
            "light": 46,
            "saturation": 33,
            "hex": "#9C9C4F"
        }, {"hue": 60, "light": 51, "saturation": 41, "hex": "#B5B54F"}, {
            "hue": 60,
            "light": 56,
            "saturation": 49,
            "hex": "#C6C658"
        }, {"hue": 60, "light": 61, "saturation": 57, "hex": "#D4D463"}, {
            "hue": 60,
            "light": 66,
            "saturation": 65,
            "hex": "#E1E170"
        }, {"hue": 60, "light": 71, "saturation": 73, "hex": "#EBEB7F"}, {
            "hue": 60,
            "light": 76,
            "saturation": 81,
            "hex": "#F3F390"
        }, {"hue": 60, "light": 81, "saturation": 89, "hex": "#FAFAA3"}, {
            "hue": 60,
            "light": 86,
            "saturation": 97,
            "hex": "#FEFEB9"
        }],
        "successSubCollection": [{"hue": 120, "light": 41, "saturation": 25, "hex": "#4E834E"}, {
            "hue": 120,
            "light": 46,
            "saturation": 33,
            "hex": "#4F9C4F"
        }, {"hue": 120, "light": 51, "saturation": 41, "hex": "#4FB54F"}, {
            "hue": 120,
            "light": 56,
            "saturation": 49,
            "hex": "#58C658"
        }, {"hue": 120, "light": 61, "saturation": 57, "hex": "#63D463"}, {
            "hue": 120,
            "light": 66,
            "saturation": 65,
            "hex": "#70E170"
        }, {"hue": 120, "light": 71, "saturation": 73, "hex": "#7FEB7F"}, {
            "hue": 120,
            "light": 76,
            "saturation": 81,
            "hex": "#90F390"
        }, {"hue": 120, "light": 81, "saturation": 89, "hex": "#A3FAA3"}, {
            "hue": 120,
            "light": 86,
            "saturation": 97,
            "hex": "#B9FEB9"
        }],
        "infoSubCollection": [{"hue": 240, "light": 41, "saturation": 25, "hex": "#4E4E83"}, {
            "hue": 240,
            "light": 46,
            "saturation": 33,
            "hex": "#4F4F9C"
        }, {"hue": 240, "light": 51, "saturation": 41, "hex": "#4F4FB5"}, {
            "hue": 240,
            "light": 56,
            "saturation": 49,
            "hex": "#5858C6"
        }, {"hue": 240, "light": 61, "saturation": 57, "hex": "#6363D4"}, {
            "hue": 240,
            "light": 66,
            "saturation": 65,
            "hex": "#7070E1"
        }, {"hue": 240, "light": 71, "saturation": 73, "hex": "#7F7FEB"}, {
            "hue": 240,
            "light": 76,
            "saturation": 81,
            "hex": "#9090F3"
        }, {"hue": 240, "light": 81, "saturation": 89, "hex": "#A3A3FA"}, {
            "hue": 240,
            "light": 86,
            "saturation": 97,
            "hex": "#B9B9FE"
        }]
    },
    "updateColor": {"_custom": {"type": "function", "display": "<span>ƒ</span> (newColor)"}},
    "combination": {"_custom": {"type": "function", "display": "<span>ƒ</span> ()"}},
    "splitCombination": {"_custom": {"type": "function", "display": "<span>ƒ</span> ()"}},
    "generate": {"_custom": {"type": "function", "display": "<span>ƒ</span> (colors, lightVariation, satVariation)"}}
};
const app = document.createElement("div");
app.setAttribute("data-app", true);
document.body.appendChild(app);

Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        user: userStore,
        admin: adminStore
    }
});

const vuetify = new Vuetify();
Vue.use(Vuelidate);
const wrapper =
    mount(colorPanel, {
            vuetify, store,
            propsData: {
                miniVariant: false
            }
        }
    );


wrapper.vm.$store.commit("colorCollection", colorSet.colorCollection);
wrapper.vm.$store.commit("colorSet", colorSet);
wrapper.vm.$store.commit("colorParameterCollection", colorParameterCollection);
wrapper.vm.$store.commit("loaded", true);

const dominantColorBox = wrapper.find("#_color");

describe("color css panel", () => {
    it("Display the right color", async () => {
        await wrapper.vm.$nextTick();
        await wrapper.vm.$forceUpdate();

        expect(wrapper.vm.bgColor(wrapper.vm.dominantColor)).toBe("background:hsl(221,65%,66%)");
        const dominantColorBox = wrapper.find("[data-jest='dominant-preview']");
        const subColorBox = wrapper.find("[data-jest='sub-preview']");
        expect(dominantColorBox.hasStyle("background", "tata")).toBe("hsl(221,65%,66%)");

        expect(subColorBox.element.style.background).toBe("hsl(221,65%,66%)");


    });
});