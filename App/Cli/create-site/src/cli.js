const inquirer = require("inquirer");
const fs = require("fs");
const loki = require("lokijs");
const lfsa = require("lokijs/src/loki-fs-structured-adapter.js");
const adapter = new lfsa();
const db = new loki("rfData.db", {
    adapter: adapter,
});

const handleData = function (type, name) {
    if(type === 'create') {
        const newApp = db.getCollection(name);

        if (newApp !== null) {
            console.log(`The app ${name} already exist`);
            return;
        }
        if (db.getCollection("settings") === null) { //first init
            db.addCollection("settings");
            db.addCollection("users");
        }
        const settings = db.getCollection("settings");
        // log some random event data as part of our example
        settings.insert({
            "id": name,
            "name": name,
            "styleSet": "",
            "language": "",
            "title": name,
            "devMode": true,
            "messageTimeOut": 10000,
            "applicationName": "Demo",
            "navStructure": {},
            "layoutCollection": {},
            "availableFilterCollection": {
                "categories": [],
                "tags": []
            },
            "layoutCommonCollection": [],
            "modelCollection": {}
        });
        db.addCollection(name);
        db.saveDatabase((err) => {
            if (err) {
                console.log("error : " + err);
            }
            else {
                console.log("database saved.");
            }
        });
    } else if(type === 'destroy') {
        db.loadDatabase({}, function(err) {
            if (err) {
                console.log("error : " + err);
            }
            else {
                console.log("database loaded.");
                db.removeCollection(name)
                const settings = db.getCollection("settings");
                settings.findAndRemove({id : name})
                db.saveDatabase((err) => {
                    if (err) {
                        console.log("error : " + err);
                    }
                    else {
                        console.log("database saved.");
                    }
                });

            }
        });
    }
}

const handleFiles = function(type, name, nameLower) {
    if(type === 'create') {

        if (!fs.existsSync(`./static`)) {
            fs.mkdirSync(`./static`);
            fs.mkdirSync(`./static/fonts`);
            console.log("Init static folders (first run) : OK")
        }
        // App folder
        fs.mkdirSync(`./app${name}`);
        fs.mkdirSync(`./app${name}/controllers`);
        fs.mkdirSync(`./app${name}/views`);

        const indexFileContent = `extends layout/header.pug
block content
    rf-layout`

        fs.writeFileSync(`./app${name}/views/index.pug`, indexFileContent);

        fs.mkdirSync(`./app${name}/views/layout`);

        const headerFileContent = `extends ../../../App/Views/rougeHead.pug
block head
    title My ${name} app
    if environment === 'production'
        link(rel='stylesheet', href='/static/app${name}.css')
    else
        script var ENVIRONMENT = "development"
        script(src="/app${name}-bundle.js")
block body
block content`;

        fs.writeFileSync(`./app${name}/views/layout/header.pug`, headerFileContent);
        fs.mkdirSync(`./static/${nameLower}`);

        const staticContent = `require('./baseStyle.css')
require('./styles.css')`

        // Static folder
        fs.writeFileSync(`./static/${nameLower}/main.js`, staticContent);
        fs.writeFileSync(`./static/${nameLower}/baseStyle.css`, "");
        fs.writeFileSync(`./static/${nameLower}/styles.css`, "");

    } else if (type === "destroy") {
        fs.rmdirSync(`./app${name}`, { recursive: true });
        fs.rmdirSync(`./static/${nameLower}`, { recursive: true });
    }
}

const handleWebpack = function (type, name, nameLower) {
    let data = fs.readFileSync("./webpack.config.dev.js").toString().split("\n");

    if(type === 'create') {
        let newData = `        app${name}: [
            path.resolve(__dirname, "static/${nameLower}/main.js"),
            path.resolve(__dirname, "App/Static/main.js")
        ],`
        data.splice(14, 0, newData);

    } else if (type === 'destroy') {
        const webpackIndex = data.findIndex(item => item.includes(`app${name}: [`))
        if(webpackIndex !== -1) data.splice(webpackIndex, 4)
    }
    let text = data.join("\n");

    fs.writeFile("./webpack.config.dev.js", text, function (err) {
        if (err) return console.log(err);
    });
}
const handleSettings = function (type, name) {
    if (!fs.existsSync(`./webpack.config.dev.js`)) {
        fs.copyFile("webpack.config.dev.js.example", "webpack.config.dev.js", (err) => {
            if (err) throw err;
            console.log("webpack.config.dev.js.example was copied to webpack.config.dev.js");
        });
    }

    if (!fs.existsSync(`./rougeSettings.json`)) {
        fs.copyFile("rougeSettings.json.example", "rougeSettings.json", (err) => {
            if (err) throw err;
            console.log("rougeSettings.json.example was copied to rougeSettings.json");
        });
    }

    if (!fs.existsSync(`./rougeSettings.json`)) {
        fs.copyFile("rougeSettings.json.example", "rougeSettings.json", (err) => {
            if (err) throw err;
            console.log("rougeSettings.json.example was copied to rougeSettings.json");
        });
    }

    let settings = fs.readFileSync("./rougeSettings.json").toString().split("\n");
    if(type === 'create') {
        const newSettingsData = `    "${name}": {
      "styleSet": "default",
      "language": "fr",
      "title": "Mon Application"
    },`
        settings.splice(4, 0, newSettingsData);

    } else if (type === 'destroy') {
        const index = settings.findIndex(item => item.includes(`"${name}": {`))
        if(index !== -1) settings.splice(index, 5)
    }
    let settingsText = settings.join("\n");
    fs.writeFile("./rougeSettings.json", settingsText, function (err) {
        if (err) return console.log(err);
    });
}
const validateAction =  async function (type,name) {
    if (type === 'create') {
        if (fs.existsSync(`./app${name}`)) {
            console.log(`The app ${name} already exists`)
            return false
        }
        return true
    }
    if(type === 'destroy') {
        await inquirer.prompt([
            {
                type: "input",
                message: "Are you sure ? It can NOT be undone all data and files will be lost. Type YES to confirm",
                name: "name",
                validate: function (answer) {
                    if (answer !== "YES") {
                        console.log('Type YES (all caps) to confirm')
                        return
                    }
                    return true
                }
            }])
        return true
    }
}
const alterApp = function (type) {

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
    }]).then(async answers => {
        let nameLower = answers.name.toLowerCase();
        let name = nameLower.charAt(0).toUpperCase() + nameLower.slice(1);

        const validated = await validateAction(type,name)

        console.log('validated : ', validated)
        if(!validated) {
            return
        }
        handleFiles(type , name, nameLower)
        console.log(`${type} Folder and Files : OK`)
        handleWebpack(type , name, nameLower)
        console.log(`${type} Webpack config : OK`)
        handleSettings(type , name)
        console.log(`${type} Settings : OK`)
        handleData(type , name)
        console.log(`${type} Data : OK`)

        if(type === 'create'){
            console.log(`Start the server npm run start:dev\n and check your new app at the address http://localhost:3000/${nameLower}`);
        }

    });
};

export async function cli() {
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
                    },
                    {
                        name: "Destroy an existing App (can't be undone)",
                        value: "destroy"
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
            alterApp(answers.action);
        }).catch(error => {
        console.info(`CLI FAILED : ${error}.`);
    });
}
