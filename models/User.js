// importing required dependency
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");


// model for users
const User = new Schema({
  username: {
    type: String,
    min: 6,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  //referencing a users shifts
  shifts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Shift",
    },
  ],
  admin: {
    type: Boolean,
    default: false,
  },
});

User.plugin(passportLocalMongoose);

// exporting model to be used in other parts of the application
module.exports = mongoose.model("User", User);
