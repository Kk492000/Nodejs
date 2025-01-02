const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res) => {
  console.log("inside");
  res.send(
    `<form action='/product' method='POST'><input type='text' name='title'/><button type='submit'>Add Product</button></form>`
  );
});

router.post("/product", (req, res, next) => {
  const title = req.body.title;
  res.send(`Your title is: ${title}`);
  // res.redirect("/");
});

module.exports = router;
