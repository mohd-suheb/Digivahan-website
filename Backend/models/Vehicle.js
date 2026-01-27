const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  vehicleNumber: { type: String, required: true, unique: true },
  ownerName: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  qrCode: { type: String, unique: true },
  rcDocument: { type: String },
  insuranceDocument: { type: String },
  pucDocument: { type: String },
  insuranceExpiry: { type: Date },
  pucExpiry: { type: Date },
  vehicleType: { type: String, enum: ['car', 'bike', 'commercial'], required: true },
  status: { type: String, enum: ['active', 'blocked'], default: 'active' }
}, { timestamps: true });

module.exports = mongoose.model('Vehicle', vehicleSchema);