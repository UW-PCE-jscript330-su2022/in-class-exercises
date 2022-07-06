const express = require('express');
const app = express();

// curl http://localhost:3000/hello
app.get('/hello', (req, res) => {
  res.json({ text: "Hello World!" });
});

// The data that callers to our API will interact with
const cats = [
  {name: 'Garfield', id: '100'},
  {name: 'Maru', id: '432'}
]

// curl http://localhost:3000/cats
app.get('/cats', (req, res) => {
  res.json({data: cats})
})

// curl http://localhost:3000/cats/432
app.get('/cats/:id', (req, res) => {
  const theCat = cats.find(item => item.id == req.params.id)
  if(theCat){
    res.json(theCat)
  } else {
    res.status(404).json({error: "No cat found with that id"})
  }
})

// curl -X POST -H "Content-Type: application/json" -d '{"name":"goblin"}' http://localhost:3000/cats
app.post('/cats', (req, res) => {
  console.log("CREATING: ", req.body)
  let newCat = {...req.body, id: '890'}
  cats.push(newCat)
  res.json({cats: cats})
})

// curl -X PUT -H "Content-Type: application/json" -d '{"name":"maru"}' http://localhost:3000/cats/432
app.put('/cats/:id', (req, res) => {
  console.log("UPDATING: ", req.params.id, req.body)
  // TODO: implement this function
  res.json({cats: cats, message: "Updated"})
})

// curl -X DELETE http://localhost:3000/cats/100
app.delete('/cats/:id', (req, res) => {
  console.log("DELETING", req.params.id)
  // TODO: implement this function
  res.json({cats: cats, message: "Deleted"})
})

module.exports = app;