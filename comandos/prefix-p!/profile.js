const Discord = require('discord.js');
var database = require("../../database.js")
var Jimp = require("jimp");

exports.run = (client, message, args) => {

    let usuario = message.mentions.users.first() ? message.mentions.users.first() : message.author
    var desenvolvedores = ["315263840268976128", "399302842688733195", "244489368717230090", "282504900552949760", "260385767895859201", "286144811680137218"]

    database.Users.findOne({
        "_id": usuario.id
    }, function (erro, documento) {

        if(documento) {
            try {
              message.channel.startTyping();
                var unbug = 370 * documento.level + 1
                Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (letra) {
                    Jimp.loadFont(Jimp.FONT_SANS_16_WHITE).then(function (letra2) {
                        Jimp.read("https://i.imgur.com/RcBGhPW.png", function (erre, img) {
                            Jimp.read(`${documento.background}`).then(function (background) {
                                Jimp.read(`${usuario.avatarURL}`).then(function (avatar) {
                                    Jimp.read(`https://emojipedia-us.s3.amazonaws.com/thumbs/120/microsoft/106/police-officer_1f46e.png`).then(function (staff) {
                                        Jimp.read("https://i.imgur.com/h4qNoD1.png").then(function (perfil) {
                                            Jimp.read("https://cloud.githubusercontent.com/assets/414918/11165709/051d10b0-8b0f-11e5-864a-20ef0bada8d6.png").then(function (mascara) {
                                                avatar.resize(130, 130);
                                                mascara.resize(130, 130);
                                                staff.resize(40, 40);
                                                avatar.mask(mascara, 0, 0);
                                                background.resize(450, 290);
                                                img.composite(background, 1, 10);
                                                img.composite(perfil, 0, 0);
                                                img.composite(avatar, 19, 56);
                                                if(desenvolvedores.includes(usuario.id)) {
                                                    img.composite(staff, 110, 145)
                                                }
                                                img.print(letra2, 160, 110, `${usuario.tag}`);
                                                img.print(letra, 257, 139, `${documento.level}`);
                                                img.print(letra, 257, 180, `${Number(documento.coins).toLocaleString()}`);
                                                img.print(letra, 257, 220, `${Number(documento.xp).toLocaleString()}/${unbug}`);
                                                img.print(letra, 390, 139, `${Number(documento.rep).toLocaleString()}`);

                                                img.getBuffer(Jimp.MIME_PNG, (erri, buffer) => {
                                                    message.channel.send(``, new Discord.Attachment(buffer, 'Profile.png'));
                                                    message.channel.stopTyping();

                                                });
                                            });
                                        })
                                    });
                                });
                            });
                        });
                    });
                });
            } catch(e) {
                message.reply("**Seu plano de fundo é inválido.**");
            }

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