const {MongoClient} = require("mongodb");

const url = "mongodb+srv://meenakshi11:2DiLFb06IJmJETEp@cluster0.b6sd7wx.mongodb.net/eCommerce?retryWrites=true&w=majority";

const client = new MongoClient(url);
const findAllFromDb = async (query,collectionName,queryData) => {
    try {
        await client.connect();
       // console.log("Connection to db is successful")
        const database = client.db("eCommerce");
        const collection = database.collection(collectionName)
        const dbResponse = await collection.find(query).sort(queryData).toArray();
        // console.log("db res",dbResponse)
       
        return dbResponse;
        
    } catch (error) {
        return error.message;
    }
   
}
module.exports = {findAllFromDb };