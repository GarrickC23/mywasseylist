// npm install dotenv
require('dotenv').config()

// npm install express
const express = require('express')
// npm install mongoose
const mongoose = require('mongoose')
const gameRoutes = require('./routes/games')

// express app
const app = express();

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/games', gameRoutes)


// connect to db and listen to port
mongoose.connect(process.env.MONGO_URI)
    .then(() => { 
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })