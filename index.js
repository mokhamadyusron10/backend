const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url =
  "mongodb+srv://mokhamadyusron10:viscabarca10@cluster0.aemgh7a.mongodb.net/test";
const client = new MongoClient(url);

// Database Name
const dbName = "website";

app.get("/", async (req, res) => {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("home");
  const dblink = await collection.find({}).toArray();

  res.status(200).json({ dblink });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
