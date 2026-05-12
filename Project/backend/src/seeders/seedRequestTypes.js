const RequestType = require("../models/requestTypeModel");

async function seedRequestTypes() {
  const count = await RequestType.count();

  if (count === 0) {
    await RequestType.bulkCreate([
      { name: "ReportIncident" },
      { name: "Pentest" },
      { name: "Documentation" },
    ]);

    console.log("Tipos de pedido criados 🚀");
  } else {
    console.log("Tipos já existem ✔");
  }
}

module.exports = seedRequestTypes;