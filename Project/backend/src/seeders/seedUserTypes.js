const TipoUtilizador = require("../models/UserType");

async function seedUserTypes() {
  const count = await TipoUtilizador.count();

  if (count === 0) {
    await TipoUtilizador.bulkCreate([
      { designacao: "Admin" },
      { designacao: "User" },
      { designacao: "Guest" },
    ]);

    console.log("Tipos de utilizador criados 🚀");
  } else {
    console.log("Tipos já existem ✔");
  }
}

module.exports = seedUserTypes;