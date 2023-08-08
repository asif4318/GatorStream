const mongoose = require('mongoose')

const Schema = mongoose.Schema

const classSchema = new Schema({
    className: { type: String, default: null},
    videos: [{
        link: { type: String},
        transcript: { type: String },
        summary: { type: String },
        // Add any additional properties related to the association, if needed
      }],
    resources: [{ type: String, default: null }],
    users: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
}) 


module.exports = mongoose.model('Class', classSchema)


