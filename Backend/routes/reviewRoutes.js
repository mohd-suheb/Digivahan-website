const express = require('express');
const router = express.Router();
const { 
  addReview, 
  getAllReviews, 
  replyReview
} = require('../controllers/reviewController');
const { isauth, isadmin } = require('../middleware/auth');

router.post('/', isauth, addReview);
router.get('/', isauth, isadmin, getAllReviews);
router.put('/:id/reply', isauth, isadmin, replyReview);

module.exports = router;