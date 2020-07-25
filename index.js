const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const healthCheckRouter = require("./routes/healthcheck.router");
const storageRouter =  require("./routes/storage.router");

// Create Express App
const app = express();

// Use Media Formatters
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Register Routes and Route Handlers
app.use('/healthcheck', healthCheckRouter);
app.use('/storage',storageRouter);

// Start the server
var server = app.listen(process.env.PORT || 9000, function() {
    console.log('Listening on port %d', server.address().port)
})

// Route not found Handler
app.use(function (req, res, next) {
    res.status(404).json({
        message:"End point not found"
    });
  });
  
// Exception Handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err
    });
});

// Export the Express App
module.exports = app