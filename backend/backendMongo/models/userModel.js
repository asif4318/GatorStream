const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: { type: String, default: null},
  name: { type: String, default: null},
  picture: { type: String, default: null},
  recentActivity: [{ type: String, default: null }],
  userID: { type: String, default: null},
  classes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class'}],
}) 


module.exports = mongoose.model('User', userSchema)


