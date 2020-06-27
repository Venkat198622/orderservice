var express = require("express");
var app = express();

app.post("/replyComment", (req, res) => {
    console.log(req.body);
    var myData = new ReplyComment(req.body);
    myData.save()
        .then(item => {
            res.send("Replyed to the comment successfully.");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});