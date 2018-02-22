const express = require('express')
const router = express.Router({ mergeParams: true })
const User = require('../models/user')
const Whisky = require('../models/whisky')
const Country = require('../models/Country')











//WHISKY SHOW-------------------------GET//
router.get('/:id', (req, res) => {

    Country.findById(req.params.countryId).then((country) => {

    const whisky = country.whiskyProduced.id(req.params.id)
    
        res.render('whisky/show', {
            countryId: req.params.countryId,
            whisky: whisky
        })
    })

})

//WHISKY EDIT------------------------------GET//

router.get('/:id/edit', (req, res) => {

    
    Country.findById(req.params.countryId).then((country) => {
        const whisky = country.whiskyProduced.id(req.params.id)
        res.render('whisky/edit', {
            countryId: req.params.countryId,
            whisky: whisky
        })
    })
  })
    
  
  // UPDATE
  // PUT/PATCH
  router.patch('/:id', (req, res) => {
    Country.findById(req.params.countryId).then((country) => {
      // We don't have a nice method like findByIdAndUpdate here
      // so instead we need to manually change the sodas values
      const whisky = country.whiskyProduced.id(req.params.id)
      whisky.name = req.body.name
      whisky.img = req.body.img
      whisky.distillery = req.body.distillery
      whisky.yearMade = req.body.yearMade
      whisky.style = req.body.style
      whisky.yearsAged = req.body.yearsAged
      whisky.originCountry = req.body.originCountry
  
      // Then Save the company
      return country.save()
    }).then((updatedCountry) => {
      res.redirect(`/country/${updatedCountry._id}/whisky/${req.params.id}`)
    })
  })
  
module.exports = router
