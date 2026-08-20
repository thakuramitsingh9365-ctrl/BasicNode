const express = require("express");
const server = express();

const hostname = "127.0.0.1";
const port = 3000;

server.use(express.urlencoded({ extended: true }));

server.get("/", (req, res) => {
  res.send(`
     <form method="POST" action="/submit">   

     <label for="number">Num1:</label>
     <input type="number" id="number" name="number1"><br><br>
     <label for="number">Num2:</label>
     <input type="number" id="number" name="number2"><br><br>
     <button name="option" value="add" type="submit">Add</button>
     <button name="option" value="sub" type="submit">Sub</button>

     </form>
   `);
});

server.post("/submit", (req, res) => {
  let { number1, number2, option } = req.body;

  console.log(number1, number2, option);
  let result = 0;
  number1 = Number(number1);
  number2 = Number(number2);
  if (option == "add") {
    result = number1 + number2;
  }
  if (option == "sub") {
    result = number1 - number2;
  }
  const sum = number1 * 1 + number2 * 1;
  const output = {
    a: number1,
    b: number2,
    Answer: result,
  };
  res.send(JSON.stringify(output));
  //  res.send(req.body);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
