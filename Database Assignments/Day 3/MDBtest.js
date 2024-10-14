const connectDB = require('./db');
const { insertProduct, getAllProducts, updateProductPrice, deleteProductByName } = require('./productService');

async function testFunctions() {
  await connectDB();

  // Insert a new product
  const newProduct = await insertProduct('Smartphone', 599.99, 'Electronics');

  // Retrieve all products
  await getAllProducts();

  // Update the price of a product
  if (newProduct) {
    await updateProductPrice('Smartphone', 649.99);
  }

  // Delete a product by name
  await deleteProductByName('Smartphone');
}

testFunctions();