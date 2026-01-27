const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  reportId: { type: String, required: true, unique: true },
  reportedUserId: { type: String, required: true },
  reportedUserName: { type: String, required: true },
  reportedBy: { type: String, required: true },
  reportType: { 
    type: String, 
    enum: ['Harassment', 'Fake Profile', 'Fraud', 'Abuse', 'Other']
  },
  message: { type: String, required: true },
  screenshot: { type: String },
  status: { type: String, enum: ['pending', 'reviewed', 'resolved'], default: 'pending' },
  actionTaken: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Report', reportSchema);