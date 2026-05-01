const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Duvida = sequelize.define("Duvida", {
  id_duvida: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  assunto: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  estado: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  data_criacao: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },

  data_fecho: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: "duvidas",
  timestamps: false,
});

module.exports = Duvida;