const router = require('express').Router()
const burger = require('../models/burger.js')

router.get('/burgers', (req, res) => {
    burger.getAll(burgers => {
        res.json(burgers)
    })
})

router.post('/burgers', (req, res) => {
    burger.insertOne(req.body, data => {
        res.json(data)
    })
})

router.put('/burgers', (req, res) => {
    burger.updateOne(req.body, { id: req.params.id }, () => {
        res.sendStatus(200)
    })
})

module.exports = router