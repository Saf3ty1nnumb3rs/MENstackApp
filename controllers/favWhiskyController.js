const express = require('express')
const router = express.Router({mergeParams: true})

const User = require('../models/user')
const Whisky = require('../models/whisky')
const Country = require('../models/whisky')
const FavWhisky = require('../models/whisky')

//WHISKY NEW--------------------------------GET//

router.get('/new', (req, res) => {

    // We only need to pass the User ID to this new view
    res.render('favWhisky/new', {
        UserId: req.params.UserId,
        title: 'WISHkey - New Whisky'
    })
})
//AOK!!!
//WHISKY CREATE------------------------------------POST//
router.post('/', (req, res) => {

    // Get company we need to save whisky to
    User.findById(req.params.userId).then((user) => {

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
        user.favoriteWhisky.push(newWhisky)

        // Save Company
        return user.save()
    }).then((updatedUser) => {

        // Redirect to all whisky
        //   res.redirect(`/User/${req.params.UserId}/whisky/`)

        res.redirect(`/users/${updatedUser._id}`)
    })
})
//Also AOK!!!!!

//WHISKY SHOW-------------------------GET//
router.get('/:id', (req, res) => {

    User.findById(req.params.userId).then((user) => {

        const whisky = user.favoriteWhisky.id(req.params.id)

        res.render('favWhisky/show', {
            UserId: req.params.userId,
            whisky: whisky,
            title: 'WISHkey - Whisky Profile'
        })
    })

})
//Works!! Can you believe it??!!!?????

//WHISKY EDIT------------------------------GET//

router.get('/:id/edit', (req, res) => {


    User.findById(req.params.userId).then((user) => {
        const whisky = user.favoriteWhisky.id(req.params.id)
        res.render('favWhisky/edit', {
            userId: req.params.UserId,
            whisky: whisky,
            title:'WISHkey - Whisky Edit'
        })
    })
})


// WHISKY PATCH-----------------------UPDATE//

router.patch('/:id', (req, res) => {
    User.findById(req.params.userId).then((user) => {
        // We don't have a nice method like findByIdAndUpdate here
        // so instead we need to manually change the sodas values
        const whisky = user.favoriteWhisky.id(req.params.id)
        whisky.name = req.body.name
        whisky.img = req.body.img
        whisky.distillery = req.body.distillery
        whisky.yearMade = req.body.yearMade
        whisky.style = req.body.style
        whisky.yearsAged = req.body.yearsAged
        whisky.originUser = req.body.originUser

        // Then Save the User
        return user.save()
    }).then((updatedUser) => {
        res.redirect(`/users/${updatedUser._id}/favWhisky/${req.params.id}`)
    })
})

//WHISKY DELETE---------------------------DESTROY//
router.delete('/:id', (req, res) => {
    User.findById(req.params.userId).then((user) => {
        const whisky = user.favoriteWhisky.id(req.params.id)
        whisky.remove()
        return user.save()
    }).then(() => {
        res.redirect(`/users/${req.params.userId}`)
    })
})
module.exports = router