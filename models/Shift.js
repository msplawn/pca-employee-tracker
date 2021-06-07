// importing required dependency
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// model for candidates
const shiftSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    start: {
      type: String,
      required: true,
    },
    end: {
      type: String,
    },
    jobCode: {
      type: String,
    },
    meal: {
        type: Boolean,
        required: true,
        },
    mealCost: {
        type: Number,
    }
  },
  {
    timestamps: true,
  }
);

// exporting model to be used in other parts of the application
module.exports = mongoose.model("Shift", shiftSchema);