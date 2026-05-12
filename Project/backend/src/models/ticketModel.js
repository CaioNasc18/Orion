const Ticket = sequelize.define("Ticket", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  subject: {
    type: DataTypes.STRING,
    allowNull: true
  },

  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  source: {
    type: DataTypes.ENUM("contact", "internal"),
    allowNull: false
  },

  status: {
    type: DataTypes.ENUM("open", "in_progress", "closed"),
    defaultValue: "open"
  },

  name: { // para contact form
    type: DataTypes.STRING,
    allowNull: true
  },

  email: { // para contact form
    type: DataTypes.STRING,
    allowNull: true
  },

  createdBy: { // user do sistema
    type: DataTypes.INTEGER,
    allowNull: true
  },

  assignedTo: {
    type: DataTypes.INTEGER,
    allowNull: true
  }

}, {
  tableName: "tickets",
  timestamps: true
});