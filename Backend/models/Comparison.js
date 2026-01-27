const mongoose = require('mongoose');

const comparisonSchema = new mongoose.Schema({
  comparisonId: { type: String, required: true, unique: true },
  car1Id: { type: String, required: true },
  car2Id: { type: String, required: true },
  car1Details: { type: Object },
  car2Details: { type: Object },
  status: { type: String, enum: ['active', 'deleted'], default: 'active' }
}, { timestamps: true });

module.exports = mongoose.model('Comparison', comparisonSchema);