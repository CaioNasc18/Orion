const express = require("express");
const router = express.Router();
const controller = require("../controllers/requestController");


router.get('/requests', requestController.request_list);
router.get('/requests/:id', requestController.request_detail);
router.post('/requests/create', requestController.request_create);
router.put('/requests/:id', requestController.request_update);
router.delete('/requests/:id', requestController.request_delete);
router.put('/requests/:id/close', requestController.request_close);

module.exports = router;