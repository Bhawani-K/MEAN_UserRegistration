const mongoose = require('mongoose')

module.exports = mongoose.model('User', {
    fullName: { type: String },
    email: { type: String },
    password: { type: String },
    confirmPassword: { type: String }
})
