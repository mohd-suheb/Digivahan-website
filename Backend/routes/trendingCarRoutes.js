const express = require('express');
const router = express.Router();
const { 
  addTrendingCar, 
  getAllTrendingCars, 
  getTrendingCarById,
  updateTrendingCar,
  deleteTrendingCar
} = require('../controllers/trendingCarController');
const { isauth, isadmin } = require('../middleware/auth');

router.post('/', isauth, isadmin, addTrendingCar);
router.get('/', getAllTrendingCars);
router.get('/:id', getTrendingCarById);
router.put('/:id', isauth, isadmin, updateTrendingCar);
router.delete('/:id', isauth, isadmin, deleteTrendingCar);

module.exports = router;