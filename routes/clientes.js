const express = require("express");
const router = express.Router();
const rotaClientes = require("../controllers/controllerClientes")

router.get("/", rotaClientes.getClientes)

router.post("/", rotaClientes.postClientes)

router.patch("/", rotaClientes.patchClientes)

router.delete("/", rotaClientes.deleteClientes)

module.exports = router