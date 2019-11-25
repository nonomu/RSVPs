const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment')
const requestPromise = require("request-promise")
const PeopleModel = require("../models/people")



const APPID = "693487d5ce7f67db0872c3ce4dbe3b15"
const WheatherAPIbasicURL = "https://api.openweathermap.org/data/2.5/weather"

// router.post('/city/:cityName', async function (req, res) {
//     const cityName = req.params.cityName
//     try {
//         const weatherData =  await requestPromise(`${WheatherAPIbasicURL}?q=${cityName}&units=metric&APPID=${APPID}`)
//         res.send(JSON.parse(weatherData))
//     }
//     catch (err) {
//          res.status(400)
//         res.send(err.message)
        
//     }
// })
router.get('/people', async function (req, res) {
     const allPeople=await PeopleModel.find({})
     res.send(allPeople)
})

router.post('/save/', function (req, res) {
    const newFamily =new PeopleModel({...req.body})
    newFamily.save()
    res.send("Saved")
})
// })
// router.delete('/city/:cityName', async function (req, res) {
//     const cityName =req.params.cityName
//     await WheatherDB.deleteOne({name:cityName})
//     res.send("deleted")
// })












module.exports = router
