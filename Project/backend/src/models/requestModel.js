const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Request = sequelize.define('Request', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    requestTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    creatorId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    assignedToId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

    subject: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    status: {
        type: DataTypes.STRING,
        defaultValue: 'open'
    },

    openedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },

    closedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'requests',
    timestamps: false
});

module.exports = Request;