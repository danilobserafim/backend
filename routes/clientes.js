const express = require("express");
const router = express.Router();
const rotaClientes = require("../controllers/controllerClientes")

router.get("/", rotaClientes.getClientes)

router.post("/", rotaClientes.postClientes)

router.patch("/", rotaClientes.patchClientes)

router.delete("/", (request, response, next) => {
    response.status(200).send({
        mensagem: "tudo certo nos clientes(delete)"

    })
})

module.exports = router