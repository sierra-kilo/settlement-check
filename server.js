// server

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.listen(PORT, function() {
  console.log('you are listening to port', PORT)
})
