/**
 * @desc Read Object from S3 Bucket
 * @param bucketName - Bucket Name
 * @param key - key of the object in bucket
 * @return object - response received from AWS
 */
exports.readObject = async function readObject(bucketName, key) {
    console.log(`Reading AWS s3 Bucket ${bucketName} with key ${key}`);

    // validate the received data
    if(!bucketName)
        throw new Error("Invalid bucket name") ;
    if(!key)
        throw new Error("Invalid key") ; 

    // create parameters needed
    let params = {
        Bucket: bucketName,
        Key: key,
        ResponseContentType: "application/json"
    };
    return params;
};
