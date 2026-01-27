const mongoose = require('mongoose');

const trendingCarSchema = new mongoose.Schema({
  trendingCarId: { type: String, required: true, unique: true },
  brandName: { type: String, required: true },
  modelName: { type: String, required: true },
  type: { type: String, enum: ['sedan', 'suv', 'hatchback', 'sports'] },
  price: { type: String },
  priceDisplay: { type: String },
  mileage: { type: String },
  topSpeed: { type: String },
  imageUrl: { type: String },
  engine: { type: String },
  transmission: { type: String },
  tankCapacity: { type: String },
  seatHeight: { type: String },
  weight: { type: String },
  maxPower: { type: String },
  torque: { type: String },
  ridingModes: { type: String },
  gearPattern: { type: String },
  bootspace: { type: String },
  groundClearance: { type: String },
  length: { type: String },
  width: { type: String },
  height: { type: String },
  features: {
    abs: { type: Boolean, default: false },
    airbags: { type: Boolean, default: false },
    bluetooth: { type: Boolean, default: false },
    cruiseControl: { type: Boolean, default: false },
    parkingSensors: { type: Boolean, default: false },
    sunroof: { type: Boolean, default: false }
  }
}, { timestamps: true });

module.exports = mongoose.model('TrendingCar', trendingCarSchema);