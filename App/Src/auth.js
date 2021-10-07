import passport from "passport";
import session from "cookie-session";
import { nanoid } from "nanoid";
import initializePassport from "./passportConfig.js";
let db;
let prefix = "";
let appName = "";

if (process.env.NODE_ENV === "development") {
  prefix = "/public";
}

const getUser = function(value, type = "username") {
  const parameters = {};
  parameters[type] = value;
  return db.findOne(parameters);
};

export default function(app, userDb) {
  appName = app.get("appName");
  db = userDb;
  initializePassport(passport, getUser);
  app.use(
    session({
      secret: nanoid(20),
      resave: true,
      saveUninitialized: false
    })
  );

  app.use(passport.initialize());

  app.use(passport.session());

  app.post(
    "/admin/login",
    isUserAuthenticated,
    passport.authenticate("local", {
      successRedirect: `${prefix}/${app.get("appName")}`,
      failureRedirect: "/admin/login",
      failureFlash: true
    })
  );

  app.get("/admin/login", isUserAuthenticated, (req, res) => {
    app.set("views", `${__dirname}/Views`);
    res.render("login");
  });

  app.get("/admin/logout", (req, res) => {
    req.logOut();
    res.redirect(`${prefix}/${app.get("appName")}`);
  });
}

export function isUserAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect(`${prefix}/${appName}`);
  }
  next();
}
