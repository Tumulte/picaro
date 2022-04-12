const path = require("path");
const fs = require("fs");

function generateCSSFile(generatedCSS, id) {
    fs.writeFileSync(path.join(__dirname, `/../../static/baseStyle-${id}.css`), generatedCSS, (err) => {
            if (err) {
                console.debug(err);
            }
        }
    );
}

module.exports = {generateCSSFile}
