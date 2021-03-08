const router = require("express").Router();
const dataRoutes = require("./dataRoutes");
const userRoutes = require("./userRoutes");

// User routes
router.use("/user", userRoutes);

// Data Routes - everything but user
router.use("/data", dataRoutes);


module.exports = router;
