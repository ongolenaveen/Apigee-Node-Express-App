const assert = require('assert');
const request = require('supertest');
const app = require('../index');

describe("Unit testing App with invalid route", function(){
    it("should return NotFound status", function(){
        return request(app)
        .get("/invalidroute")
        .then(function(response){
            let responseStatus = response.status;
            assert.equal(responseStatus, 404);
        });
    });

    it('should return NotFound response with body', function(){
        return request(app)
        .get("/invalidroute")
        .then(function(response){
            let responseBody = response.body;
            assert.deepEqual({ message: 'End point not found' }, responseBody);
        });
    });
});