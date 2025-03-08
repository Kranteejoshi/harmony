const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true, // Store usernames in lowercase for consistency
    match: /^[a-z0-9_.]+$/ // Example regex: letters, numbers, underscores, and dots
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other', 'Prefer not to say'], // Optional enum for gender
  },
  dateOfBirth: {
    type: Date,
  },
  address: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Basic email validation regex
  },
  phoneNumber: {
    type: String,
    trim: true,
    match: /^[+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im // Basic phone number validation.
  },
  password: {
    type: String,
    required: true,
    minlength: 8, // Minimum password length
  },
  avatar: {
    type: String, // Store the URL or path to the avatar image
    default: null, // or a default image URL
  },
  bio: {
    type: String,
    maxlength: 250, // Example bio length limit
    trim: true,
  },
  createdAt: {
      type: Date,
      default: Date.now,
  },
  updatedAt: {
      type: Date,
      default: Date.now,
  },
  // Add other fields like followers, following, posts, etc. as needed.
});

// Pre-save middleware to update updatedAt
userSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;