const Discord = require('discord.js');
var database = require("../../database.js")

exports.run = (client, message, args) => {

    let usuario = message.mentions.users.first() ? message.mentions.users.first() : message.author
    let mensagem = message.mentions.users.first() ? "Este usuário possui" : "Você possui"

    database.Users.findOne({
        "_id": usuario.id
    }, function (erro, documento) {

        if(documento){

            message.reply(`**${mensagem} ${documento.coins} coins.**`);

        } else {
            var pessoa = new database.Users({
                _id: usuario.id,
                level: 0,
                xp: 0,
                coins: 0,
                rep: 0,
                comum: 0,
                raro: 0,
                epico: 0,
                lendario: 0,
                background: "https://i.imgur.com/J3GPYFM.jpg",
                ban: false,
                frase: "Nenhuma"
            })

            pessoa.save()
        }

    })

}