"use server";
import { MongoClient, ObjectId } from "mongodb";

const dbLink = process.env.mongodb_link;
const client = new MongoClient(dbLink, { serverSelectionTimeoutMS: 10000 });

let db;
let collections;

async function connectToDatabase() {
  if (!db) {
    await client.connect();
    db = client.db("Laptop");

    collections = {
      sitedata: db.collection("data"),
      blogscollection: db.collection("blogs"),
      Admindatacollection: db.collection("Admindata"),
      Productscollection: db.collection("Products"),
      userscollection: db.collection("users"),
      orderscollection: db.collection("orders"),
      contactmessages: db.collection("contactmessages"),
    };
  }

  return collections;
}

export async function getcollection() {
  await connectToDatabase();
  return { ...collections, ObjectId };
}
