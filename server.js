const express = require('express');
const app = express();
const port = 3000;

 // Define the list of products
const products = [
  { name: 'Product 1', price: 10, brand: 'india', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Coca_Cola_Flasche_-_Original_Taste.jpg/250px-Coca_Cola_Flasche_-_Original_Taste.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail' },
  { name: 'Product 2', price: 20, brand: 'America' },
  { name: 'Product 3', price: 30,  brand: 'Japan'},
  { name: 'Product 4', price: 40, brand: 'Dubai'},
];

// Define a route to render the products page
app.get('/', (req, res) => {
  // Render the products page using EJS
  res.render('products.ejs', { products });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});