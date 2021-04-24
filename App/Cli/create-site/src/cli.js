import FileSync from "lowdb/adapters/FileSync";
import low from "lowdb";

const inquirer = require("inquirer");
const fs = require("fs");

const appAdapter = new FileSync("./App/Data/appData.json");
const appDb = low(appAdapter);
const adapter = new FileSync("./App/Data/data.json");
const db = low(adapter);
const createNewApp = async function () {
    inquirer.prompt([{
        type: "input",
        message: "What is the name of your app (only lowercase letters) ?",
        name: "name",
        validate: function (answer) {
            if (!answer || !answer.match(/[a-zA-Z]/)) {
                return "Please enter a correct name";
            }

            return true;
        }
    }]).then(answers => {
        let nameLower = answers.name.toLowerCase();
        let name = nameLower.charAt(0).toUpperCase() + nameLower.slice(1);

        appDb.set(nameLower, []).write();
        appDb.get("config")
            .push({
                id: nameLower,
                "name": name,
                "styleSet": "",
                "language": "",
                "title": "",
                "devMode": true,
                "messageTimeOut": 10000,
                "applicationName": name,
                "navStructure": {},
                "modelCollection": {"meta": []}
            }).write();
        db.set(`${nameLower}_meta`, []).write();

        if (!fs.existsSync(`./app${name}`)) {
            fs.mkdirSync(`./app${name}`);
        }
        if (!fs.existsSync(`./app${name}/controllers`)) {
            fs.mkdirSync(`./app${name}/controllers`);
        }

        if (!fs.existsSync(`./app${name}/views`)) {
            fs.mkdirSync(`./app${name}/views`);
            const indexFileContent = "extends layout/header.pug\nblock content\n    h1 Welcome to your new App\n        p Learn how to use rougeFramework here";
            fs.writeFileSync(`./app${name}/views/index.pug`, indexFileContent);
        }
        if (!fs.existsSync(`./app${name}/views/layout`)) {
            fs.mkdirSync(`./app${name}/views/layout`);
            let headerFileContent = "extends ../../../App/Views/rougeHead.pug\n";
            headerFileContent += "block head\n";
            headerFileContent += `    title My ${name} app\n`;
            headerFileContent += "    if environment === 'production'\n";
            headerFileContent += `        link(rel='stylesheet', href='/static/app${name}.css')\n`;
            headerFileContent += "    else\n";
            headerFileContent += "        script var ENVIRONMENT = \"development\";\n";
            headerFileContent += `    script(src=\"/app${name}-bundle.js\")\n`;
            headerFileContent += "block body\n";
            headerFileContent += "    block content\n";

            fs.writeFileSync(`./app${name}/views/layout/header.pug`, headerFileContent);

        }
        if (!fs.existsSync(`./static/${nameLower}`)) {
            fs.mkdirSync(`./static/${nameLower}`);

            fs.writeFileSync(`./static/${nameLower}/main.js`, "");

        }

        let data = fs.readFileSync("./webpack.config.dev.js").toString().split("\n");
        let newData = `        app${name}: [\n`;
        newData += `            path.resolve(__dirname, \"static/${nameLower}/main.js\"),\n`;
        newData += "            path.resolve(__dirname, \"App/Static/main.js\")\n";
        newData += "        ],";
        data.splice(17, 0, newData);
        let text = data.join("\n");

        fs.writeFile("./webpack.config.dev.js", text, function (err) {
            if (err) return console.log(err);
        });
        let settings = fs.readFileSync("./rougeSettings.json").toString().split("\n");
        let newSettingsData = `    "${name}": {\n`;
        newSettingsData += "      \"styleSet\": \"default\",\n";
        newSettingsData += "      \"language\": \"fr\",\n";
        newSettingsData += "      \"title\": \"Mon Application\",\n";
        newSettingsData += "      \"devMode\": true\n";
        newSettingsData += "    },\n";
        settings.splice(5, 0, newSettingsData);
        let settingsText = settings.join("\n");

        fs.writeFile("./rougeSettings.json", settingsText, function (err) {
            if (err) return console.log(err);
        });
        console.log(`Start the server npm run start:dev\n and check your new app at the address http://localhost:3000/${nameLower}`);

    });
};

export function cli() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Select an action",
                name: "action",
                choices: [
                    new inquirer.Separator("What do you want to do ?"),
                    {
                        name: "Create a new App",
                        value: "create"
                    },
                    {
                        name: "Rename an Existing App",
                        value: "edit"
                    },
                    {
                        name: "Activate an Existing App",
                        value: "activate"
                    },
                    {
                        name: "Deactivate an existing App",
                        value: "deactivate"
                    }
                ],
                validate: function (answer) {
                    if (answer.length < 1) {
                        return "Please choose an action";
                    }

                    return true;
                }
            }
        ])
        .then(answers => {
            if (answers.action === "create") {
                createNewApp();
            }
        }).catch(error => {
        console.info(`CLI FAILED : ${error}.`);
    });
}