var database = require("../../database.js")

exports.run = (client, message, args) => {

    let razaou = args.slice(0).join(' ');

    database.Users.findOne({
        "_id": message.author.id
    }, function (erro, documento) {
      
        if(documento){

            if (!razaou.length < 1) {

                if (message.content.startsWith("p!box comum")) {
                    var premio;
                    if(documento.comum > 0){
                        premio = Math.round(Math.random() * 700)
                        documento.comum -= 1
                        documento.coins += premio
                        documento.save();
                        message.reply(`**Você abriu uma caixa comum e recebeu **${premio}** coins.**`);
                    } else {
                        message.reply("**Você não possui caixas comuns.**");
                    }
                }

                if (message.content.startsWith("p!box raro")) {
                    var premio;
                    if(documento.raro > 0){
                        premio = Math.round(Math.random() * 1400)
                        documento.raro -= 1
                        documento.coins += premio
                        documento.save();
                        message.reply(`**Você abriu uma caixa rara e recebeu **${premio}** coins.**`);
                    } else {
                        message.reply("**Você não possui caixas rara.**");
                    }
                }

                if (message.content.startsWith("p!box epico")) {
                    var premio;
                    if(documento.epico > 0){
                        premio = Math.round(Math.random() * 2100)
                        documento.epico -= 1
                        documento.coins += premio
                        documento.save();
                        message.reply(`**Você abriu uma caixa epica e recebeu **${premio}** coins.**`);
                    } else {
                        message.reply("**Você não possui caixas epicas.**");
                    }
                }

                if (message.content.startsWith("p!box lendario")) {
                    var premio;
                    if(documento.lendario > 0){
                        premio = Math.round(Math.random() * 4500)
                        documento.lendario -= 1
                        documento.coins += premio
                        documento.save();
                        message.reply(`**Você abriu uma caixa lendaria e recebeu **${premio}** coins.**`);
                    } else {
                        message.reply("**Você não possui caixas lendarias.**");
                    }
                }

                database.Guilds.findOne({
                    "_id": message.guild.id
                }, function (servidore, servidord) {

                    if(servidord){

                        var desenvolvedores = ["315263840268976128", "399302842688733195", "244489368717230090", "282504900552949760", "260385767895859201", "286144811680137218"]

                if (message.content.startsWith("p!box drop comum")) {
                    if(!desenvolvedores.includes(message.author.id)) return message.reply("**Sem permissão. :confused:**");
                    if(servidord.caixa){
                        message.reply("**Uma caixa ja foi dropada.**");
                    } else {
                        servidord.caixa = true
                        servidord.caixatipo = "Comum"
                        servidord.save()
                        message.delete()
                        message.channel.sendMessage("**Uma caixa comum foi dropada, use `p!getbox` para pegar.**");
                    }
                }

                if (message.content.startsWith("p!box drop raro")) {
                    if(!desenvolvedores.includes(message.author.id)) return message.reply("**Sem permissão. :confused:**");
                    if(servidord.caixa){
                        message.reply("**Uma caixa ja foi dropada.**");
                    } else {
                        servidord.caixa = true
                        servidord.caixatipo = "Raro"
                        servidord.save()
                        message.delete()
                        message.channel.sendMessage("**Uma caixa rara foi dropada, use `p!getbox` para pegar.**");
                    }
                }

                if (message.content.startsWith("p!box drop epico")) {
                    if(!desenvolvedores.includes(message.author.id)) return message.reply("**Sem permissão. :confused:**");
                    if(servidord.caixa){
                        message.reply("**Uma caixa ja foi dropada.**");
                    } else {
                        servidord.caixa = true
                        servidord.caixatipo = "Epico"
                        servidord.save()
                        message.delete()
                        message.channel.sendMessage("**Uma caixa epica foi dropada, use `p!getbox` para pegar.**");
                    }
                }

                if (message.content.startsWith("p!box drop lendario")) {
                    if(!desenvolvedores.includes(message.author.id)) return message.reply("**Sem permissão. :confused:**");
                    if(servidord.caixa){
                        message.reply("**Uma caixa ja foi dropada.**");
                    } else {
                        servidord.caixa = true
                        servidord.caixatipo = "Lendario"
                        servidord.save()
                        message.delete()
                        message.channel.sendMessage("**Uma caixa lendaria foi dropada, use `p!getbox` para pegar.**");
                    }
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
                    caixatipo: "Comum"
                })
                servidor.save()
                message.reply("**Use o comando novamente!**");
            }

            })

            } else {
                message.channel.sendMessage({
                    "embed": {
                      "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ ATHENOS ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Use `p!box <comum | raro | epico | lendario>` para abrir uma caixa. :smile:**",
                      "color": 55512,
                      "timestamp": new Date(),
                      "footer": {
                        "icon_url": message.author.displayAvatarURL,
                        "text": `Total de ${documento.comum + documento.raro + documento.epico + documento.lendario}`
                      },
                      "thumbnail": {
                        "url": message.author.displayAvatarURL
                      },
                      "fields": [
                        {
                          "name": ":star2: Caixas:",
                          "value": `**${documento.comum}** comuns\n**${documento.raro}** raras\n**${documento.epico}** epicas\n**${documento.lendario}** lendarias`
                        }
                      ]
                    }
                  });
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

}