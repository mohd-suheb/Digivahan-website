const express = require('express');
const router = express.Router();
const { 
  addQuery, 
  getAllQueries, 
  replyQuery,
  resolveQuery
} = require('../controllers/queryController');
const { isauth, isadmin } = require('../middleware/auth');

router.post('/', addQuery);
router.get('/', isauth, isadmin, getAllQueries);
router.put('/:id/reply', isauth, isadmin, replyQuery);
router.put('/:id/resolve', isauth, isadmin, resolveQuery);

module.exports = router;