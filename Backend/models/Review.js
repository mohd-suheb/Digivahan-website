const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  reviewId: { type: String, required: true, unique: true },
  customerId: { type: String, required: true },
  customerName: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  review: { type: String, required: true },
  category: { type: String, enum: ['positive', 'average', 'negative'] },
  reply: { type: String },
  status: { type: String, enum: ['pending', 'replied'], default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);