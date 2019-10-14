const express = require("express");
const app = express();
const moment = require("moment");
const url = require("url");
var cors = require("cors");

var port = process.env.PORT || 3000;

const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const uri =
  "mongodb+srv://samer054:Sa123321@cluster0-21bpx.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

app.use(cors());
client.connect(err => {
  // perform actions on the collection object
  app.listen(port, () => {
    console.log("CORS-enabled web server listening on port ", port);
  });
});

app.get("/newdata", (req, res) => {
  var resData = req.query;
  var theDate;
  var insertQuery = ``;
if(Object.keys(resData).length === 0) return; 
  var collection = client.db("Counters").collection("count");
  var collectionHistory = client.db("Counters").collection("counthistory");
  var today = moment().format("DD-MM-YYYY");
  collection
    .findOne({ _id: new ObjectId("5d9b8a2b1c9d440000cfb7a1") }) // get date from mongo
    .then(el => {
      theDate = moment(el.Date).format("DD-MM-YYYY");
      console.log("date from mongo ", theDate);
      if (moment(today).isSame(theDate)) {
        console.log("YES UPDATING...........");

        collection.updateOne(
          { _id: new ObjectId("5d8009bd1c9d4400002ca064") },
          { $set: { Count: resData.data.black } }
        );
        collection.updateOne(
          { _id: new ObjectId("5d8009d11c9d4400002ca066") },
          { $set: { Count: resData.data.japan } }
        );
        collection.updateOne(
          { _id: new ObjectId("5d8009e91c9d4400002ca068") },
          { $set: { Count: resData.data.power } }
        );
        res.end();
      } else {
        let currCounters = [];
        currCounters.push;
        collection
          .find({})
          .forEach(el => {
            //create counter history
            if (Object.keys(el).length >= 4) {
              let obj = {
                Name: el.Name,
                Count: el.Count
              };
              currCounters.push(obj);
            }
          })
          .then(() => {
            collectionHistory.insertOne({
              Date: theDate,
              Counters: currCounters
            });
          });
        collection.findOneAndUpdate(
          { _id: new ObjectId("5d9b8a2b1c9d440000cfb7a1") },
          { $set: { Date: new Date(moment()) } }
        );
      }
    }).then(()=>{
      collection.updateOne(
        { _id: new ObjectId("5d8009bd1c9d4400002ca064") },
        { $set: { Count: resData.data.black } }
      );
      collection.updateOne(
        { _id: new ObjectId("5d8009d11c9d4400002ca066") },
        { $set: { Count: resData.data.japan } }
      );
      collection.updateOne(
        { _id: new ObjectId("5d8009e91c9d4400002ca068") },
        { $set: { Count: resData.data.power } }
      );
      res.end();
    });
});
data = [];
app.get("/data", async (req, res) => {
  let collection = client.db("SuperMarket").collection("records");
  await collection.find({}).forEach(el => {
    data.push(el);
  });
  res.send(data);
  res.end((data = []));
});
app.get("/datahistory", async (req, res) => {
  let collection2 = client.db("Counters").collection("counthistory");
  await collection2.find({}).forEach(el => {
    data.push(el);
  });
  res.send(data);
  res.end((data = []));
});
