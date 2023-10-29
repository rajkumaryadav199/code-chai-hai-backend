require('dotenv').config();
const express = require('express');
const app = express();
const port=process.env.PORT || 8888;
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/twitter",(req, res) => {
    res.send("<h1> happy to see you Raj to start your carrier in Backend</h1>")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})