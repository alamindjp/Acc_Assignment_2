const mongoose = require('mongoose');
const dotEnv = require('dotenv').config();
const app = require('./app');

// Database connection
mongoose.connect("mongodb+srv://tour_manage:QmqHIIvBJiaqQlce@acc2.v7old1z.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log("database connected");
});

// server 
const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});