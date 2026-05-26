const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");

// 💡 Comentámos as rotas que ainda não existem no seu controller para o Node não crashar:
// router.post("/users", controller.createUser);
// router.get("/users", controller.getUsers);
// router.get("/users/:id", controller.getUserById);

// ✅ Esta rota está correta e existe no seu controller!
router.put("/users/:id", controller.updateUser);

// router.delete("/users/:id", controller.deleteUser);

module.exports = router;