let expect = require("chai").expect
let request = require("request")
describe("Color Code Converter API ", function () {
  describe("RGB to HEX conversion  ", function () {
    const url = "http://localhost:3500/rgbtohex?red=255&green=255&blue=255"
    it("return status 200", function (done) {
      request(url, function (error, response, body) {
        expect(response.statusCode).to.equal(200)
        done()
      })
    })
    it("return s color in hex", function (done) {
      request(url, function (error, response, body) {
        expect(body).to.equal("ffffff")
        done()
      })
    })
  })
  describe("HEX to RGB conversion", function () {
    const url = "http://localhost:3500/hextorgb?hex=00ff00"
    it("return status 200", function (done) {
      request(url, function (error, response, body) {
        expect(response.statusCode).to.equal(200)
        done()
      })
    })
    it("return color in rgb", function (done) {
      request(url, function (error, response, body) {
        expect(body).to.equal("[0,255,0]")
        done()
      })
    })
  })
})
