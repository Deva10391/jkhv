const { MongoClient } = require('mongodb');
let dbConnection;

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect("mongodb+srv://dbUser:dbPassword@cluster0.4c9loip.mongodb.net/?retryWrites=true&w=majority")
            .then((client) => {
                dbConnection = client.db();
                return cb();
            })
            .catch((err) => {
                console.error(err);
                return cb(err);
            })
    },
    getDb: () => {
        return dbConnection;
    }
}