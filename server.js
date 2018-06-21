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

    // Sends all data to the frontend.
    app.get('/api/bucketlist', (req, res) => {
        db.collection('list').find().toArray((err, allList) => {
            if (err) { 
                console.log(err); 
                res.status(500); 
                res.send(); 
            }
            res.json(allList);
        });
    });

    // Posts a new entry to the database.
    app.post("/api/bucketlist", (req, res) => {
        db.collection("list").save(req.body, (err, result) => {
        if (err) { 
            console.log(err); 
            res.status(500); 
            res.send(); 
        }
        res.status(201);
        res.json(result.ops[0]);
        console.log("saved to database!!");
      });
    });

    // Deletes all the entries in the database.
    app.delete("/api/bucketlist", function(req, res, next) {
      db.collection("list").remove({}, function(err, result) {
        if (err) {
          console.log(err);
          res.status(500);
          res.send();
        }
        res.status(204).send();
      });
    });

    // Updates a specific entry.
    app.put('/api/bucketlist/:id', (req, res) => {
        db.collection('list').update({ "_id": ObjectID(req.params.id) }, req.body, (err, result) => {
            if (err) { res.status(500); res.send(); }
            res.status(204);
            res.send();
        })
    })

    // Basic server setup.
    app.listen(3000, () => { console.log("Listening on port 3000"); });
});
