import path from "path";
import fs from "fs";
import {generateCSS} from "./cssGenerator";

export const generateCSSFile = function (appName, styleSet) {
    fs.writeFileSync(path.join(__dirname, "/../../static/", appName.toLowerCase(), "/baseStyle.css"), generateCSS(styleSet), (err) => {
            if (err) {
                console.debug(err);
            }
        }
    );
};

