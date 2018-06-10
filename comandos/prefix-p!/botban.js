var database = require("../../database.js")

exports.run = (client, message, args) => {


    let razaou = args.slice(0).join(' ');
    let user = message.mentions.roles.first();

    var desenvolvedores = ["315263840268976128", "399302842688733195", "244489368717230090", "282504900552949760", "260385767895859201", "286144811680137218"]

    if(!desenvolvedores.includes(message.author.id)) return message.reply("**Sem permissão. :confused:**");

    if (!razaou.length < 1) {

        let usuario = message.mentions.users.first() ? message.mentions.users.first() : client.users.get(args[0])
        if (usuario.id == message.author.id) return message.reply("**Você não pode banir você mesmo.**");

        if (message.mentions.users.size < 1) {

            if(usuario.id){

                database.Users.findOne({
                    "_id": usuario.id
                }, function (erro, documento) {
            
                    if(documento){

                        if(documento.ban){
                            documento.ban = false
                            documento.save()
                            message.reply("**Usuário desbanido.**");
                        } else {
    
                        database.Users.deleteOne({
                            "_id": usuario.id
                        }, function (erro, documento) {})
    
                        message.channel.startTyping();
    
                        setTimeout(() => {
                            database.Users.findOne({
                                "_id": usuario.id
                            }, function (berro, banido) {
                        
                                if(banido){
                                    message.reply("**Ocorreu um erro.**");
                                    message.channel.stopTyping();
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
                                        ban: true,
                                        frase: "Nenhuma"
                                    })
                        
                                    pessoa.save()
    
                                    message.channel.stopTyping();
                                    message.reply("**Usuário banido.**");
                                }
    
                            })
                        }, 3000);
    
                    }

                    } else {
                        message.reply("**Use o comando novamente.**");
                    }
    
                })

            } else {
                message.reply("**Usuário não encontrado.**");
            }

        } else {

            database.Users.findOne({
                "_id": usuario.id
            }, function (erro, documento) {
        
                if(documento){

                    if(documento.ban){
                        documento.ban = false
                        documento.save()
                        message.reply("**Usuário desbanido.**");
                    } else {

                    database.Users.deleteOne({
                        "_id": usuario.id
                    }, function (erro, documento) {})

                    message.channel.startTyping();

                    setTimeout(() => {
                        database.Users.findOne({
                            "_id": usuario.id
                        }, function (berro, banido) {
                    
                            if(banido){
                                message.reply("**Ocorreu um erro.**");
                                message.channel.stopTyping();
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
                                    ban: true,
                                    frase: "Nenhuma"
                                })
                    
                                pessoa.save()

                                message.channel.stopTyping();
                                message.reply("**Usuário banido.**");
                            }

                        })
                    }, 3000);

                }

                } else {
                    message.reply("**Use o comando novamente.**");
                }

            })

        }

    } else {
        message.reply("**Mencione o usuário ou diga seu id.**");
    }

}