const express = require("express");
const app = express();
const port = 3000;
 
const products = [
  { name: "Product1", price: 10},
  { name: "Product2", price: 20},
  { name: "Product3", price: 30}
 ];

app.get("/",(req,res)=>{
  res.render("products.ejs", {products});
});

app.listen(port, ()=>{
  console.log(`Server running at http://localhost:${port}`);
});