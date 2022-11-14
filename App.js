const express = require('express')
const app = express()
const port = 3001
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://china:tPPnVwCdu6G42az@cluster0.xyjfdcf.mongodb.net/?retryWrites=true&w=majority";


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/db', (req, res)=>{
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  client.connect(err => {
    const collection = client.db("sample_mflix").collection("comments");
     const query = { name: 'Mercedes Tyler' };
     const comments = collection.findOne(query);
     res.send(comments);
  });
})

app.listen(port, () => {

console.log(`Example app listening on port ${port}`)
})

