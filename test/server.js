var http = require('http');
var should = require("should");
var request = require('request')

describe('convert values(http request)', function() {
    describe('unicode value should return character(http request)', function() {
        var url = "http://localhost:3000/unicodeToChar?num=65"
        it("should return status 200", function(done) {
            request(url, function(error, response, body) {
                if (error) console.log(error);
                    (response.statusCode).should.be.equal(200)
                done()
            })

        });
        it("65 should return \'A\'", function(done) {
            request(url, function(error, response, body) {
                if (error){ console.log(error)}
                    (body).should.be.equal('A')
                done()
            })
        });
    });

    describe('character should return unicode value(http request)', function() {
        var url = "http://localhost:3000/charToUnicode?char=A"
        it("should return status 200", function(done) {
            request(url, function(error, response, body) {
                if (error) {console.log(error)}
                    (response.statusCode).should.be.equal(200)
                  done()
            })
        });
        it("\'A\' should return 65 ", function(done) {
            request(url, function(error, response, body) {
                if (error) console.log(error)
                    (body).should.equal(65)
                done()
            })
        })
    })
})
