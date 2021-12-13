exports.getClientes = (request, response, next) => {
    response.status(200).send({
        mensagem: "tudo certo nos clientes(get)"

    })
}

exports.postClientes =  (request, response, next) => {
    response.status(200).send({
        mensagem: "tudo certo nos clientes(post)"

    })
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