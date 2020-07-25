const assert = require('assert');
const request = require('supertest');
const app = require('../index');

describe('Unit testing /healthcheck route', function() {

    before(function () {
        // runs once before the first test in this block
        console.log("before executing all test cases...");
      });
    
      after(function () {
        // runs once after the last test in this block
        console.log("after executing all test cases...");
      });
    
      beforeEach(function () {
        // runs before each test in this block
        console.log("before executing test case...");
      });
    
      afterEach(function () {
        // runs after each test in this block
        console.log("after executing test case...");
      });

    it('should return OK status', function() {
      return request(app)
        .get('/healthcheck')
        .then(function(response){
            assert.equal(response.status, 200)
        })
    });
    
    it('should return correct response', function(){
        return request(app)
        .get("/healthcheck")
        .then(function(response){
            let responseBody = response.body;
            assert.deepEqual({ message: 'Hi Naveen!' }, responseBody);
        });
    });
});