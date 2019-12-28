const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

/**
 * @param {import('passport').PassportStatic} passport
 * @param {function} getUser
 */
function initialize(passport, getUser) {
  /**
   *
   * @param {string} username
   * @param {string} password
   * @param {function} done
   */
  const authenticateUser = async function(username, password, done) {
    const user = getUser(username);
    if (!user) {
      return done(null, false, { message: "No user with that username" });
    }
    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Password incorrect" });
      }
    } catch (e) {
      return done(e);
    }
  };

  passport.use(new LocalStrategy(authenticateUser));

  passport.serializeUser(
    /**
     * @param {object} user
     * @param {function} done
     */
    function(user, done) {
      done(null, user.id);
    }
  );
  passport.deserializeUser(
    /**
     * @param {string} id
     * @param {function} done
     */
    function(id, done) {
      done(null, getUser(id, "id"));
    }
  );
}

module.exports = initialize;
