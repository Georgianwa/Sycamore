const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String },
  pages: { type: Number },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true }, // Reference to Author
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;