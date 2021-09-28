
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
router.route('/storm').get(getAllStorms);
// router.route('/storm/:id').delete(deleteStorm);
router.delete('/storm/:stormId', (req, res) => {
    console.log("hi")
})
router.route('/storm/:stormId').get(getStormWithShifts);

router.route('/shift').post(createShift).get(getAllShifts);


module.exports = router;
