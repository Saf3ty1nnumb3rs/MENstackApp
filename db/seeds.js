require('dotenv').config()
const mongoose = require('mongoose')
const Whisky = require('../models/whisky')
const Country = require('../models/country')
const User = require('../models/user')


mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection

db.on('open', () => {
    console.log('Successfully connected to mongoDB')
  })
  
db.on('error', (err) => {
    console.log(err)
})