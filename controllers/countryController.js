const express = require('express')
const router = express.Router()
const Country = require('../models/country')





//COUNTRY INDEX------------------------GET//
router.get('/', function(req, res, next) {
    
    Country.find().then((countries) => {
        res.render('country/index', { 
        countries:countries  })
  })
  
});
  
  
module.exports = router