const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const EstadoPedido = sequelize.define('EstadoPedido', {
    id_estado: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    estado: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },

    observacao: {
        type: DataTypes.STRING,
        allowNull: true
    },

    data: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    }

}, {
    tableName: 'EstadosPedidos',
    timestamps: false
});

module.exports = EstadoPedido;
