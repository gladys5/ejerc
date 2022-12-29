const express = require("express")
const app = express()
const converter = require("./converter")

app.get("/rgbtohex", function (req, res) {
  const red = parseInt(req.query.red, 10)
  const green = parseInt(req.query.green, 10)
  const blue = parseInt(req.query.blue, 10)
  const hex = converter.rgbtohex(red, green, blue)
  res.send(hex)
})
app.get("/hextorgb", function (req, res) {
  const hex = req.query.hex
  const rgb = converter.hextorgb(hex)
  res.send(JSON.stringify(rgb))
})
app.listen(3500)
