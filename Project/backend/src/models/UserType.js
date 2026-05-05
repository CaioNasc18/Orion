const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Importa a instância do Sequelize e conecta ao banco de dados, SEMPRE copiar e colar isto

const UserT = sequelize.define("UserType", {
  id_tipo: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  designacao: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  timestamps: false
});

module.exports = UserT;
