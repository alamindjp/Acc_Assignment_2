const express = require('express')
const cors = require("cors");
const mongoose = require("mongoose")
const app = express()


// Middleware
app.use(express.json());
app.use(cors());


// Routes 
const toursRoute = require('./routes/toursRoutes')
const tourRoute = require('./routes/tour.route')


app.use('/api/v1/tours', toursRoute);
app.use('/api/v1', toursRoute);
app.use('/api/v1/tour', tourRoute);

app.get('/', (req, res) => {
    res.send("Server is running")
});
module.exports = app;
