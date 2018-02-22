const mongoose = require('mongoose')
const Schema = mongoose.Schema

const whiskySchema = new Schema({
    name: String,
    img: String,
    distillery: String,
    yearMade: Number,
    style: String,
    yearsAged: Number,
    originCountry: String,
})



module.exports = whiskySchema