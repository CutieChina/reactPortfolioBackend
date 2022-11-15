const express = require('express')
const app = express()
const port = 3001
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://china:XcvwPz3UVM97q4t@cluster0.xyjfdcf.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/db', async (req, res)=>{
  await client.connect();
  const collection = client.db("sample_mflix").collection("comments");
   const query = { name: 'Mercedes Tyler' };
   const comments = await collection.findOne(query);
   res.send(comments);
})

app.listen(port, () => {

console.log(`Example app listening on port ${port}`)
})

