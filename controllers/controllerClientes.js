const mysql = require("../mysql").pool

exports.getClientes = (request, response, next) => {
    response.status(200).send(
        {
            author: "Douglas",
            content: "Lorem ipsum dolor sit amet consectetur.",
            date: "13/01/2022"
        },
        {
            author: "Mayara",
            content: "Lorem ipsum dolor sit amet consectetur.",
            date: "18/01/22"
        },
        {
            author: "Marcos",
            content: "Lorem ipsum dolor sit amet consectetur.",
            date: "25/01/2022"
        },
        {
            author: "Danilo",
            content: "Lorem ipsum dolor sit amet consectetur.",
            date: "03/02/2022"
        },
    )
}

exports.postClientes =  (request, response, next) => {
    response.status(200).send(
    )
}

exports.patchClientes = (request, response, next) => {
    response.status(200).send({
        mensagem: "tudo certo nos clientes(patch)"

    })
}

exports.deleteClientes = (request, response, next) => {
    response.status(200).send({
        mensagem: "tudo certo nos clientes(delete)"

    })
}