const mysql = require('mysql2');
const ejs = require('ejs');
const fs = require('fs');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '1234',
  database: 'node'
});


// Connect to the MySQL server
connection.connect((error) => {
  if (error) throw error;
  console.log('Connected to MySQL server');
  
  // Query the table
  connection.query('SELECT * FROM data', (error, results) => {
    if (error) throw error;
    
    // Read the EJS template file
    fs.readFile('views/template.ejs', 'utf8', (error, template) => {
      if (error) throw error;
      
      // Render the EJS template with data from the MySQL table
      const html = ejs.render(template, { data: results });
      
      // Save the rendered HTML to a file
      fs.writeFile('output.html', html, 'utf8', (error) => {
        if (error) throw error;
        console.log('HTML file generated successfully');
        
        // Close the MySQL connection
        connection.end((error) => {
          if (error) throw error;
          console.log('Disconnected from MySQL server');
        });
      });
    });
  });
});