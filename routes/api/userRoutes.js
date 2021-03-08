const router = require("express").Router();
const User = require("../../models/User");
const passport = require("passport");

  // Using the passport.authenticate middleware with our local strategy.
  // router.post("/login", passport.authenticate("local"), (req, res) => {
  //   res.json({
  //     username: req.user.username,
  //     id: req.user.id,
  //   });
  // }); 
  router.post(
    "/login",
    passport.authenticate("local", {
      // failureRedirect: "/login",
      failureFlash: true,
    }),
    function (req, res) {
      console.log(req.body)
      // res.json("success")
      res.redirect("/");
    }
  );

  // Route for signing up a user.
router.post("/signup", (req, res, next) => {
    User.register(
      new User(req.body),
      req.body.password,
      function (err) {
        if (err) {
          console.log("error while user register!", err);
          return next(err);
        }

        console.log("user registered!");

        res.redirect("/");
      }
    );
    // db.User.create(req.body)
    //   .then(function () {
    //     res.redirect(307, "/api/user/login");
    //   })
    //   .catch(function (err) {
    //     res.status(401).json(err);
    //   });
  });

  // Route for logging user out
  router.get("/logout", (req, res) => {
    req.logout();
    res.json("Logged out");
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side

  router.get("/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      console.log("yes, userdata");
      // Otherwise send back the user's username and name
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        id: req.user._id,
        username: req.user.username,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
      });
    }
  });

module.exports = router;


