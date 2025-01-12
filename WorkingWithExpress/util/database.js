const Sequilize = require("sequelize");

const sequilize = new Sequilize("node-complete", "root", "nodecomplete", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequilize;
