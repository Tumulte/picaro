import { generateCSS } from "./cssGenerator";
import { generateCSSFile } from "./cssFileGenerator";

import fs from "fs";

const cssData = {
  dominant: "#7094E1",
  variationLightAmt: "5",
  variationSatAmt: "8",
  selectorCollection: {
    html: {
      "font-size": "16px"
    },
    body: {
      background: {
        type: "color",
        data: ["gray", 11]
      },
      color: {
        type: "color",
        data: ["dominant", 0]
      },
      "font-family": "Knile-Regular.otf",
      padding: {
        type: "ratio",
        data: "p"
      }
    },
    "h1, h2, h3, h4, h5, h6": {
      "font-family": "Arial",
      color: {
        type: "color",
        data: [0, 2]
      },
      "font-weight": "bold"
    },
    h1: {
      "font-size": "4.2rem",
      "line-height": "4.2rem",
      "margin-bottom": "1.6rem",
      "margin-top": "1.6rem"
    },
    h2: {
      "font-size": "3rem",
      "margin-bottom": "2rem",
      "line-height": "3rem",
      "margin-top": "1.3rem"
    },
    h3: {
      "font-size": "2rem",
      "line-height": "3rem",
      "margin-bottom": "1.3rem",
      "margin-top": "0rem"
    },
    h4: {
      "font-size": "1.6rem",
      "line-height": "2rem",
      "margin-bottom": "1.3rem",
      "margin-top": "0rem"
    },
    h6: {
      "font-size": "1rem",
      "line-height": "1rem",
      "margin-bottom": "0rem",
      "margin-top": "0rem"
    },
    h5: {
      "margin-bottom": "1.3rem",
      "margin-top": "0rem",
      "font-size": "1rem",
      "line-height": "1rem"
    },
    mkClssaltfont: {
      "font-family": ""
    }
  },
  colorParameterCollection: [
    {
      hueVariation: -201,
      saturation: 73,
      light: 49
    },
    {
      hueVariation: -188,
      saturation: 87,
      light: 58
    }
  ],
  fontOrigin: "local",
  "font-size": "18",
  id: "NTD9gyEL",
  setName: "default3",
  fontFamilyMain: "Knile-Regular.otf",
  fontFamilyAlt: "test.ttf",
  fontFamilyTitle: "Arial",
  ratioCollection: {
    h1: {
      text: "header 1",
      "margin-top": "1.6",
      "margin-topottom": "1.6",
      "font-size": "4.2",
      "line-height": "4.2"
    },
    h2: {
      text: "header 2",
      "margin-top": "1.3",
      "margin-bottom": "2",
      "font-size": "3",
      "line-height": "3"
    },
    h3: {
      text: "header 3",
      "margin-top": "0",
      "margin-bottom": "1.3",
      "font-size": "2",
      "line-height": "3"
    },
    h4: {
      text: "header 4",
      "margin-top": "0",
      "margin-bottom": "1.3",
      "font-size": "1.6",
      "line-height": "2"
    },
    h5: {
      text: "header 5",
      "margin-top": "0",
      "margin-bottom": "1.3",
      "font-size": "1",
      "line-height": "1"
    },
    h6: {
      text: "header 6",
      "margin-top": "0",
      "margin-bottom": "0",
      "font-size": "1",
      "line-height": "1"
    },
    p: {
      "line-height": 1.5,
      "font-size": 1,
      "margin-bottom": 0,
      "margin-top": 0,
      text: "base text"
    },
    html: {
      "line-height": 24,
      "font-size": 16
    }
  }
};
const cssTarget = `/* START This is an automatically generated CSS, do not edit */
@font-face {
    font-family: "Knile-Regular";
    src: url("/fonts/Knile-Regular.otf");
}

@font-face {
    font-family: "test";
    src: url("/fonts/test.ttf");
}
:root {
    --dominant: #7094E1;
    --color0: #D85F22;
    --color0-sub0: #4D382E;
    --color0-sub1: #624232;
    --color0-sub2: #7A4B33;
    --color0-sub3: #945333;
    --color0-sub4: #B05B30;
    --color0-sub5: #CE622C;
    --color0-sub6: #DF6D34;
    --color0-sub7: #EB7A42;
    --color0-sub8: #F58851;
    --color0-sub9: #FD9663;
    --color1: #F19D37;
    --color1-sub0: #685641;
    --color1-sub1: #7F6443;
    --color1-sub2: #987243;
    --color1-sub3: #B48041;
    --color1-sub4: #C98E45;
    --color1-sub5: #D79B50;
    --color1-sub6: #E4A75E;
    --color1-sub7: #EEB46D;
    --color1-sub8: #F6C07E;
    --color1-sub9: #FCCC92;
}
html{
    font-size: 16px;
}
#rf-content-container {
    font-family: Knile-Regular;
    height: 100%;
    background: #fff;
    color: #4E5F83;
    font-family: Knile-Regular;
    padding: 1.5rem;
}
#rf-content-container h1,
#rf-content-container h2,
#rf-content-container h3,
#rf-content-container h4,
#rf-content-container h5,
#rf-content-container h6 {
    font-family: Arial;
    color: #7A4B33;
    font-weight: bold;
}
#rf-content-container h1 {
    font-size: 4.2rem;
    line-height: 4.2rem;
    margin-bottom: 1.6rem;
    margin-top: 1.6rem;
}
#rf-content-container h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
    line-height: 3rem;
    margin-top: 1.3rem;
}
#rf-content-container h3 {
    font-size: 2rem;
    line-height: 3rem;
    margin-bottom: 1.3rem;
}
#rf-content-container h4 {
    font-size: 1.6rem;
    line-height: 2rem;
    margin-bottom: 1.3rem;
}
#rf-content-container h6 {
    font-size: 1rem;
    line-height: 1rem;
}
#rf-content-container h5 {
    margin-bottom: 1.3rem;
    font-size: 1rem;
    line-height: 1rem;
}

/* END This was an automatically generated CSS, do not edit */`;
const dir = `${__dirname}/../../static/jesttest`;
beforeAll(async () => {
  if (!fs.existsSync(dir)) {
    await fs.mkdirSync(dir);
  }
});
describe("checking the CSS generator", () => {
  it("Generates the proper CSS based on the Vue parameters", () => {
    expect(generateCSS(cssData)).toEqual(cssTarget);
  });
  it("Generate the proper CSS file", async () => {
    await generateCSSFile("jestTest", cssData);
    const content = await fs.readFileSync(dir + "/baseStyle.css", "utf8");
    expect(content).toEqual(cssTarget);
  });
  it("Gererates the fonts with google fonts", () => {
    cssData.fontOrigin = "google";
    expect(generateCSS(cssData)).toContain(
      '@import url("https://fonts.googleapis.com/css?family=Knile-Regular.otf&display=swap");'
    );
    expect(generateCSS(cssData)).toContain(
      '@import url("https://fonts.googleapis.com/css?family=test.ttf&display=swap");'
    );
  });
});
