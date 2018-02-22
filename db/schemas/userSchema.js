const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    img: String,
    country: String,
    favoriteWhisky: String,
})



module.exports = userSchema