const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  orderName: { type: String, required: true },
  ownerName: { type: String, required: true },
  vehicleNumber: { type: String, required: true },
  qrAssigned: { type: String },
  status: { 
    type: String, 
    enum: ['pending', 'processed', 'cancelled', 'delivered'], 
    default: 'pending' 
  },
  processedDate: { type: Date },
  trackingLink: { type: String },
  cancellationReason: { type: String },
  orderDate: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);