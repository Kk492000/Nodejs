const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

console.log(require.main.filename, "require.main.filename");

const router = express.Router();

router.get("/", (req, res) => {
  console.log(require.main.filename, "fsdfa");
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
