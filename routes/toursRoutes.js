const express = require('express');
const router = express.Router()
const tourController = require("../Controllers/tour.controller")


router.route('/')
    .get(tourController.getTours)
    .post(tourController.createTour)

router.route('/:id')
    .get(tourController.getTour)



module.exports = router;