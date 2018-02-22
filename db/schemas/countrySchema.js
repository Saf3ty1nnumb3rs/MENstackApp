const mongoose = require('mongoose')
const whiskySchema = require('./whiskySchema')
const Schema = mongoose.Schema

const countrySchema = new Schema({
    country: String,
    img: String,
    primaryWhiskyStyle: String,
    topSellingWhisky: String,
    whiskyProduced: [whiskySchema]
})



module.exports = countrySchema