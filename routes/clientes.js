const express = require("express");
const router = express.Router();

router.get("/", (request, response, next) => {
    response.status(200).send({
        mensagem: "tudo certo nos clientes(get)"

    })
})

router.post("/", (request, response, next) => {
    response.status(200).send({
        mensagem: "tudo certo nos clientes(post)"

    })
})

router.patch("/", (request, response, next) => {
    response.status(200).send({
        mensagem: "tudo certo nos clientes(patch)"

    })
})

router.delete("/", (request, response, next) => {
    response.status(200).send({
        mensagem: "tudo certo nos clientes(delete)"

    })
})

module.exports = router