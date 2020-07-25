const express = require('express');
const s3BucketDataService =  require("../services/s3bucket.data.service");
const router = express.Router();

/**
 * @desc Health check router
 * @param req - Request
 * @param res - Response
 * @Param next - Next Middleware Handler
 * @return object - Json Response
 */
router.get("/:id",(req, res, next) => {

    let key = req.params.id;
    let bucketName = "config.awsS3BucketName";

    // Read the file from AWS S3 Bucket 
    s3BucketDataService.readObject(bucketName,key)
    .then((data) => {
        // Success Response
        res.json(data);
    })
    .catch((error)=>{
        // Error While getting file from AWS S3 Bucket
        next(error);
    });
});

module.exports = router;