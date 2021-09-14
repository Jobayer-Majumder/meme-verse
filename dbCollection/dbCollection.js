const { MongoClient } = require('mongodb');


const uri = "mongodb+srv://jarif:firaj@jobayer.eggfq.mongodb.net/memeVerse?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const usersCollection = client.db("memeVerse").collection("users");



module.exports = {
    client,
    usersCollection
}