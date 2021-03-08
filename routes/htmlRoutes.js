// const path = require("path");
// const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = (app) => {
//USER HTML ROUTES FIRST
//   app.get("/signup", function (req, res) {
//     // If the user already has an account send them to the members page
//     if (req.user) {
//       res.redirect("/member");
//     }
//     res.sendFile(path.join(__dirname, "../public/signup.html"));
//   });

//   app.get("/login", (req, res) => {
//     // If the user already has an account send them to the members page
//     if (req.user) {
//       res.redirect("/member");
//     }
//     res.sendFile(path.join(__dirname, "../public/login.html"));
//   });

//   // If a user who is not logged in tries to access this route they will be redirected to the signup page
//   app.get("/member", isAuthenticated, (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/member.html"));
//   });
};
