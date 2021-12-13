const express = require("express");
const router = express.Router();


router.get("/", (request, response, next) => {
    response.status(200).send({
        mensagem: "tudo certo nos clientes"

    })
})

module.exports = router