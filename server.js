const express = require('express');
const app = express();
const port = 3000;

// Define a route to render the template with GET parameters
app.get('/hello', (req, res) => {
  const name = req.query.name || 'world'; // Get the "name" parameter from the query string
  res.render('hello.ejs', { name }); // Pass the "name" parameter to the template
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});