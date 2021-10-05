const inquirer = require("inquirer");
const fs = require("fs");
const loki = require("lokijs");
const lfsa = require("lokijs/src/loki-fs-structured-adapter.js");
import randomWords from "random-words";
import cryptoJs from "crypto-js";
import settings from "../../../../rougeSettings.json";
const adapter = new lfsa();
const db = new loki("./App/Data/rfData.db", {
  adapter: adapter
});
import { nanoid } from "nanoid";
let id = nanoid();
let styleSetId = nanoid();
const basicCss = {
  html: {
    "font-size": "16",
    "line-height": "1.6"
  },
  h1: {
    "font-size": "3.2",
    "line-height": "3.2",
    "margin-bottom": "1",
    "margin-top": "1.6"
  },
  h2: {
    "font-size": "2.8",
    "line-height": "2.8",
    "margin-bottom": "1",
    "margin-top": "1.6"
  },
  h3: {
    "font-size": "2.2",
    "line-height": "2.2",
    "margin-bottom": "1",
    "margin-top": "1.6"
  },
  h4: {
    "font-size": "1.8",
    "line-height": "1.8",
    "margin-bottom": "0.8",
    "margin-top": "1"
  },
  h5: {
    "font-size": "1.5",
    "line-height": "1.5",
    "margin-bottom": "0.8",
    "margin-top": "1"
  },
  h6: {
    "font-size": "1",
    "line-height": "1",
    "margin-bottom": "0.8",
    "margin-top": "1"
  }
};

let basicCssRem = {};
for (const [key, value] of Object.entries(basicCss)) {
  let cssValue = Object.entries(value).map(([key, value]) => [
    key,
    value + "rem"
  ]);
  basicCssRem[key] = Object.fromEntries(cssValue);
}
basicCssRem.html["font-size"] = basicCssRem.html["font-size"].replace(
  "rem",
  "px"
);
basicCssRem[".rf-panel-container"] = {};
basicCssRem[".rf-panel-container"].padding = { data: "html", type: "ratio" };

const handleData = function(type, name) {
  if (type === "create") {
    const newApp = db.getCollection(name);

    if (newApp !== null) {
      console.log(`The app ${name} already exist`);
      return;
    }
    if (db.getCollection("settings") === null) {
      //first init
      db.addCollection("settings", { unique: ["id"] });
      db.addCollection("users", { unique: ["id", "username"] });
      db.addCollection("styleset", { unique: ["id"] });
      db.addCollection("files", { unique: ["id"] });
      const styleset = db.getCollection("styleset");
      styleset.insert({
        dominant: "#700000",
        colorParameterCollection: [],
        variationLightAmt: 5,
        variationSatAmt: 5,
        selectorCollection: basicCssRem,
        fontOrigin: "local",
        "font-size": "16",
        id: styleSetId,
        setName: "",
        fontFamilyMain: "",
        fontFamilyAlt: "",
        fontFamilyTitle: "",
        ratioCollection: basicCss,
        hiddenCombination: { dominant: [], sub: [] }
      });
    }
    const settings = db.getCollection("settings");
    // log some random event data as part of our example
    settings.insert({
      id: id,
      styleSet: styleSetId,
      language: "",
      title: name,
      devMode: true,
      messageTimeOut: 10000,
      applicationName: name,
      navStructure: {},
      layoutCollection: {},
      layoutLinkCollection: {},
      defaultLayout: "",
      layoutCommonCollection: [],
      modelCollection: {},
      availableFilterCollection: {
        categories: [],
        tags: []
      }
    });

    db.addCollection(name);
    db.saveDatabase(err => {
      if (err) {
        console.log("error : " + err);
      } else {
        console.log("database saved.");
      }
    });
  } else if (type === "destroy") {
    console.log("database loaded.");
    db.removeCollection(name);
    const settings = db.getCollection("settings");
    settings.findAndRemove({ applicationName: name });
    db.saveDatabase(err => {
      if (err) {
        console.log("error : " + err);
      } else {
        console.log("database saved.");
      }
    });
  }
};

const handleFiles = function(type, name) {
  if (type === "create") {
    if (!fs.existsSync(`./static`)) {
      fs.mkdirSync(`./static`);
      fs.mkdirSync(`./static/fonts`);
      console.log("Init static folders (first run) : OK");
    }
    if (!fs.existsSync(`./App/Data`)) {
      fs.mkdirSync(`./App/Data`);
      console.log("Init Data folders (first run) : OK");
    }
    // App folder
    fs.mkdirSync(`./app${name}`);
    fs.mkdirSync(`./app${name}/controllers`);
    fs.mkdirSync(`./app${name}/views`);

    const indexFileContent = `extends layout/header.pug
block content
    rf-layout`;

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
    fs.mkdirSync(`./static/${name}`);

    const staticContent = `require('./baseStyle.css')
require('./styles.css')`;

    // Static folder
    fs.writeFileSync(`./static/${name}/main.js`, staticContent);
    fs.writeFileSync(`./static/${name}/baseStyle.css`, "");
    fs.writeFileSync(`./static/${name}/styles.css`, "");
  } else if (type === "destroy") {
    fs.rmdirSync(`./app${name}`, { recursive: true });
    fs.rmdirSync(`./static/${name}`, { recursive: true });
  }
};

const handleWebpack = async function(type, name) {
  if (!fs.existsSync(`./webpack.config.dev.js`)) {
    await fs.copyFile(
      "webpack.config.dev.js.example",
      "webpack.config.dev.js",
      err => {
        if (err) throw err;
        console.log(
          "webpack.config.dev.js.example was copied to webpack.config.dev.js"
        );
      }
    );
  }

  let data = fs
    .readFileSync("./webpack.config.dev.js")
    .toString()
    .split("\n");

  if (type === "create") {
    let newData = `        app${name}: [
            path.resolve(__dirname, "static/${name}/main.js"),
            path.resolve(__dirname, "App/Static/main.js")
        ],`;
    data.splice(14, 0, newData);
  } else if (type === "destroy") {
    const webpackIndex = data.findIndex(item => item.includes(`app${name}: [`));
    if (webpackIndex !== -1) data.splice(webpackIndex, 4);
  }
  let text = data.join("\n");

  fs.writeFile("./webpack.config.dev.js", text, function(err) {
    if (err) return console.log(err);
  });
};
const handleFilesCopy = async function(type, name) {
  if (!fs.existsSync(`./rougeSettings.json`)) {
    await fs.copyFile(
      "rougeSettings.json.example",
      "rougeSettings.json",
      err => {
        if (err) throw err;
        console.log(
          "rougeSettings.json.example was copied to rougeSettings.json"
        );
      }
    );
  }
  let settings = fs.readFileSync("./rougeSettings.json");
  settings = JSON.parse(settings);

  if (!settings.defaultApp) settings.defaultApp = name;
  settings.secret = randomWords(5).join(" ");

  if (type === "create") {
    settings.activeApps.push(name);
  } else if (type === "destroy") {
    settings.activeApps = settings.activeApps.filter(item => item !== name);
  }
  //Copy and create globalSettings if it does not exist

  fs.writeFile(
    "./rougeSettings.json",
    JSON.stringify(settings, null, 2),
    function(err) {
      if (err) return console.log(err);
    }
  );
  await fs.copyFile(
    "./App/Cli/create-site/assets/htmldemo.pug",
    `./app${name}/views/htmldemo.pug`,
    err => {
      if (err) console.debug(err);
    }
  );
};

const validateAction = async function(type, name) {
  if (type === "create") {
    if (fs.existsSync(`./app${name}`)) {
      console.log(`The app ${name} already exists`);
      return false;
    }
    return true;
  }
  if (type === "destroy") {
    await inquirer.prompt([
      {
        type: "input",
        message:
          "Are you sure ? It can NOT be undone all data and files will be lost. Type YES to confirm",
        name: "name",
        validate: function(answer) {
          if (answer !== "YES") {
            console.log("Type YES (all caps) to confirm");
            return;
          }
          return true;
        }
      }
    ]);
    return true;
  }
};
const alterApp = function(type) {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of your app (only lowercase letters) ?",
        name: "name",
        validate: function(answer) {
          if (!answer || !answer.match(/[a-zA-Z]/)) {
            return "Please enter a correct name";
          }
          return true;
        }
      }
    ])
    .then(async answers => {
      let name = answers.name.toLowerCase();
      if (type !== "create") {
        id = db.getCollection("settings").findOne({ applicationName: name }).id;
      }
      const validated = await validateAction(type, name);

      console.log("validated : ", validated);
      if (!validated) {
        return;
      }
      handleFiles(type, name);
      console.log(`${type} Folders and Files : OK`);
      handleWebpack(type, name);
      console.log(`${type} Webpack config : OK`);
      handleFilesCopy(type, name);
      console.log(`${type} Settings : OK`);
      handleData(type, name);
      console.log(`${type} Data : OK`);

      if (type === "create") {
        console.log(
          `Start the server npm run start:dev\n and check your new app at the address http://localhost:3000/public/${name}`
        );
      }
    });
};
const createUser = function() {
  inquirer
    .prompt([
      {
        name: "username",
        message: "username"
      },
      {
        name: "password",
        message: "password",
        type: "password"
      },
      {
        name: "passwordConfirm",
        message: "confirm password",
        type: "password",
        validate(confirm, answers) {
          console.info(confirm, answers);

          const done = this.async();
          if (confirm !== answers.password) {
            done("Passwords don't match");
            return;
          }
          done(null, true);
        }
      }
    ])
    .then(answers => {
      const userDb = db.getCollection("users");
      const encrypted = cryptoJs.AES.encrypt(
        answers.password,
        settings.secret
      ).toString();

      userDb.insert({
        username: answers.username,
        password: encrypted,
        id: nanoid(6)
      });
      db.saveDatabase(err => {
        if (err) {
          console.log("error : " + err);
        } else {
          console.log("database saved.");
        }
      });
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
            name: "Destroy an existing App (can't be undone)",
            value: "destroy"
          },
          {
            name: "Create a user",
            value: "createUser"
          }
        ],
        validate: function(answer) {
          if (answer.length < 1) {
            return "Please choose an action";
          }

          return true;
        }
      }
    ])
    .then(answers => {
      db.loadDatabase({}, function(err) {
        if (err) {
          console.log("error : " + err);
        } else if (answers.action === "createUser") {
          createUser();
        } else {
          alterApp(answers.action);
        }
      });
    })
    .catch(error => {
      console.info(`CLI FAILED : ${error}.`);
    });
}
