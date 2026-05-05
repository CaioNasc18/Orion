require("dotenv").config();
const express = require("express");
const cors = require("cors");

const sequelize = require("./config/database");

// models (importar para garantir carregamento)
require("./models/UserType");
require("./models/User");
require("./models/Company");
require("./models/Logs");
require("./models/requestModel.js");
require("./models/requestTypeModel.js");
require("./models/requestFilesModel.js");
require("./models/questions.js");
require("./models/messagesQuestions.js");

// associations
const applyAssociations = require("./models/associations");

// seeds
const seedUserTypes = require("./seeders/seedUserTypes");
const seedRequestTypes = require("./seeders/seedRequestTypes");

const app = express();

app.use(cors());
app.use(express.json());

// aplicar relações
applyAssociations();

// sync + seed
sequelize.sync({ alter: true }).then(async () => {
  console.log("Banco sincronizado 🚀");

  await seedUserTypes();
  await seedRequestTypes();
});

// iniciar servidor
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});