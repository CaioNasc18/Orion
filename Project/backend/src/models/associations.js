const User = require("./User");
const UserType = require("./UserType");

function applyAssociations() {
  UserType.hasMany(User, {
    foreignKey: "id_tipo",
  });

  User.belongsTo(UserType, {
    foreignKey: "id_tipo",
  });
}

module.exports = applyAssociations;