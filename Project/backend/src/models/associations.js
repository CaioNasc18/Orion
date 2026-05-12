const User = require("./User");
const UserType = require("./UserType");
const Company = require("./company");

function applyAssociations() {

  // UserType <-> User 
  UserType.hasMany(User, {
    foreignKey: "id_tipo",
  });

  User.belongsTo(UserType, {
    foreignKey: "id_tipo",
  });

  //------------------------------//

  Company.hasMany(User, {
    foreignKey: "id_empresa",
  });

  User.belongsTo(Company, {
    foreignKey: "id_empresa",
  });
}

module.exports = applyAssociations;