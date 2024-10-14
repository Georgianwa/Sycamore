const pool = require('./database.js');

// Insert a new product
async function insertProduct(name, description, price) {
  try {
    const query = `
      INSERT INTO products (name, description, price)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const result = await pool.query(query, [name, description, price]);
    console.log('Product inserted:', result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error('Error inserting product:', error);
  }
}

const pool = require('./db');

// Insert a new product
async function insertProduct(name, description, price) {
  try {
    const query = `
      INSERT INTO products (name, description, price)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const result = await pool.query(query, [name, description, price]);
    console.log('Product inserted:', result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error('Error inserting product:', error);
  }
}

// Update the price of a product based on the id
async function updateProductPrice(id, newPrice) {
  try {
    const query = `
      UPDATE products
      SET price = $1
      WHERE id = $2
      RETURNING *;
    `;
    const result = await pool.query(query, [newPrice, id]);
    console.log('Product price updated:', result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error('Error updating product price:', error);
  }
}

// Delete a product by id
async function deleteProductById(id) {
  try {
    const query = `
      DELETE FROM products
      WHERE id = $1
      RETURNING *;
    `;
    const result = await pool.query(query, [id]);
    console.log('Product deleted:', result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error('Error deleting product:', error);
  }
}

module.exports = { insertProduct, updateProductPrice, deleteProductById };
async function updateProductPrice(id, newPrice) {
  try {
    const query = `
      UPDATE products
      SET price = $1
      WHERE id = $2
      RETURNING *;
    `;
    const result = await pool.query(query, [newPrice, id]);
    console.log('Product price updated:', result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error('Error updating product price:', error);
  }
}

// Delete a product by id
async function deleteProductById(id) {
  try {
    const query = `
      DELETE FROM products
      WHERE id = $1
      RETURNING *;
    `;
    const result = await pool.query(query, [id]);
    console.log('Product deleted:', result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error('Error deleting product:', error);
  }
}

module.exports = { insertProduct, updateProductPrice, deleteProductById };