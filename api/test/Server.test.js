let expect = require('chai').expect;
let request = require('request');

//test if the server status renders correctly
describe("Server status", () => { 
    it('status', function(completed) {
        request('http://localhost:3000/', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            completed();
        })
    })
})