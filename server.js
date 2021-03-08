// importing required dependencies
const express = require("express");
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");

const app = express();

require("dotenv").config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


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
