const express = require('express')

// controller functions
const {addVideo} = require('../controllers/classController')

const router = express.Router()


// login route
router.post('/addVideo', addVideo)



module.exports = router