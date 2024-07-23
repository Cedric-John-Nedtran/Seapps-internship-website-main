const express = require('express')
const app = express()

//require express Router
const router = express.Router()

//controller functions
const { userSignup, userLogin } = require('../controllers/userController')

//login route
router.post('/login/user', userLogin)

//signup route
router.post('/signup/user', userSignup)

module.exports = router


