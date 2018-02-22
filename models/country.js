const mongoose = require('mongoose')
const countrySchema = require('../db/schemas/countrySchema')

const Country = mongoose.model('country', countrySchema)

module.exports = Country