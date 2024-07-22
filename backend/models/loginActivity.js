const mongoose = require('mongoose')

const loginActivity = new mongoose.Schema ({
    userID: {
        userID: String,
        required: true
    },
    timeIn: {
        type: Date,
        required: true
    },
    timeOut: {
        type: Date,
        required: true
    },
    image: {
        type: Image
    }
}, { timeStamps: true })

const LoginActivity = mongoose.model('loginActivities', loginActivity)

module.exports = LoginActivity