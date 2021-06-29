// importing required dependency
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// model for candidates
const shiftSchema = new Schema(
  {
    // userId: {
    //   type: String,
    //   required: true,
    // },
    // date: {
    //   type: Date,
    //   required: true,
    // },
    storm: {
      type: String,
      required: true,
    },
    classification: {
      type: String,
      required: true,
    },
    workType: {
      type: String,
      required: true,
    },
    start: {
      type: String,
      required: true,
    },
    end: {
      type: String,
      required: true,
    },
    utilityMeals: {
      type: Number,
      required: true,
    },
    perDiemMeals: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// exporting model to be used in other parts of the application
module.exports = mongoose.model("Shift", shiftSchema);