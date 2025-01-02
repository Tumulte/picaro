const fs = require('fs');
const path = require('path')

fs.copyFileSync(path.join(__dirname, "../Data/picData.db"), path.join(__dirname, "../Data/picData.json"))

const data = require(path.join(__dirname, '../Data/picData.json'))
data.collections.forEach((item, index) => {
    let fileContent = fs.readFileSync(path.join(__dirname, `../Data/picData.db.${index}`), 'utf-8')
    fileContent = fileContent.replace(/\n{/g, ',\n{')

    fileContent = `[
${fileContent}]`


    fs.writeFileSync(path.join(__dirname, `../Data/build/${item.name}.json`), fileContent)
})
