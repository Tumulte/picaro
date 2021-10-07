import { Strategy as LocalStrategy } from "passport-local";
import cryptoJs from "crypto-js";
import { nanoid } from "nanoid";

function initialize(passport, getUser) {
  const authenticateUser = async function(username, password, done) {
    const user = getUser(username);
    if (!user) {
      return done(null, false, { message: "No user with that username" });
    }
    try {
      const clearPassword = cryptoJs.AES.decrypt(
        user.password,
        nanoid(21)
      ).toString(cryptoJs.enc.Utf8);
      if (password === clearPassword) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Password incorrect" });
      }
    } catch (e) {
      return done(e);
    }
  };

  passport.use(new LocalStrategy(authenticateUser));
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    done(null, getUser(id, "id"));
  });
}

export default initialize;
