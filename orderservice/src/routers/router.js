 
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
         
    });
});

  
// Import comment controller
var commentController = require('../controllers/comment-controller');
// comment routes
router.route('/getAllComments')
.get(commentController.get);
router.route('/postComment')
.post(commentController.post);
router.route('/replyComment')
.post(commentController.post);
 
// Export API routes
module.exports = router;