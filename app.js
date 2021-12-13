const express = require("express");
const app = express();
const rotaClientes = require("./routes/clientes")

app.use("/clientes", rotaClientes)

app.use((request, response, next) => {
    response.status(200).send({
        mensagem: "tudo certo"
    })
})

module.exports = app