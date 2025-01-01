const express = require("express");
require("dotenv").config();
const app = express();

//middlewares
app.use(express.urlencoded({ extended: false }));

app.use("/", (req, res, next) => {
  console.log("In the middleware");
  next(); //Allows the request to continue to the next middleware
});

app.get("/add-product", (req, res) => {
  res.send(
    `<form action='/product' method='POST'><input type='text' name='title'/><button type='submit'>Add Product</button></form>`
  );
});

app.post("/product", (req, res, next) => {
  const title = req.body.title;
  res.send(`Your title is: ${title}`);
  //   res.redirect("/");
});

app.get("/", (req, res) => {
  res.send("I am on home page");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`server is started at http://localhost:${PORT}`);
});
