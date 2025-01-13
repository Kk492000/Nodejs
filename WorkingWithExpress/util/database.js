const { Sequelize } = require("sequelize");

const sequilize = new Sequelize("node-complete", "root", "nodecomplete", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequilize;
