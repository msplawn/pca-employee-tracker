// importing required dependency
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// model for users
const stormSchema = new Schema({
  name: {
    type: String,
    min: 6,
    required: true,
    },
    date: {
        type: String,
    },
    supervisor: {
        type: String,
    },
    teamLeader: {
        type: String,
    },
  //referencing shifts inside of a storm
  shifts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Shift",
    },
  ],
}, {
    timestamps: true,
});

// exporting model to be used in other parts of the application
module.exports = mongoose.model("Storm", stormSchema);
