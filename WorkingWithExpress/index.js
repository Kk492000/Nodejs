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

const PORT = process.env.PORT || 5001;

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.send(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => {
  console.log(`server is started at http://localhost:${PORT}`);
});
