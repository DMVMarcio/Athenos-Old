var database = require("../../database.js")

exports.run = (client, message, args) => {

    database.Guilds.findOne({
        "_id": message.guild.id
    }, function(erro, documento) {

        if (documento) {

            message.channel.sendMessage({
                "embed": {
                  "description": `ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ ${message.guild.name} ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n${documento.desc}\nㅤ`,
                  "color": 55512,
                  "footer": {
                    "icon_url": message.author.displayAvatarURL,
                    "text": message.author.username
                  },
                  "thumbnail": {
                    "url": "https://i.imgur.com/4JaNmFp.png"
                  },
                  "fields": [
                    {
                      "name": ":gear: Config:",
                      "value": `- **AUTOROLE** = <@&${documento.autoroleid}>\n- **LEVEL** = ${documento.leveis}\n- **COINS** = ${documento.coins}\n- **BOX** = ${documento.box}`,
                      "inline": true
                    },
                    {
                      "name": ":trident: Status:",
                      "value": `- **${message.guild.members.size}** users\n- **${message.guild.channels.size}** channels\n- **${message.guild.emojis.size}** emojis\n- **${message.guild.roles.size}** roles`,
                      "inline": true
                    }
                  ]
                }
              });

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