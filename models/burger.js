const orm = require('../config/orm.js')

const model = { }

model.getAll = (cb) => {
    orm.selectAll('burgers', results => cb(results))
}

model.insert = (newBurger, cb) => {
    orm.insertOne('burgers', newBurger, res => cb(res))
}

model.update = (updatedBurger, where, cb) => {
    orm.updateOne('burgers', updatedBurger, where, () => cb())
}

module.exports = model