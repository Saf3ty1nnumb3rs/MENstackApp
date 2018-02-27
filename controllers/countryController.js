const express = require('express')
const router = express.Router({ mergeParams: true })
const Country = require('../models/country')





//COUNTRY INDEX------------------------GET//
router.get('/', (req, res) => {

    Country.find().then((countries) => {
        res.render('country/index', {
            countries: countries,
            title: 'WISHkey - Countries & Regions'
        })
    })

})

//COUNTRY SHOW-------------------------GET//
router.get('/:id', (req, res) => {


    Country.findById(req.params.id).then((country) => {
        res.render('country/show', {
            countryId: req.params.countryId,
            country: country,
            title: 'WISHkey - Country Profile'
        })
    })

})

//COUNTRY EDIT---------------------------GET//
router.get('/:id/edit', (req, res) => {

    Country.findById(req.params.id).then((country) => {

        res.render('country/edit', {
            id: req.params.id,
            country:country,
            title: 'WISHkey - Country Edit'
        })
    })
})

//COUNTRY PATCH--------------------------GET//
router.patch('/:id', (req, res) => {
    Country.findByIdAndUpdate(req.params.id, {
        primaryWhiskyStyle: req.body.primaryWhiskyStyle,
        topSellingWhisky: req.body.topSellingWhisky,
    }, {new: true}).then((updatedCountry) => {
        res.redirect(`/country/${updatedCountry._id}`)
    })
})

module.exports = router