import {MangoClient} from "mangodb";
const client=new MangoClient("mongodb://127.0.0.1");
await client.connect();

const db=client.db("mangodb_nodejs_db");
const userCollection=db.collection("users");
userCollection.insertOne({name:"ganesh",father:"shiv",mother:parvati});