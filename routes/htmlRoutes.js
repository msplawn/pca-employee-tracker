const path = require("path");
const express = require("express")
// const app = express();
// const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = (app) => {
//USER HTML ROUTES FIRST
  app.get("/", function(req, res) {
      console.log(req);
    res.sendFile(path.join(__dirname, "../public/html/login-page.html"));
  });

  app.get("/employee", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/employee-landing.html"));
  });

  app.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/admin-landing.html"));
  });
  
};
