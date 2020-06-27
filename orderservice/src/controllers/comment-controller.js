Comment = require('../models/commentModel');
 
exports.get = function (req, res) {
    Comment.get(function (err, comments) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "comments retrieved successfully",
            data: comments
        });
    });
};
// Handle create comments actions
exports.post = function (req, res) {
    var comments = new Comment();
    comments.commentId = req.body.commentId ? req.body.commentId : Comment.commentId;
    comments.commentDetails = req.body.commentDetails;
    comments.orderId = req.body.orderId;
    comments.userId = req.body.userId;
// save the comments and check for errors
    comments.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'New comments created!',
                data: comments
            });
    });
};
 
 