const express = require('express');
const queryParser = require('express-query-parser');
const bodyParser = require('body-parser');
const config = require('./config').get();
const apiRoutes = require('./routers/router');
const log    = require('./log');
let app = express();
var mongoose = require("mongoose");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoDbConnection, { useNewUrlParser: true});
var db = mongoose.connection;
if(!db)
  console.log("Error connecting db")
else
  console.log("Db connected successfully")

// Use Api routes in the App
app.use('/api', apiRoutes);
// Launch app to listen to specified port
app.listen(config.serverPort, function () {
  console.log("Running API on port " + config.serverPort);
});