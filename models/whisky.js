const mongoose = require('mongoose')
const whiskySchema = require('../db/schemas/whiskySchema')

const Whisky = mongoose.model('whisky', whiskySchema)


module.exports = Whisky