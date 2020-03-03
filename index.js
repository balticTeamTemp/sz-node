const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/hello', function (req, res) {
  return res.status(200).send("hello")
})

app.listen(8080)
