const express = require('express')
const app = express()
const port = 3001
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://china:XcvwPz3UVM97q4t@cluster0.xyjfdcf.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
client.connect();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/db', async (req, res)=>{
  
  const collection = client.db("sample_mflix").collection("comments");
   const query = { name: 'Mercedes Tyler' };
   const comments = await collection.findOne(query);
   res.set({ 'Access-Control-Expose-Headers': '*', 'Access-Control-Allow-Origin': '*'});
   res.send(comments);
})

app.post('/comments', async (req, res) => {
  const {name} = req.body;
  await collection.insert()
  res.send('insert comment!');
});

app.put('/comments/:id/comments', async (req, res) => {
  const {id} = req.params.id;
  await collection.findOneAndUpdate()
  res.send(`update comment ${id}`);
});

app.delete('/comments/:id/', async (req, res) => {
  const {id} = req.params.id;
  await collection.deleteOne()
  res.send(`delete comment ${id}`);
});



app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})

