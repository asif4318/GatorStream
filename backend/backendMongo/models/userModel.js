const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: { type: String, default: null},
  name: { type: String, default: null},
  picture: { type: String, default: null},
  recentActivity: [{ type: String, default: null }],
}) 


module.exports = mongoose.model('User', userSchema)


