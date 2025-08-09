const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = "mongodb+srv://root:Tamradhwaj%403@cluster0.lxwzmmv.mongodb.net/airbnb?retryWrites=true&w=majority&appName=Cluster0";

let _db;

const MongoConnect = (callback) => {
MongoClient.connect(url)
.then(client => {
    console.log(client);
    _db = client.db("airbnb");
    callback(); 
})
.catch(err => {
    console.error("Failed to connect to MongoDB", err);
});
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw new Error("No database found!");
}

exports.MongoConnect = MongoConnect;
exports.getDb = getDb;