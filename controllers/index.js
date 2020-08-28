const router = require('express').Router()

router.use('/api', require('./burgers_controller.js'))
router.use('/', require('./viewBurgers.js'))

module.exports = router