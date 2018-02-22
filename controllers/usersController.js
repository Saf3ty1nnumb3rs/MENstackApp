const express = require('express')
const router = express.Router()
const User = require('../models/user')





//USER INDEX------------------------GET//
router.get('/', (req, res) => {

    User.find().then((users) => {
        res.render('users/index', {
            users: users
        })
    })

})

//USER SHOW-------------------------GET//
router.get('/:id', (req, res) => {

    User.findById(req.params.id).then((user) => {
        res.render('users/show', {
            user: user
        })
    })

})

//USER EDIT---------------------------GET//
router.get('/:id/edit', (req, res) => {

    User.findById(req.params.id).then((user) => {

        res.render('users/edit', {
            id: req.params.id,
            user:user
        })
    })
})

//USER PATCH--------------------------GET//
router.patch('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      img: req.body.img,
      country: req.body.country,
      favoriteWhisky: req.body.favoriteWhisky,
    }, {new: true}).then((updatedUser) => {
        res.redirect(`/users/${updatedUser._id}`)
    })
})

module.exports = router
