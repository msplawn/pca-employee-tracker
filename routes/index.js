const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const htmlRoutes = require('./htmlRoutes');

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, html routes
router.use("/", htmlRoutes);


module.exports = router;
