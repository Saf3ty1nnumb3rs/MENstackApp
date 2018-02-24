const mongoose = require('mongoose')
const whiskySchema = require('./whiskySchema')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    img: String,                
    country: String,
    favoriteWhisky:[whiskySchema], 
})



module.exports = userSchema