const fs = require('fs');

fs.copyFileSync("../Data/picData.db", "../Data/picData.json")

const data = require('../Data/picData.json')
data.collections.forEach((item, index) => {
    let fileContent = fs.readFileSync(`../Data/picData.db.${index}`, 'utf-8')
    console.info(fileContent)
    console.log(fileContent.search(/\n/))
    fileContent = fileContent.replace(/\n{/g, ',\n{')

    fileContent = `[
${fileContent}]`


    fs.writeFileSync(`../Data/build/${item.name}.json`, fileContent)
})
