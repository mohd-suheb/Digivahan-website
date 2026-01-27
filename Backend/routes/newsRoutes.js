const express = require('express');
const router = express.Router();
const { 
  addNews, 
  getAllNews, 
  updateNews,
  deleteNews
} = require('../controllers/newsController');
const { isauth, isadmin } = require('../middleware/auth');

router.post('/', isauth, isadmin, addNews);
router.get('/', getAllNews);
router.put('/:id', isauth, isadmin, updateNews);
router.delete('/:id', isauth, isadmin, deleteNews);

module.exports = router;