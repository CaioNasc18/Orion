const User = require("./User");
const UserType = require("./UserType");
const Company = require("./company");
const Request = require("./requestModel");
const RequestType = require("./requestTypeModel");
const RequestFile = require("./requestFilesModel");

function applyAssociations() {

  // UserType <-> User  
  UserType.hasMany(User, {
    foreignKey: "id_tipo",
  });
  User.belongsTo(UserType, {
    foreignKey: "id_tipo",
  });

  //------------------------------//

  // Company <-> User 
  Company.hasMany(User, {
    foreignKey: "id_empresa",
  });
  User.belongsTo(Company, {
    foreignKey: "id_empresa",
  });

  //------------------------------//

  // RequestType <-> Request
  RequestType.hasMany(Request, {
    foreignKey: "requestTypeId",
  });
  Request.belongsTo(RequestType, {
    foreignKey: "requestTypeId",
  });

  //------------------------------//

  // User (creator) <-> Request
  User.hasMany(Request, {
    foreignKey: "creatorId",
    as: "createdRequests",
  });
  Request.belongsTo(User, {
    foreignKey: "creatorId",
    as: "creator",
  });

  //------------------------------//

  // User (assignedTo) <-> Request
  User.hasMany(Request, {
    foreignKey: "assignedToId",
    as: "assignedRequests",
  });
  Request.belongsTo(User, {
    foreignKey: "assignedToId",
    as: "assignedTo",
  });

  //------------------------------//

  // Request <-> RequestFile
  Request.hasMany(RequestFile, {
    foreignKey: "requestId",
    as: "files",
  });
  RequestFile.belongsTo(Request, {
    foreignKey: "requestId",
  });

}

module.exports = applyAssociations;