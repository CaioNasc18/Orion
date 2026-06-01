const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");
 
// Criar conta (novo utilizador)
router.post("/users", controller.createUser);
 
// Atualizar utilizador
router.put("/users/:id", controller.updateUser);
 
// Rotas a implementar futuramente:
// router.get("/users", controller.getUsers);
// router.get("/users/:id", controller.getUserById);
// router.delete("/users/:id", controller.deleteUser);
 
module.exports = router;