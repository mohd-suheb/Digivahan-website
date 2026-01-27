const mongoose = require('mongoose');

const querySchema = new mongoose.Schema({
  queryId: { type: String, required: true, unique: true },
  customerId: { type: String, required: true },
  customerName: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  category: { 
    type: String, 
    enum: [
      'General Information', 'Technical', 'Account Related', 
      'Payment/Billing', 'Order/Service Status', 'Complaint',
      'Feedback', 'Cancellation/Return', 'Escalation', 
      'Onboarding', 'Subscription', 'Verification'
    ]
  },
  question: { type: String, required: true },
  reply: { type: String },
  status: { type: String, enum: ['pending', 'replied', 'resolved'], default: 'pending' },
  priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' }
}, { timestamps: true });

module.exports = mongoose.model('Query', querySchema);