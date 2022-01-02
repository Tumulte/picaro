import { defaultApp, activeApps } from "../../rougeSettings.json";

export default function(app) {
  app.get("/:app", function(req, res) {
    if (activeApps.includes(req.params.app)) {
      app.set("appName", req.params.app);
      app.set("views", `${__dirname}/../../app${req.params.app}/views`);
      res.render("index", {
        isLogged: app.get("isLogged"),
        appName: req.params.app
      });
    } else if (
      req.params.app !== "admin" ||
      req.params.app !== "__webpack_hmr"
    ) {
      res.status(404).send("This page does not exist");
    }
  });
  app.get("/edit/:app/:table/:id", function(req, res) {
    app.set("views", `./app${req.params.app}/views`);
    res.render("edit");
  });
  app.get("/admin/add/:app/:table", function(req, res) {
    app.set("views", `./app${req.params.app}/views`);
    res.render("add");
  });

  //Pages
  app.get("/", function(req, res) {
    app.set("appName", defaultApp);
    app.set("views", `${__dirname}/../../app${defaultApp}/views`);
    res.render("index", { isLogged: app.get("isLogged"), appName: defaultApp });
  });

  app.get("/:app/:view", function(req, res, next) {
    if (req.params.app === "dev-bundle") {
      return next();
    }
    app.set("appName", req.params.app);
    app.set("views", `${__dirname}/../../app${req.params.app}/views`);
    res.render(req.params.view, {
      isLogged: app.get("isLogged"),
      appName: req.params.app
    });
  });
}
