// importing required dependencies
const express = require("express");
const session = require("express-session");
const flash = require("connect-flash");
const logger = require("morgan");
const path = require("path");

const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const routes = require('./routes');
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;


const app = express();

require("dotenv").config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/htmlRoutes")(app);

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

// Configure passport-local to use account model for authentication
const User = require('./models/User');
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(routes);



// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./public/html/login-page.html"));
// });


// Connect to the Mongo DB, handle depreciation warnings
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/pca-emptrack", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(console.log("Database is connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
