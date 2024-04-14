const { connectToDb, getDb } = require('./mongoDrivers/db');
const express = require("express");
const app = express();

let db;

connectToDb((err) => {
    if (!err) {
        app.listen(3000, () => {
            console.log("hello sir");
        });
        db = getDb();
    }
});

//

app.get('/', (req, res) => {
    let objs = [];
    db
        .collection('items')
        .find()
        .forEach(a => objs.push(a))
        .then(() => {
            res.status(200).json(objs);
        })
        .catch(() => {
            res.status(500).json({ error: "cant fetch" });
        })
});