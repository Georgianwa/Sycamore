const Product = require('./MDBproductModel.js');

// Insert a new product
async function insertProduct(name, price, category) {
  try {
    const product = new Product({ name, price, category });
    const savedProduct = await product.save();
    console.log('Product inserted:', savedProduct);
    return savedProduct;
  } catch (error) {
    console.error('Error inserting product:', error);
  }
}

// Retrieve all products
async function getAllProducts() {
  try {
    const products = await Product.find();
    console.log('All products:', products);
    return products;
  } catch (error) {
    console.error('Error retrieving products:', error);
  }
}

// Update a product's price
async function updateProductPrice(name, newPrice) {
  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { name },
      { price: newPrice },
      { new: true }
    );
    console.log('Product price updated:', updatedProduct);
    return updatedProduct;
  } catch (error) {
    console.error('Error updating product price:', error);
  }
}

// Delete a product by its name
async function deleteProductByName(name) {
  try {
    const deletedProduct = await Product.findOneAndDelete({ name });
    console.log('Product deleted:', deletedProduct);
    return deletedProduct;
  } catch (error) {
    console.error('Error deleting product:', error);
  }
}

module.exports = { insertProduct, getAllProducts, updateProductPrice, deleteProductByName };