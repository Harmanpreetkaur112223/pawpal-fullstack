const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User is required'],
  },
  dog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Dog', 
    required: [true, 'Dog is required'],
  },
  amount: {
    type: Number,
    required: [true, 'Payment amount is required'],
    min: [0, 'Amount cannot be negative'],
  },
//   currency: {
//     type: String,
//     required: [true, 'Currency is required'],
//     enum: ['USD', 'EUR', 'GBP'], 
//     default: 'USD',
//   },
  paymentMethod: {
    type: String,
    required: [true, 'Payment method is required'],
    enum: ['Credit Card', 'PayPal', 'Stripe', 'Bank Transfer'],
  },
  paymentStatus: {
    type: String,
    required: [true, 'Payment status is required'],
    enum: ['Pending', 'Completed', 'Failed', 'Refunded'],
    default: 'Pending',
  },
  transactionId: {
    type: String,
    trim: true,
    required: false,
  },
  description: {
    type: String,
    trim: true,
    maxLength: [200, 'Description cannot exceed 200 characters'],
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: { updatedAt: 'updatedAt' }, 
});


const Payment = mongoose.model('Payment ' , paymentSchema)
 module.exports = Payment