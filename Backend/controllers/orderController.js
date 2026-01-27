const Order = require('../models/Order');

// Create Order
exports.createOrder = async (req, res) => {
  try {
    const orderId = `ORD-${Date.now()}`;
    
    const order = await Order.create({
      ...req.body,
      orderId,
      userId: req.user.id
    });

    return res.status(201).json({
      success: true,
      message: "Order created successfully",
      order
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Error creating order", 
      error: error.message 
    });
  }
};

// Get All Orders (Admin)
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('userId', 'firstname lastname email');

    return res.status(200).json({
      success: true,
      count: orders.length,
      orders
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Error fetching orders" 
    });
  }
};

// Get User Orders
exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id });

    return res.status(200).json({
      success: true,
      count: orders.length,
      orders
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Error fetching orders" 
    });
  }
};

// Update Order Status
exports.updateOrderStatus = async (req, res) => {
  try {
    const { status, qrAssigned, trackingLink } = req.body;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { 
        status, 
        qrAssigned, 
        trackingLink,
        processedDate: status === 'processed' ? Date.now() : null
      },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ 
        success: false, 
        message: "Order not found" 
      });
    }

    return res.status(200).json({
      success: true,
      message: "Order updated successfully",
      order
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Error updating order" 
    });
  }
};

// Cancel Order
exports.cancelOrder = async (req, res) => {
  try {
    const { cancellationReason } = req.body;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { 
        status: 'cancelled',
        cancellationReason
      },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ 
        success: false, 
        message: "Order not found" 
      });
    }

    return res.status(200).json({
      success: true,
      message: "Order cancelled successfully",
      order
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Error cancelling order" 
    });
  }
};