const express = require('express')
const router = express.Router()
const Restaurants = require('../models/restaurants')
const { authenticated } = require('../config/auth')

// 餐廳分數排序
router.get('/rating', authenticated, (req, res) => {
  Restaurants.find({ userId: req.user._id })
    .sort({
      rating: 'desc'
    })
    .exec((err, restaurants) => {
      if (err) return console.error(err)
      return res.render('index', {
        restaurants: restaurants
      })
    })
})

// 餐廳類別排序
router.get('/category', authenticated, (req, res) => {
  Restaurants.find({ userId: req.user._id })
    .sort({
      category: 'asc'
    })
    .exec((err, restaurants) => {
      if (err) return console.error(err)
      return res.render('index', {
        restaurants: restaurants
      })
    })
})

// 餐廳升冪排序
router.get('/asc', authenticated, (req, res) => {
  Restaurants.find({ userId: req.user._id })
    .sort({
      name: 'asc'
    })
    .exec((err, restaurants) => {
      if (err) return console.error(err)
      return res.render('index', {
        restaurants: restaurants
      })
    })
})

// 餐廳降冪排序
router.get('/desc', authenticated, (req, res) => {
  Restaurants.find({ userId: req.user._id })
    .sort({
      name: 'desc'
    })
    .exec((err, restaurants) => {
      if (err) return console.error(err)
      return res.render('index', {
        restaurants: restaurants
      })
    })
})

module.exports = router
