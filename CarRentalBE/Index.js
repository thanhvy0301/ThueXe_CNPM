/*app.use(express.json());
app.use('/api/locations', locations);
app.use('/api/companies', companies);
const port = 3000;
app.listen(port);

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Tandiep:<password>@mongodb-carrental.f1yco.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  client.close();
});*/
const fs = require('fs');
const http = require('http');
const https = require('https');
const privateKey  = fs.readFileSync('certificates/key.pem', 'utf8');
const certificate = fs.readFileSync('certificates/cert.pem', 'utf8');
var credentials = {key: privateKey, cert: certificate};
const express = require('express');
const mongo = require('./mongo');
const router = express.Router();
const app = express();
app.use(express.json());
const connectToMongoDB = async() => {
    await mongo().then((mongoose)=>{
        try{
            console.log('Connected to mongodb!');
        } finally {
            mongoose.connection.close();
        }
    });}
connectToMongoDB();
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
httpServer.listen(8080);
httpServer.listen(8443);