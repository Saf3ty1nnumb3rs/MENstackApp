const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    country: String,
    favoriteWhisky: String,
})



module.exports = userSchema