import mongoose from 'mongoose'

const EnrollmentInfo = mongoose.Schema({
    nrc: {
        type: String,
        required: true
    },
    applyfor: {
        type: String,
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
    contactableaddress: {
        type: String,
        required: true
    },
    contactableaddressph: {
        type: String,
        required: true
    },
    headofdepartmentsign: {
        type: String,
        required: true
    },
    headofdepartmentname: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    payed: {
        type: String,
        required: true
    },
    approved: {
        type: Boolean,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("EnrollmentInfo", EnrollmentInfo)