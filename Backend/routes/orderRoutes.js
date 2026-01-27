const express = require('express');
const router = express.Router();
const { 
  createOrder, 
  getAllOrders, 
  getUserOrders,
  updateOrderStatus,
  cancelOrder
} = require('../controllers/orderController');
const { isauth, isuser, isadmin } = require('../middleware/auth');

router.post('/', isauth, isuser, createOrder);
router.get('/all', isauth, isadmin, getAllOrders);
router.get('/my-orders', isauth, isuser, getUserOrders);
router.put('/:id/status', isauth, isadmin, updateOrderStatus);
router.put('/:id/cancel', isauth, cancelOrder);

module.exports = router;