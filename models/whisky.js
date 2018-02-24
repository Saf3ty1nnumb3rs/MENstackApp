const mongoose = require('mongoose')
const whiskySchema = require('../db/schemas/whiskySchema')
const favWhiskySchema = require('../db/schemas/whiskySchema')

const Whisky = mongoose.model('whisky', whiskySchema)
const FavWhisky = mongoose.model('favWhisky', favWhiskySchema)

module.exports = {Whisky, FavWhisky}