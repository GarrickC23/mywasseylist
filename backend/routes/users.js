const express = require('express')
const {
    register,
    login
} = require('../controllers/authenticateController')



const router = express.Router()

// Register Account
router.post('/register', register)

// Login to Account
router.post('/login', login)



module.exports = router