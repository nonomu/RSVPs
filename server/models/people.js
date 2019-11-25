const mongoose = require('mongoose')
const Schema = mongoose.Schema

const familySchema = new Schema({
    name: String ,
    familyName: String,
    adultsNumber:Number,
    kidsNumber: Number
})

const People = mongoose.model("family", familySchema)
module.exports = People
