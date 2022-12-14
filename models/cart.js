const Sequalize = require("sequelize");

const sequalize = require("../util/database");

const Cart = sequalize.define("cart", {
  id: {
    type: Sequalize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
});

module.exports = Cart;
