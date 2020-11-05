const mongoose = require('mongoose')
const Schema = mongoose.Schema
const schema = new Schema({
    name: String,
    like: Boolean
})
const Story = mongoose.model('story', schema)
module.exports = Story