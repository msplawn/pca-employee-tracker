const { create } = require("../../models/User");

const router = require("express").Router();
const {
    createStorm,
    getStormWithShifts,
    createShift,
    getAllShifts
} = require('../../controllers/shiftController');

//all routes in this file start with /api/data/

router.route('/storm').post(createStorm);

router.route('/storm/:stormId').get(getStormWithShifts);

router.route('/shift').post(createShift).get(getAllShifts);


module.exports = router;
