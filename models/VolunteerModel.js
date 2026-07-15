const mongoose = require("mongoose");

const VolunteerSchema = new mongoose.Schema({

    volunteerId: {
        type: String,
        required: true
    },

    fullName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    dateOfBirth: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    bloodGroup: {
        type: String,
        required: true
    },

    department: {
        type: String,
        required: true
    },

    yearOfStudy: {
        type: String,
        required: true
    },

    campName: {
        type: String,
        required: true
    },

    hoursCompleted: {
        type: Number,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    unitNumber: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model("volunteers", VolunteerSchema);