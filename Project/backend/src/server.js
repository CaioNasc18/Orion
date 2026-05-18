require("dotenv").config();
const express = require("express");
const cors = require("cors");

const sequelize = require("./config/database");

// models
require("./models/UserType");
require("./models/User");
require("./models/Company");
require("./models/Logs");
require("./models/requestModel.js");
require("./models/requestTypeModel.js");
require("./models/requestFilesModel.js");
require("./models/questions.js");
require("./models/messagesQuestions.js");
require("./models/requestStatus.js");

// associations
const applyAssociations = require("./models/associations");

// seeds
const seedUserTypes = require("./seeders/seedUserTypes");
const seedRequestTypes = require("./seeders/seedRequestTypes");

const app = express();

app.use(cors());
app.use(express.json());

applyAssociations();

// ✅ servidor só arranca depois do sync e seeds
sequelize.sync({ alter: true }).then(async () => {
  console.log("Banco sincronizado 🚀");

  await seedUserTypes();
  await seedRequestTypes();

  app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000 🚀");
  });
});