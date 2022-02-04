const mysql = require("../mysql").pool

exports.getMensagens = (request, response, next) => {
    response.status(200).send({
        mensagem: [{
            author:"Marcos",
            message: "Lorem ipsum dolor sit amet.",
            date: "04/06/2020"
        },
        {
            author:"Mayara",
            message: "Lorem ipsum dolor sit amet.",
            date: "06/09/2020"
        },
        {
            author:"Douglas",
            message: "Lorem ipsum dolor sit amet.",
            date: "09/12/2020"
        },
        {
            author:"Thiago",
            message: "Lorem ipsum dolor sit amet.",
            date: "15/08/2021"
        },
        
    ]

    })
}

exports.postMensagens =  (request, response, next) => {
    response.status(200).send({
        mensagem: "tudo certo nos Mensagens(post)"

    })
}

exports.patchMensagens = (request, response, next) => {
    response.status(200).send({
        mensagem: "tudo certo nos Mensagens(patch)"

    })
}

exports.deleteMensagens = (request, response, next) => {
    response.status(200).send({
        mensagem: "tudo certo nos Mensagens(delete)"

    })
}