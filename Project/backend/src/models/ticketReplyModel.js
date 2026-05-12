const TicketReply = sequelize.define("TicketReply", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  ticketId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  message: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  userId: {
    type: DataTypes.INTEGER,
    allowNull: true
  }

}, {
  tableName: "ticket_replies",
  timestamps: true
});