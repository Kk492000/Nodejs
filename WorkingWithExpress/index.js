const express = require("express");
require("dotenv").config();
const app = express();
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require("path");

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use("/admin", adminRoutes);
app.use(shopRoutes);
const sequilize = require("./util/database");

app.set("view engine", "pug");
app.set("views", "views");

const PORT = process.env.PORT || 5001;

app.use(express.static(path.join(__dirname, "public ")));

app.use((req, res, next) => {
  res.send(404).sendFile(path.join(__dirname, "views", "404.html"));
});

sequilize
  .sync()
  .then((result) => {
    console.log(result);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
