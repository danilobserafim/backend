const express = require("express");
const app = express();
const rotaClientes = require("./routes/clientes")
const rotaFuncionarios = require("./routes/funcionarios")
const rotaProdutos = require("./routes/produtos")




app.use("/clientes", rotaClientes)
app.use("/funcionarios", rotaFuncionarios)
app.use("/produtos", rotaProdutos)




app.use((request, response, next) => {
    const erro = new Error("Não encontrado");
    erro.status = (404);
    next(erro)
})
app.use((error, request, response, next) => {
    return response.status(error.status || 500).send({
        error: {
            mensagem: error.message
        }
    })
})

module.exports = app