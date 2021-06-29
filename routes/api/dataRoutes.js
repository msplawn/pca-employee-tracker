const { create, deleteOne } = require("../../models/User");

const router = require("express").Router();
const {
    createStorm,
    getStormWithShifts,
    createShift,
    getAllShifts,
    getAllStorms,
    deleteStorm
} = require('../../controllers/shiftController');

//all routes in this file start with /api/data/

router.route('/storm').post(createStorm).get(getAllStorms);
router.route('/storms').get(getAllStorms);
router.route('storm/:stormId').delete(deleteStorm);
router.route('/storm/:stormId').get(getStormWithShifts);

router.route('/shift').post(createShift).get(getAllShifts);


module.exports = router;
