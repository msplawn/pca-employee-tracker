const { Shift, Storm, User } = require("../models");

const adminController = {
//eventually going to have routes that only admins use moved into here with different routing.
    async createUser(req, res) {
        try {
            console.log("creating employee")
            const dbUserData = await User.create(req.body);

            res.json({ message: "new employee added" })
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    async getAllUsers(req, res) {
        try {
            console.log("creating employee")
            const dbUserData = await User.findAll();
            res.json(dbUserData)
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
}

module.exports = adminController;