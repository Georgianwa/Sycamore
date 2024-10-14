const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: { type: String },
  age: { type: Number },
});

// Middleware to log whenever an author is added
authorSchema.pre('save', function (next) {
  console.log(`New author "${this.name}" is being added.`);
  next();
});

const Author = mongoose.model('Author', authorSchema);
module.exports = Author;