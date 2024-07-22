const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    suffix: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobilePhone: {
        type: String,
        required: true
    },
    
}, { timestamps: true })

const Employee = mongoose.model('employee', employeeSchema)

module.exports = Employee