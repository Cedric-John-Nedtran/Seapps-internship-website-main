//require env file
require('dotenv').config()

//require packages
const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

const app = express()

//middleware

//database connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen to port 3000
        app.listen(process.env.PORT, () => {
            console.log('listening on port', process.env.PORT)})
    })
    .catch((error) => {
        console.log(error)
    })

//routes
app.get('/')