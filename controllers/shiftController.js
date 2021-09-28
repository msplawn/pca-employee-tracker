const { Shift, Storm, User } = require("../models");

const shiftController = {
  async createStorm(req, res) {
    try {
      const dbStormData = await Storm.create(req.body);
      console.log(dbStormData);
      res.json({ message: "Storm successfully created!" });

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }

  },
  async getAllStorms(req, res) {
    try {
      let dbStormData = await Storm.find()
      res.json(dbStormData)
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async getStormWithShifts(req, res) {
    try {
      const dbStormData = await Storm.findOne({
        _id: req.params.stormId,
      }).populate("shifts");
      if (!dbStormData) {
        return res.status(404).json({ message: "No storm with this id!" });
      }
      res.json(dbStormData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async createShift(req, res) {
    try {
      console.log("creating shift")
      const dbShiftData = await Shift.create(req.body);

      await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { shifts: dbShiftData._id } },
        { new: true }
      );

      await Storm.findOneAndUpdate(
        { _id: req.body.stormId },
        { $push: { shifts: dbShiftData._id } },
        { new: true }
      );

      res.json({ message: "Shift Created and added to user and storm!" })

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async getAllShifts(req, res) {
    try {
      let dbShiftData = await Shift.find()
      res.json(dbShiftData)
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async getAllUsers(req, res) {
    try {
      let dbUserData = await User.find();
      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async deleteStorm(req, res) {
    console.log(req)
    await Storm.findOneAndRemove({ _id: req.params.stormId })
    .then(dbStormData => {
      if (!dbStormData) {
        return res.status(404).json({ message: 'No storm with this id!' });
      }

      res.json({ message: 'Storm successfully deleted!' });
      
    })

  }
};

module.exports = shiftController;
