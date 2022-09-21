const Tour = require("../Models/Tour")


exports.getTours = async (req, res, next) => {
    try {
        const { page } = req.query
        const limit = 3
        const paginate = page - 1
        const skip = paginate * limit
        console.log(page)
        const result = await Tour.find({}).sort({ name: 1 }).skip(skip).limit(limit);
        res.status(200).json({
            status: 'success',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            Message: 'Can not get data',
            error: error.message
        })
    }
}

exports.getCheapestTours = async (req, res, next) => {
    try {
        const result = await Tour.find({}).sort({ price: 1 }).limit(3);
        res.status(200).json({
            status: 'success',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            Message: 'Can not get data',
            error: error.message
        })
    }
}
exports.getTrendingTours = async (req, res, next) => {
    try {
        const result = await Tour.find({}).sort({ viewCount: -1 }).limit(3);
        res.status(200).json({
            status: 'success',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            Message: 'Can not get data',
            error: error.message
        })
    }
}

exports.createTour = async (req, res, next) => {
    try {
        const result = await Tour.create(req.body)
        res.status(200).json({
            status: 'success',
            Message: 'tour added successfully',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            Message: 'tour does not add',
            error: error.message
        })
    }
}

exports.getTour = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Tour.findById(id);
        res.status(200).json({
            status: 'success',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            Message: 'Can not get data',
            error: error.message
        })
    }
}

exports.updateTour = async (req, res) => {
    try {
        const { id } = req.params;
        const update = await Tour.updateOne({ _id: id }, { $set: req.body }, {
            runValidators: true
        });
        res.status(200).json({
            status: 'success',
            data: update
        })
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            Message: 'Could not update this tour',
            error: error.message
        })
    }
}