const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nome_da_bd', 'user', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;