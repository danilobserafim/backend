const mysql = require("../mysql").pool


exports.getClientes = (request, response, next) => {
    response.status(200).send({
        mensagem: "tudo certo nos clientes(get)"

    })
}

exports.postClientes =  (request, response, next) => {

    mysql.getConnection((error, conn)=>{
        conn.query("INSERT INTO 3463659_usuario.clientes(enderecos_id, nome_cliente, telefone) values(?,?,?)",
        [request.body.endereco_id, request.body.nome, request.body.telefone], (error, result, fields)=>{
            conn.release()
            if (error) {
                return response.status(500).send({èrror: error})
            }
            response.status(200).send({
                mensagem: "Cliente inserido com sucesso",
                id_produto: result.insertId
                
            })
        })
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