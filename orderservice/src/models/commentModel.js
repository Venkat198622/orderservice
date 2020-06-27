 
var mongoose = require('mongoose');
// Setup schema


var  commentSchema = new mongoose.Schema({
    commentId: Number,
    commentDetails: String,
    orderId: Number,
    userId: Number
});
// Export Comments model
var Comments = module.exports = mongoose.model('comments', commentSchema);
module.exports.get = function (callback, limit) {
    Comments.find(callback).limit(limit);
}