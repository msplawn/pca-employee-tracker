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
    workType1: {
      type: String,
      required: true,
    },
    workType2: {
      type: String
    },
    workType3: {
      type: String
    },
    workType4: {
      type: String
    },
    start1: {
      type: String,
      required: true,
    },
    start2: {
      type: String,
    },
    start3: {
      type: String,
    },
    start4: {
      type: String,
    },
    end1: {
      type: String,
      required: true,
    },
    end2: {
      type: String,
    },
    end3: {
      type: String,
    },
    end4: {
      type: String,
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
  },
  {
    typeKey: "$type"    
  }
);

// exporting model to be used in other parts of the application
module.exports = mongoose.model("Shift", shiftSchema);