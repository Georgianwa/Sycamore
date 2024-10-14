const connectDB = require('./db'); // Assuming db.js contains your MongoDB connection
const { createAuthor, createBook, getBooksWithAuthors } = require('./libraryService');

async function testLibraryFunctions() {
  await connectDB();

  // Create an author
  const author = await createAuthor('George Orwell', 'British novelist', 46);

  // Create a book associated with the author
  if (author) {
    await createBook('1984', 'Dystopian', 328, author._id);
    await createBook('Animal Farm', 'Satire', 112, author._id);
  }

  // Retrieve all books with populated author info
  await getBooksWithAuthors();
}

testLibraryFunctions();