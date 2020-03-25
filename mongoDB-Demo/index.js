const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://fullstackUser:cph33221@fullstack-cluster-2g4if.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function mongoTest() {
    try {
        await client.connect();
        const dogs = client.db("kennel")
        const dogsCollection = dogs.collection("dogs")
        await dogsCollection.insertMany([{name:"togo"}, {name:"fido"}, {name:"Tut", race:"dog"}])
        await dogsCollection.insertOne({name:"Fido2"})
        const allDogs = await dogsCollection.find({}).toArray()
        console.log(allDogs)
    } catch (err) {
        console.log(err)
    }
    finally {
        client.close()
        console.log()
        console.log("Closes")
    }
}
mongoTest();