const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  newsId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String },
  author: { type: String },
  publishedAt: { type: Date, default: Date.now },
  url: { type: String },
  status: { type: String, enum: ['active', 'deleted'], default: 'active' }
}, { timestamps: true });

module.exports = mongoose.model('News', newsSchema);