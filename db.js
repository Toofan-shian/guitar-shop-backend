const {MongoClient} = require('mongodb')

let dbConnection

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect('mongodb://127.0.0.1:27017/guitarShop')
      .then((client) => {
        dbConnection = client.db();
        return cb()
      })
      .catch((err) => cb(err))
  },
  getDb: () => dbConnection
}