const express = require("express");
const server = express();
const hostname = "127.0.0.1";
const port = 3000;
server.get("/", (req, res) => {
  const queryObject = req.query;
  console.log(queryObject.a);
  let props=Object.getOwnPropertyNames(queryObject);
  console.log(props);
  props.forEach(element => {
    console.log(element);
    console.log(queryObject[element]);
  });
  res.setHeader("Content-Type", "application/json");

  res.send(JSON.stringify(queryObject));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});