const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const PORT = 3000;

const server = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "node",
  password: "1234",
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.render(`student.ejs`, {});
});

app.get("/test", (req, res) => {
  server.connect();
  let error = "";
  let results = "";

  console.log(server);

  const { name, email, password, mobile, cmd } = req.query;

  if (cmd == "update") {

    res.send("Write update code");

  } else 
     if (cmd == "insert") {

    res.send("write insert code");

    server.query(`INSERT INTO details  VALUES ('${name}', '${email}', '${password}', '${mobile}')`,(error, results));

  } else 
     if (cmd == "delete") {

    res.send("Deleted success");
    server.query(`DELETE FROM details WHERE email = '${email}' `,(error,results));

  } else
    if(cmd == "show") {
      res.send(`select * from details`,(error,results));
    // } res.send(cmd);
  // res.json({message :'data insert success'});
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
