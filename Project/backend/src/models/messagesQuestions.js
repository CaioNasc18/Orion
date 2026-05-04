const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const MensagemDuvida = sequelize.define("MensagemDuvida", {
  id_mensagem: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  mensagem: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  data_envio: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },

  lida: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
}, {
  tableName: "mensagens_duvida",
  timestamps: false,
});

module.exports = MensagemDuvida;