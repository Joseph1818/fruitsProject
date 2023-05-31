const { MongoClient } = require("mongodb");
const assert = require("assert");

// Connection URL
const url = "mongodb://localhost:27017";
// Database name
const dbName = "fruitsDB";

const client = new MongoClient(url, { useNewUrlParser: true });

// use method to connect to the server

client.connect(function (err) {
  assert.equal(null, err);
  console.log("connected successfully to the server");
  const db = client.db(dbName);

  client.close();
});
