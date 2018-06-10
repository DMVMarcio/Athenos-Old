var database = require("../../database.js")
var pessoas = new Set()

exports.run = (client, message, args) => {


    let razaou = args.slice(0).join(' ');

    if (!razaou.length < 1) {

        database.Users.findOne({
            "_id": message.author.id
        }, function (uerro, usuario) {

            if(usuario) {

        if (pessoas.has(message.author.id)) {
            if (!razaou.length < 1) {
                database.Convs.findOne({
                    "frase": usuario.frase
                }, function(erro, documento) {
        
                    if(documento){
                        message.reply("**Ocorreu um erro. Parece que a frase já foi adicionada.**");
                        pessoas.delete(message.author.id)
                    } else {
                        var ia = new database.Convs({
                            frase: usuario.frase,
                            resposta: message.content.toLowerCase().replace("p!addre ", ""),
                            por: message.author.id,
                            aprove: false
                            })

                            ia.save();

                        pessoas.delete(message.author.id)
                        
                        message.reply("**Frase adicionada.**");
                    }

                })
            } else {
                message.reply("**Diga a resposta.**");
            }
        } else {

            if (!razaou.length < 1) {

                database.Convs.findOne({
                    "frase": message.content.toLowerCase().replace("p!addre ", "")
                }, function(erro, documento) {
        
                    if(documento){
                        if(documento.aprove){
                            message.reply("**Está frase é verificada.**");
                        } else {
                            message.reply("**A frase já existe.**");
                        }
                    } else {
                        usuario.frase = message.content.toLowerCase().replace("p!addre ", "");
                        usuario.save();
                        pessoas.add(message.author.id)
                        setTimeout(function() {
                            pessoas.delete(message.author.id)
                        }, 1 * 60 * 1000)
                        message.reply("**Agora diga a resposta.**");
                    }

                })

            } else {
                message.reply("**Diga a frase.**");
            }

        }

    } else {

        var pessoa = new database.Users({
            _id: message.author.id,
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

    } else {
        message.reply("**Diga a frase e depois use o comando novamente com a resposta.**\n:information_source: O maú uso deste comando pode resultar em ban.");
    }

}