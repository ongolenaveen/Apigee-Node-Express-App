const chai = require('chai')
const should = chai.should();
const assert = chai.assert;
const expect = chai.expect;
chai.use(require('chai-as-promised'))
const s3BucketDataService = require('../services/s3bucket.data.service');

describe("S3 Bukcket Data Service Tests", function(){

    it("readObject with undefined bucket name returns error", async function(){
        await expect(s3BucketDataService.readObject(undefined,"validkey")).to.be.rejectedWith(Error);
    });

    it("readObject with null bucket name returns error", async function(){
        await expect(s3BucketDataService.readObject(null,"validkey")).to.be.rejectedWith(Error);
    });

    it("readObject with undefined key returns error", async function(){
        await expect(s3BucketDataService.readObject("bucketname",undefined)).to.be.rejectedWith(Error);
    });

    it("readObject with null key returns error", async function(){
        await expect(s3BucketDataService.readObject("bucketname",null)).to.be.rejectedWith(Error);
    });
});
