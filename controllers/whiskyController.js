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

    
    Country.findById(req.params.companyId).then((country) => {
        const whisky = country.whisky.id(req.params.id)
        res.render('whisky/edit', {
            countryId: req.params.countryId,
            whisky: whisky
        })
    })
  })
    
  
  // UPDATE
  // PUT/PATCH
  router.patch('/:id', (req, res) => {
    Company.findById(req.params.companyId).then((company) => {
  
      // We don't have a nice method like findByIdAndUpdate here
      // so instead we need to manually change the sodas values
      const soda = company.sodas.id(req.params.id)
      soda.name = req.body.name
      soda.price = req.body.price
      soda.packaging = req.body.packaging
      soda.quantitySold = req.body.quantitySold
  
      // Then Save the company
      return company.save()
    }).then((updatedCompany) => {
      res.redirect(`/companies/${updatedCompany._id}/sodas/${req.params.id}`)
    })
  })
  
module.exports = router
