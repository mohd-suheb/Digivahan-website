const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },   // lowercase to match controller
    password: { type: String, required: true }, // add password
}, { timestamps: true });

module.exports = mongoose.model('User', userschema);
