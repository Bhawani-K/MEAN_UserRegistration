const express = require('express')
const router = express.Router();
const UserModel = require("../models/user.model")

router.get('/register', (req, res) => {
    UserModel.find()
        .then(data => res.send(data))
        .catch(err => console.log(err))
})

router.post('/register', (req, res) => {
    UserModel.create(req.body)
    .then(data => res.status(201).json(data))
    .catch(err => console.log(err))
})

module.exports = router;