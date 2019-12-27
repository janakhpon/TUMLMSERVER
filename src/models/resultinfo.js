import mongoose, { model } from 'mongoose'

const ResultInfo = new mongoose.Schema({
    passed: {
        type: Boolean,
        required: true
    },
    previousrollno: {
        type: String,
        required: true
    },
    currentrollno: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    major: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model("ResultInfo", ResultInfo);