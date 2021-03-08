const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");

// Telling passport we want to use a Local Strategy.
passport.use(
  new LocalStrategy(
    // Our user will sign in using a username
    {
      usernameField: "username",
    },
    function (username, password, done) {
      // When a user tries to sign in this code runs
      db.User.findOne({
        username
      }).then(function (dbUser) {
        // If there's no user with the given email
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect email.",
          });
        }
        // If the password the user gives us is incorrect
        else if (!dbUser.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect password.",
          });
        }
        // If none of the above, return the user
        return done(null, dbUser);
      });
    }
  )
);
// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

module.exports = passport;
