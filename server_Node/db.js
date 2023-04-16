const mongoose = require('mongoose')
const dbUri = "mongodb://0.0.0.0:27017/UserRegistrationDb";

module.exports = () => {
    return mongoose.connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}