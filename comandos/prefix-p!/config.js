var database = require("../../database.js")

exports.run = (client, message, args) => {


    let razaou = args.slice(0).join(' ');
    let razaod = args.slice(1).join(' ');

    var desenvolvedores = ["315263840268976128", "399302842688733195", "244489368717230090", "282504900552949760", "260385767895859201", "286144811680137218"]

    if (!desenvolvedores.includes(message.author.id) & !message.member.hasPermission(["MANAGE_GUILD"]))
    return message.reply("**Você não tem permissão para configurar o bot!**");

    database.Guilds.findOne({
        "_id": message.guild.id
    }, function(erro, documento) {

        if (documento) {

            if (!razaou.length < 1) {

                if (message.content.startsWith("p!config level")) {
                    if(documento.leveis){
                        documento.leveis = false
                        documento.save()
                        message.reply("**:warning: Sistema de levels desativado.**");
                    } else {
                        documento.leveis = true
                        documento.save()
                        message.reply("**:warning: Sistema de levels ativado.**");
                    }
                }

                if (message.content.startsWith("p!config coins")) {
                    if(documento.coins){
                        documento.coins = false
                        documento.save()
                        message.reply("**:warning: Sistema de coins desativado.**");
                    } else {
                        documento.coins = true
                        documento.save()
                        message.reply("**:warning: Sistema de coins ativado.**");
                    }
                }

                if (message.content.startsWith("p!config box")) {
                    if(documento.box){
                        documento.box = false
                        documento.save()
                        message.reply("**:warning: Sistema de caixas desativado.**");
                    } else {
                        documento.box = true
                        documento.save()
                        message.reply("**:warning: Sistema de caixas ativado.**");
                    }
                }

                if (message.content.startsWith("p!config roleshop")) {
                    if(documento.roleshop){
                        documento.roleshop = false
                        documento.save()
                        database.Roleshops.deleteOne({
                            "_id": message.guild.id
                        }, function (erro, documento) {})
                        message.reply("**:warning: Sistema de roleshop desativado.**");
                    } else {
                        documento.roleshop = true
                        documento.save()
                        var roleshop = new database.Roleshops({
                            _id: message.guild.id,
                            canal: message.channel.id,
                            cargo1: "Nenhum",
                            cargo1preco: 0,
                            cargo2: "Nenhum",
                            cargo2preco: 0,
                            cargo3: "Nenhum",
                            cargo3preco: 0,
                            cargo4: "Nenhum",
                            cargo4preco: 0,
                            cargo5: "Nenhum",
                            cargo5preco: 0,
                            cargo6: "Nenhum",
                            cargo6preco: 0,
                            cargo7: "Nenhum",
                            cargo7preco: 0,
                            cargo8: "Nenhum",
                            cargo8preco: 0,
                            cargo9: "Nenhum",
                            cargo9preco: 0,
                            cargo10: "Nenhum",
                            cargo10preco: 0,
                        })
                        roleshop.save()
                        message.reply("**:warning: Sistema de roleshop ativado.**");
                    }
                }

                if (message.content.startsWith("p!config desc")) {
                    if (!razaod.length < 1) {
                        documento.desc = `${message.content.replace("p!config desc", "")}`
                        documento.save()
                        message.reply("**:warning: Descrição setada com sucesso.**");
                    } else {
                        message.reply("**Diga a descrição que quer setar.**");
                    }
                }

            } else {
                message.reply({
                    "embed": {
                      "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ ATHENOS ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Como usar:**\n```\np!config level\np!config coins\np!config box\np!config roleshop\np!config desc <descrição do servidor>```",
                      "color": 55512,
                      "timestamp": new Date(),
                      "footer": {
                        "icon_url": message.author.displayAvatarURL,
                        "text": message.author.username
                      },
                      "thumbnail": {
                        "url": "https://i.imgur.com/4JaNmFp.png"
                      }
                    }
                  });
            }

        } else {

            var servidor = new database.Guilds({
                _id: message.guild.id,
                welcome: false,
                welcomechannel: "Nenhum",
                welcomemsg: "Nenhuma",
                byebye: false,
                byebyechannel: "Nenhum",
                byebyemsg: "Nenhuma",
                autorole: false,
                autoroleid: "Nenhum",
                leveis: true,
                coins: true,
                desc: "Use p!config desc <descrição do servidor> para setar uma descrição.",
                box: true,
                caixa: false,
                caixatipo: "Comum",
                links: false,
                invites: false,
                roleshop: false,
            })
            servidor.save()
            message.reply("**Use o comando novamente!**");

        }

    })

}