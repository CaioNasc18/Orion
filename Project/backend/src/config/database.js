var Sequelize = require("sequelize");

const sequelize = new Sequelize("neondb", "neondb_owner", "npg_4FerV7NLxBMH", {
  host: "ep-dry-lab-apdvreuv-pooler.c-7.us-east-1.aws.neon.tech",
  port: 5432,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = sequelize;