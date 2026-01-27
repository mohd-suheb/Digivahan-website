const express = require('express');
const router = express.Router();
const { 
  addComparison, 
  getAllComparisons, 
  getComparisonById,
  updateComparison,
  deleteComparison
} = require('../controllers/comparisonController');
const { isauth, isadmin } = require('../middleware/auth');

router.post('/', isauth, isadmin, addComparison);
router.get('/', getAllComparisons);
router.get('/:id', getComparisonById);
router.put('/:id', isauth, isadmin, updateComparison);
router.delete('/:id', isauth, isadmin, deleteComparison);

module.exports = router;