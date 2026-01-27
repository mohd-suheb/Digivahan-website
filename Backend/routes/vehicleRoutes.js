const express = require('express');
const router = express.Router();
const { 
  addVehicle, 
  getAllVehicles, 
  getVehicleById, 
  updateVehicle, 
  deleteVehicle 
} = require('../controllers/vehicleController');
const { isauth, isuser } = require('../middleware/auth');

router.post('/', isauth, isuser, addVehicle);
router.get('/', isauth, isuser, getAllVehicles);
router.get('/:id', isauth, getVehicleById);
router.put('/:id', isauth, isuser, updateVehicle);
router.delete('/:id', isauth, isuser, deleteVehicle);

module.exports = router;