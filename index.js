const express = require('express')
const cors = require("cors");
const users = require('./Users.json')
const app = express()
const port = process.env.PORT || 5000
const usersRouter = require('./Routes/usersRoutes')



app.use(cors());
app.use(express.json());


app.use('/user', usersRouter)

app.get('/', (req, res) => {
    res.send(users)
})


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});