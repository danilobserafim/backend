const mysql = require("../mysql").pool

exports.getProdutos = (request, response, next) => {
    response.status(200).send({
        mensagem: "tudo certo nos Produtos(get)"

    })
}

exports.postProdutos =  (request, response, next) => {
    response.status(200).send({
        mensagem: "tudo certo nos Produtos(post)"

    })
}

exports.patchProdutos = (request, response, next) => {
    response.status(200).send({
        mensagem: "tudo certo nos Produtos(patch)"

    })
}

exports.deleteProdutos = (request, response, next) => {
    response.status(200).send({
        mensagem: "tudo certo nos Produtos(delete)"

    })
}