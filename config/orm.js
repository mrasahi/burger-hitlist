const db = require('./connection.js')

orm = { }

orm.selectAll = (table, cb) => {
    db.query(`SELECT * FROM ${table}`, (err, data) => {
        if (err) {console.log(err)}
        cb(data)
    })
}

orm.insertOne = (table, insert, cb) => {
    db.query(`INSERT INTO ${table} SET ?`, insert, (err, data) => {
      if (err) {console.log(err)}
      cb(data.insertId)
    })
}

orm.updateOne = (table, update, where, cb) => {
    db.query(`UPDATE ${table} SET ? WHERE ?`, [update, where], err => {
        if (err) {console.log(err)}
        cb()
    })
}

module.exports = orm