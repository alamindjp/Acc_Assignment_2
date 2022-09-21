const express = require('express');
const router = express.Router()
const tourController = require("../Controllers/tour.controller")


router.route('/:id')
    .patch(tourController.updateTour)

router.route('/cheapest')
    .get(tourController.getCheapestTours)

router.route('/trending')
    .get(tourController.getTrendingTours)



module.exports = router;