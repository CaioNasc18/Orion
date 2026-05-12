require("dotenv").config();
const express = require("express");
const cors = require("cors");
//models
const UserT = require("./models/UserType");
const User = require("./models/User");
const Company = require("./models/Company");
const Logs = require("./models/Logs");
const Request = require("./models/requestModel.js");
const RequestType = require("./models/requestTypeModel.js");
const RequestFile = require("./models/requestFilesModel.js");
//routes
const requestRoutes = require("./routes/requestRoutes.js");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", requestRoutes);


app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});


const sequelize = require("./config/database");

sequelize.sync()
  .then(() => {
    console.log("Tabelas criadas com sucesso");
  })
  .catch(err => console.error(err));