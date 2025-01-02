const express = require("express");
require("dotenv").config();
const app = express();
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(adminRoutes);
app.use(shopRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`server is started at http://localhost:${PORT}`);
});
