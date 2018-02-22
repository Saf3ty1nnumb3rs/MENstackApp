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

//USER NEW-------------------------GET//
router.get('/new', (req, res) => {
  res.render('users/new')
})


//USER SHOW-------------------------GET//
router.get('/:id', (req, res) => {

    User.findById(req.params.id).then((user) => {
        res.render('users/show', {
            user: user
        })
    })

})
//USER------------------------------CREATE/POST//
router.post('/', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    img: req.body.img,
    country: req.body.country,
    favoriteWhisky: req.body.favoriteWhisky
  })

  newUser.save().then((savedUser) => {
    res.redirect('/users')
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

//USER PATCH--------------------------PUT/UPDATE//
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

//USER DELETE--------------------------DESTROY//

router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id).then(() => {
    res.redirect('/users')
  })
})


module.exports = router
