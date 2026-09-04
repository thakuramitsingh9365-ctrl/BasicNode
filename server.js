const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

 app.use(express.urlencoded({ extended: true }));

 app.use(express.static('public'));

 const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'registration'
});

 connection.connect((error) => {
    if (error) {
        console.log('MySQL connection failed:', error);
        return;
    }

    console.log('Connected to MySQL');
});

 app.post('/register', (req, res) => {

    console.log("Form Data:", req.body);

    const { name, email, password, confirm, mobile, date, file } = req.body;

    if (password !== confirm) {
        return res.send('Password and Confirm Password do not match');
    }

    const sql = `
        INSERT INTO users (name, email, password, mobile, date, file)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    const values = [name, email, password, mobile, date, file];

    connection.query(sql, values, (error, result) => {

        if (error) {
            console.log("Database Error:", error);
            return res.send('Data save nahi hua');
        }

        console.log("Data inserted successfully");

        res.send('Registration Successful!');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});