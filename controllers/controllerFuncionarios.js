const mysql = require("../mysql").pool

exports.getFuncionarios = (request, response, next) => {
    response.status(200).send({
        mensagem: "tudo certo nos Funcionarios(get)"

    })
}

exports.postFuncionarios =  (request, response, next) => {
    response.status(200).send({
        mensagem: "tudo certo nos Funcionarios(post)"

    })
}

exports.patchFuncionarios = (request, response, next) => {
    response.status(200).send({
        mensagem: "tudo certo nos Funcionarios(patch)"

    })
}

exports.deleteFuncionarios = (request, response, next) => {
    response.status(200).send({
        mensagem: "tudo certo nos Funcionarios(delete)"

    })
}