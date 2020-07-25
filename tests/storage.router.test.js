const chai = require('chai')
const assert = chai.assert;
const request = require('supertest');
const s3BucketDataService =  require("../services/s3bucket.data.service");
const sinon = require('sinon');
const app = require('../index');

describe('Unit testing /storage route', function() {
    var readObjectStub;
    beforeEach(function () {
        // Runs before each test in this block
        readObjectStub = sinon.stub(s3BucketDataService,"readObject");
    });
    afterEach(function () {
        // Runs after each test in this block
        readObjectStub.restore();
    });

    it('With valid request should return OK status', async function() {
        // Arrange
        let data = {bucketName :"bucketName"};

        // Stub and mock response 
        readObjectStub.returns(Promise.resolve(data));

        // Act
        return request(app)
        .get("/storage/key")
        .then(function(response){
            let responseBody = response.body;
            assert.deepEqual(data, responseBody);
        });
    });

    it('With error while calling read object sends error response', async function() {
        // Arrange
        let error =  new Error('Invalid object name');

        // Stub and mock response 
        readObjectStub.throws(error);

        // Act
        return request(app)
        .get("/storage/key")
        .then(function(response){
            let statusCode = response.status;
            assert.equal(statusCode, 500);
        });
    });

    it('With error while calling read object sends correct error message', async function() {
        // Arrange
        let message = 'Invalid object name';
        let error =  new Error(message);

        // Stub and mock response 
        readObjectStub.throws(error);

        // Act
        return request(app)
        .get("/storage/key")
        .then(function(response){
            let body = response.body;
            assert.equal(body.message, message);
        });
    });
});