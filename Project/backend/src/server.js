require("dotenv").config();
const express = require("express");
const cors = require("cors");
const UserT = require("./models/UserType");
const User = require("./models/User");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API rodando 🚀"); //prof de AI disse que isto não pode estar aqui
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});


const sequelize = require("./config/database");

sequelize.sync()
  .then(() => {
    console.log("Tabelas criadas com sucesso");
  })
  .catch(err => console.error(err));