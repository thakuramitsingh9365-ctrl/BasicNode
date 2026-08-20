const express = require("express");
const server = express();
const hostname = "127.0.0.1";
const port = 3000;

server.use(express.urlencoded({ extended: true }));

server.get("/", (req, res) => {
  res.send(`
    <form method="POST" action="/submit">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name"><br><br>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email"><br><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

server.post("/submit", (req, res) => {
  const { name, email } = req.body;
  res.send(`Name: ${name}, Email: ${email}`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});