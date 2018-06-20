const app = require('express')();
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require("mongodb").ObjectID;
app.use(parser.json(), parser.urlencoded({ extended: true }), app.static('client/build'));

MongoClient.connect("mongodb://localhost:27017", (err, client) => {
    if (err) { console.log(); return; }

    const db = client.db("bucket_list");
    console.log("Connected to database!!");

    server.get('/api/bucketlist', (req, res) => {
        
    });
});
