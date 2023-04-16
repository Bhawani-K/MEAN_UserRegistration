const express = require('express')
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const UserModel = require("../models/user.model")

// get All Records
router.get('/register', (req, res) => {
    UserModel.find()
        .then(data => res.send(data))
        .catch(err => console.log(err))
})

// Get Details by Id
router.get('/register/:id', (req, res) => {
    if(ObjectId.isValid(req.params.id)== false){
        res.status(400).json({
            error : 'given object is not valid'
        })
    }else{
        UserModel.findById(req.params.id)
        .then(data => {
            if(data){
                res.send(data)
            }else{
                res.status(404).json({
                    error:'No record with given _id :'+req.params.id
                })
            }
        })
        .catch(err => console.log(err))
    }
})

// Create a Record
router.post('/register', (req, res) => {
    UserModel.create(req.body)
    .then(data => res.status(201).json(data))
    .catch(err => console.log(err))
})

module.exports = router;