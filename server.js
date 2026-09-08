const mysql = require('mysql2');
const express = require('express');
const app = express();
const port = 3000;







const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '1234',
  database: 'node'
});
connection.connect();









app.get('/select', (req, res) => {

  res.send("select");
});
app.get('/delete', (req, res) => {

  res.send("delete");
});
app.get('/update', (req, res) => {
  console.log(req.query);
  const { bookname, author, genre ,id} = req.query;
  console.log(req.query);
  const sql = 'update  books set bookname=?, author=?, genre=? where id=?';
 result= connection.query(sql,[bookname,author,genre,id]);
 console.log(result);

  res.send("update");
});
//************************************************************* */
app.get('/insert', (req, res) => {


  const { bookname, author, genre } = req.query;
  console.log(req.query);
  const sql = 'INSERT INTO books (bookname, author, genre) VALUES (?, ?, ?)';
  connection.query(sql, [bookname, author, genre], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send({
      id: result.insertId, booknamecls
      , author, genre
    });
  })
}

  
);
//********************************************************************* */

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});