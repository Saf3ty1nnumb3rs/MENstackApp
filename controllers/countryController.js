const express = require('express')
const router = express.Router()
const Country = require('../models/country')





//COUNTRY INDEX------------------------GET//
router.get('/', (req, res) => {

    Country.find().then((countries) => {
        res.render('country/index', {
            countries: countries
        })
    })

})

//COUNTRY SHOW-------------------------GET//
router.get('/:id', (req, res) => {

    Country.findById(req.params.id).then((country) => {
        res.render('country/show', {
            country: country
        })
    })

})

//COUNTRY EDIT---------------------------GET//
router.get('/:id/edit', (req, res) => {

    Country.findById(req.params.id).then((country) => {

        res.render('country/edit', {
            id: req.params.id,
            country:country
        })
    })
})

module.exports = router