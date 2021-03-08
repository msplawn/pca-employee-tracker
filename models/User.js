// importing required dependency
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// model for users
const userSchema = new Schema({
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

// exporting model to be used in other parts of the application
module.exports = mongoose.model("User", userSchema);
