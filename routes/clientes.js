const express = require("express");
const router = express.Router();
const mysql = require("../mysql").pool

const rotaClientes = require("../controllers/controllerClientes")

router.get("/", rotaClientes.getMensagens)
router.post("/", rotaClientes.postClientes)
router.patch("/", rotaClientes.patchClientes)
router.delete("/", rotaClientes.deleteClientes)

module.exports = router