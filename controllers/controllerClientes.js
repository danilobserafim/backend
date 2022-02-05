import db from "../routes/db";

exports.getClientes = (request, response, next) => {
    const comentsFunc = async ()=>{
        const query = "SELECT author, content, date FROM coments"
        const { rows } = await db.query(query)
        return rows || []

    }
    const coments = comentsFunc()
    response.status(200).send(
        coments
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