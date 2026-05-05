const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Importa a instância do Sequelize e conecta ao banco de dados, SEMPRE copiar e colar isto

const Logs = sequelize.define("Logs", {
  id_log: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  action: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  entity : {
    type: DataTypes.STRING,
    allowNull: false,
  },

  details: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  date_time: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  ip : {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
    timestamps: false
  },);

module.exports = Logs;