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

//WHISKY
module.exports = router
