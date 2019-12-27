import mongoose from 'mongoose'

const StudentInfo = new mongoose.Schema({
    avatar: {
        type: String,
        required: true
    },
    burmesename: {
        type: String,
        required: true
    },
    englishname: {
        type: String,
        required: true
    },
    studentnrc: {
        type: String,
        required: true
    },
    brithdate: {
        type: String,
        required: true
    },
    bodymark: {
        type: String,
        required: true
    },
    dadburmesename: {
        type: String,
        required: true
    },
    dadenglishname: {
        type: String,
        required: true
    },
    dadnrc: {
        type: String,
        required: true
    },
    dadcareer: {
        type: String,
        required: true
    },
    momburmesename: {
        type: String,
        required: true
    },
    momenglishname: {
        type: String,
        required: true
    },
    momnrc: {
        type: String,
        required: true
    },
    momcareer: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    matriculationno: {
        type: String,
        required: true
    },
    matriculationyear: {
        type: String,
        required: true
    },
    parmanentaddress: {
        type: String,
        required: true
    },
    parmanentaddressph: {
        type: String,
        required: true
    },
    addressinreach: {
        type: String,
        required: true
    },
    addressinreachph: {
        type: String,
        required: true
    },
    studentsign: {
        type: String,
        required: true
    },
    studentname: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("StudentInfo", StudentInfo)