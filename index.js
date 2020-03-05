const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('dotenv').config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/hello', function (req, res) {
  return res.status(200).send('hello')
})

app.post('/webhook/inbound', (req, res) => {
  const params = Object.assign(req.query, req.body)
  console.log(params)
  res.status(204).send()
})

app.post('/call/events', (req, res) => {
  const params = Object.assign(req.query, req.body)
  console.log(params)
  res.status(204).send()
})

app.post('/call/answer', (req, res) => {
  const params = Object.assign(req.query, req.body)
  console.log(params)
  res.status(204).send()
})

app.get('/call/tts', function (req, res) {
  console.log(req.query)
  return res.status(304).send([
    {
      action: 'talk',
      voiceName: 'Russell',
      text: 'Thank you fusion operate'
    }
  ])
})

app.listen(process.env.PORT, () => {
  console.log(`Starting app on port ${process.env.PORT}`)
})
