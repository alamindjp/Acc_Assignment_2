const mongoose = require('mongoose');


// Schema 
const tourSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a tour Name"],
        trim: true,
        unique: [true, "Name must be unique"],
        minlength: [5, "Must be at least 5 characters"],
        maxlength: [60, "Name is too large"],
    },
    price: {
        type: Number,
        trim: true,
        required: [true, "Please provide tour Price"],
        min: [0, "Price must be positive number"]
    },
    description: {
        type: String,
        required: true
    },
    viewCount: {
        required: true,
        type: String
    }
}, {
    timestamps: true
})

// Model
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour