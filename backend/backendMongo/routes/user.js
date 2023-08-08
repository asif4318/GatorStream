const express = require('express')


// controller functions
const {loginUser, addClass, getClass} = require('../controllers/userController')

const router = express.Router()




// login route
router.post('/login', loginUser)
router.post('/addClass', addClass)
router.get('/getClass', getClass)



module.exports = router