const express = require('express')
const router = express.Router({
    mergeParams: true
})
const User = require('../models/user')
const Whisky = require('../models/whisky')
const Country = require('../models/Country')




//WHISKY NEW--------------------------------GET//

router.get('/new', (req, res) => {

    // We only need to pass the country ID to this new view
    res.render('whisky/new', {
        countryId: req.params.countryId
    })
})

//WHISKY CREATE------------------------------------POST//
router.post('/', (req, res) => {

    // Get company we need to save whisky to
    Country.findById(req.params.countryId).then((country) => {
  
      // THEN once we have the company, take req.body and make a new whisky
      const newWhisky = new Whisky({
        name: req.body.name,
        img: req.body.img,
        distillery: req.body.distillery,
        yearMade: req.body.yearMade,
        style: req.body.style,
        yearsAged: req.body.yearsAged,
        originCountry: req.body.originCountry
      })
  
      // Push whisky to company.whisky
      country.whiskyProduced.push(newWhisky)
  
      // Save Company
      return country.save()
    }).then((updatedCountry) => {
  
      // Redirect to all whisky
      res.redirect(`/country/${req.params.countryId}`)
    })
  })


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


// WHISKY PATCH-----------------------UPDATE//

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

        // Then Save the country
        return country.save()
    }).then((updatedCountry) => {
        res.redirect(`/country/${updatedCountry._id}/whisky/${req.params.id}`)
    })
})


router.delete('/:id', (req, res) => {
    Country.findById(req.params.countryId).then((country) => {
      const whisky = country.whiskyProduced.id(req.params.id)
      whisky.remove()
      return country.save()
    }).then(() => {
      res.redirect(`/country/${req.params.countryId}`)
    })
  })
module.exports = router