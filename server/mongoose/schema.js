const mongoose = require('mongoose')

const schema = mongoose.Schema({
    Name:String,
    title:String,
    content:String,
    heading:String
})

module.exports= mongoose.model('user',schema)