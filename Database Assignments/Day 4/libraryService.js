const Author = require('./authorModel.js');
const Book = require('./bookModel.js');

// Create a new author
async function createAuthor(name, bio, age) {
  try {
    const author = new Author({ name, bio, age });
    const savedAuthor = await author.save();
    console.log('Author created:', savedAuthor);
    return savedAuthor;
  } catch (error) {
    console.error('Error creating author:', error);
  }
}

// Create a new book with a reference to an author
async function createBook(title, genre, pages, authorId) {
  try {
    const book = new Book({ title, genre, pages, author: authorId });
    const savedBook = await book.save();
    console.log('Book created:', savedBook);
    return savedBook;
  } catch (error) {
    console.error('Error creating book:', error);
  }
}

// Retrieve all books and populate author information
async function getBooksWithAuthors() {
  try {
    const books = await Book.find().populate('author');
    console.log('Books with author info:', books);
    return books;
  } catch (error) {
    console.error('Error retrieving books:', error);
  }
}

module.exports = { createAuthor, createBook, getBooksWithAuthors };