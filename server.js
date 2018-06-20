const server = require("express");
const app = server();
const parser = require('body-parser');
const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(server.static("client/build"));


MongoClient.connect("mongodb://localhost:27017", (err, client) => {
    if (err) { console.log(); return; }

    const db = client.db("bucket_list");
    console.log("Connected to database!!");

    app.get('/api/bucketlist', (req, res) => {
        db.collection('list').find().toArray((err, allList) => {
            if (err) console.log(err); 
        });
    });

    app.listen(3000, () => {
        console.log("Listening on port 3000");
    });
});
