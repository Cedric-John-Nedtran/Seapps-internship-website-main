const express = require('express')
const app = express()

//require express Router
const router = express.Router()

//controller functions
const { adminSignup, adminLogin } = require('../controllers/adminController')

//login route
router.post('/login/admin', adminLogin)

//signup route
router.post('/signup/admin', adminSignup)

module.exports = router