const express = require('express')
const router = express.Router();

const UserModel = require("../models/user.model")
const { generateCrudMethods } = require('../services/index')
const employeeCrud = generateCrudMethods(UserModel)
const { validateDbId, recordError404 } = require('../middlewares')

// get All Records
router.get('/register', (req, res, next) => {
    employeeCrud.getAll()
        .then(data => res.send(data))
        .catch(err => next(err))
})

// Get Details by Id
router.get('/register/:id', validateDbId, (req, res, next) => {
    employeeCrud.getById(req.params.id)
        .then(data => {
            if (data) {
                res.send(data)
            } else {
                recordError404(req, res)
            }
        })
        .catch(err => next(err))
})

// Create a Record
router.post('/register', (req, res, next) => {
    employeeCrud.create(req.body)
        .then(data => res.status(201).json(data))
        .catch(err => next(err))
})

router.put('/register/:id', validateDbId, (req, res) => {
    employeeCrud.update(req.params.id, req.body)
        .then(data => {
            if (data) {
                res.send(data)
            } else {
                recordError404(req, res)
            }
        })
        .catch(err => next(err))
})

router.delete('/register/:id', validateDbId, (req, res) => {
    employeeCrud.dalete(req.params.id)
        .then(data => {
            if (data) {
                res.send(`${req.params.id} deleted successfully`)
            } else {
                recordError404(req, res)
            }
        })
        .catch(err => next(err))
})
module.exports = router;