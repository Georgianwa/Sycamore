const { insertProduct, updateProductPrice, deleteProductById } = require('./productService');

async function testFunctions() {
  // Insert a new product
  const newProduct = await insertProduct('Laptop', 'High-performance laptop', 1200.00);
  
  // Update the price of the inserted product
  if (newProduct) {
    const updatedProduct = await updateProductPrice(newProduct.id, 1300.00);
  }

  // Delete the product by id
  if (newProduct) {
    await deleteProductById(newProduct.id);
  }
}

testFunctions();