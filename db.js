const {MongoClient} = require('mongodb')

let dbConnection
let dbUri = 'mongodb+srv://toofan:test123456@cluster0.bpt6m7c.mongodb.net/?retryWrites=true&w=majority'
let local = 'mongodb://127.0.0.1:27017'
module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true})
      .then((client) => {
        dbConnection = client.db('guitarShop');
        console.log('Connected to MongoDB Atlas');
        return cb();
      })
      .catch((err) => {
        console.error('Error connecting to MongoDB Atlas:', err);
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};