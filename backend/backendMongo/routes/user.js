const express = require('express')
const { requiresAuth } = require('express-openid-connect');


// controller functions
const { loginUser} = require('../controllers/userController')

const router = express.Router()



router.use(requiresAuth);


// login route
router.post('/login', loginUser)



module.exports = router