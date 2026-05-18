const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const MessageQuestion = sequelize.define('MessageQuestion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    sentAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    read: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: 'messages_questions',
    timestamps: false
});

module.exports = MessageQuestion;