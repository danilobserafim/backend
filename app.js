const express = require("express");
const app = express();
const rotaClientes = require("./routes/clientes")
const rotaFuncionarios = require("./routes/funcionarios")
const rotaProdutos = require("./routes/produtos")
var bodyParser = require("./node_modules/body-parser/index")

app.use(bodyParser.urlencoded({extend: false}))
app.use(bodyParser.json())

app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*")
    response.header("Access-Control-Allow-Header", 
    "Origin, X-Requested-Width, Content-Type, Acept, Authorization")

    if (request.method === 'OPTIONS') {
        response.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, GET, DELETE")    
        return response.status(200).send({})    
    }
    next();
})

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