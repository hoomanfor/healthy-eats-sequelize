const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

const Eat = sequelize.define("eats", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    consumed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
}, {
    freezeTableName: true
});

Eat.sync();

module.exports = Eat;