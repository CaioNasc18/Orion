const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Importa a instância do Sequelize e conecta ao banco de dados, SEMPRE copiar e colar isto

const Company = sequelize.define("Company", {
  id_empresa: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

    nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
    timestamps: false
}
);

module.exports = Company;