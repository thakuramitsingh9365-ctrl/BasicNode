const express = require("express");
 const server = express();
 const hostname="127.0.0.1";
 const port = 3000;

 server.use(express.urlencoded({ extended: true }));

 server.get("/",(req,res)=>{
    res.send(`
        <form method="POST" action="/submit">
          
        <label for="first">First Name:</label>
        <input type="text" id="first" name="firstname"><br><br>
        <label for="last">Last Name:</label>
        <input type="text" id="last" name="lastname"><br><br>
        <label for="email">Email:</label>
        <input type="text" id="email" name="email"><br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password"><br><br>
        <label for="retype">Re-type Password:</label>
        <input type="password" id="retype" name="retype"><br><br>
        <label for="contact">Contact:</label>
        <input type="number" id="contact" name="contact"><br><br>

        <label>Gender:</label>
        <select name="select">
          <option>Male</option>
          <option>Female</option>
        </select>

        <button name="option">submit</button>
        </form>
        `);
 });

 server.post("/submit",(req,res)=>{
     let {firstname,lastname,email,password,retype,contact} = req.body;

     console.log(firstname,lastname,email,password,retype,contact);
     let result=0;

     const output = {
        a: firstname,
        b: lastname,
        c: email,
        d: password,
        e: retype,
        f: contact,
     };
     res.send(JSON.stringify(output));
 });

 server.listen(port,hostname, ()=>{
  console.log(`Server running at http://${hostname}:${port}/`);

 })