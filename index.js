console.log("Conectando...")
const Discord = require('discord.js');
const client = new Discord.Client({
    autoReconnect: true,
    messageCacheMaxSize: 4048,
    fetchAllMembers: false,
    disabledEvents: ['typingStart', 'typingStop', 'guildMemberSpeaking'],
    messageCacheLifetime: 1680,
    disableEveryone: true
});
const Cleverbot = require("cleverbot-node");
const moment = require('moment');
moment.locale('pt-BR');
const config = require('./config.json');
var database = require("./database.js");
var nicknames = require('nicknames');
const fs = require('fs');
const gifSearch = require("gif-search");
var Jimp = require("jimp");
const os = require('os-utils');
const clbot = new Cleverbot;

clbot.configure({
    botapi: process.env.cleverapi
});

client.on('guildMemberAdd', member => {

    database.Guilds.findOne({
        "_id": member.guild.id
    }, function (erro, documento) {

        if(documento) {

            if(documento.welcome) {

                var bemvindo = documento.welcomemsg
                if(member.guild.channels.get(documento.welcomechannel)) {
                    client.guilds.get(member.guild.id).channels.get(documento.welcomechannel).sendMessage(bemvindo.replace(/{member}/g, `<@${member.id}>`).replace(/{guild}/g, `${member.guild.name}`).replace(/{name}/g, `${member.username}`));
                } else {}

            } else {}

            if(documento.autorole) {

                var cargo = documento.autoroleid
                if(member.guild.roles.get(documento.autoroleid)) {
                    client.guilds.get(member.guild.id).members.get(member.user.id).addRole(client.guilds.get(member.guild.id).roles.get(cargo));
                } else {}

            } else {}

        } else {}

    })
})

client.on('guildMemberRemove', member => {

    database.Guilds.findOne({
        "_id": member.guild.id
    }, function (erro, documento) {

        if(documento) {

            if(documento.byebye) {

                var bbbyebye = documento.byebyemsg
                if(member.guild.channels.get(documento.byebyechannel)) {
                    client.guilds.get(member.guild.id).channels.get(documento.byebyechannel).sendMessage(bbbyebye.replace(/{member}/g, `<@${member.id}>`).replace(/{guild}/g, `${member.guild.name}`).replace(/{name}/g, `${member.username}`));
                } else {}

            } else {}

        } else {}

    })
})

client.on('guildDelete', guild => {

    database.Guilds.findOne({
        "_id": guild.id
    }, function (erro, documento) {
        if(documento) {
            if(documento.roleshop) {
                database.Roleshops.deleteOne({
                    "_id": guild.id
                }, function (erro, documento) {})
                database.Guilds.deleteOne({
                    "_id": guild.id
                }, function (erro, documento) {})
            } else {}
        } else {}
    })

})

fs.readdir("./eventos/", (err, files) => {
    if(err) return console.error("[ERRO] " + err);
    files.forEach(file => {
        let eventFunction = require(`./eventos/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
});
client.on("message", message => {

    let usuario = message.mentions.users.first() ? message.mentions.users.first() : message.author
    let resposta = message.mentions.users.first() ? "Este usuário está proibido de usar qualquer comando do bot." : "Você está proibido de usar qualquer comando do bot."

    if(usuario.bot) return;
    if(message.channel.type == "dm") return;
    if(!message.content.startsWith(config.prefix)) return;

    database.Users.findOne({
        "_id": usuario.id
    }, function (erro, documento) {

        if(documento) {

            if(documento.ban) {
                var desenvolvedores = ["315263840268976128", "399302842688733195", "244489368717230090", "282504900552949760", "260385767895859201", "286144811680137218"]
                if(!desenvolvedores.includes(message.author.id)) {
                message.reply(resposta).then((value) => {
                    setTimeout(() => {
                        value.delete();
                    }, 4000);
                });
            } else {

                let command = message.content.split(" ")[0];
                command = command.slice(config.prefix.length);

                let args = message.content.split(" ").slice(1);

                try {
                    let commandFile = require(`./comandos/prefix-p!/${command}.js`);
                    commandFile.run(client, message, args);
                } catch(err) {
                    console.error("[CONSOLE] " + err);
                }
            }
            } else {

                let command = message.content.split(" ")[0];
                command = command.slice(config.prefix.length);

                let args = message.content.split(" ").slice(1);

                try {
                    let commandFile = require(`./comandos/prefix-p!/${command}.js`);
                    commandFile.run(client, message, args);
                } catch(err) {
                    console.error("[CONSOLE] " + err);
                }

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

});

fs.readdir("./eventos/", (err, files) => {
    if(err) return console.error("[ERRO] " + err);
    files.forEach(file => {
        let eventFunction = require(`./eventos/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
});
client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return
    if(!message.content.startsWith(config.semprefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(config.semprefix.length);

    let args = message.content.split(" ").slice(1);

    try {
        let commandFile = require(`./comandos/sem-prefix/${command}.js`);
        commandFile.run(client, message, args);
    } catch(err) {

    }

});


const prefix = "p!";
const token = process.env.token;
const id = "421759842382774272"

const configs = require('./jsons/config.json');

const teste = configs.teste;

client.login(process.env.token)

client.on("ready", () => {

    let string = ''
    for(var i = 0; i < client.guilds.size; i++) {

        string += "     - " + client.guilds.array()[i].name + " ( " + client.guilds.array()[i].members.size + " users ) ,\n";
    }

    const servidores = string
    var statusIDO = ["idle", "dnd", "online"]

    console.log(`Conectado !`)
    setTimeout(function () {
        console.log(`                   ---== ATHENOS ==---                 \n\Servers: (${client.guilds.size}):\n\n${servidores}`);
    }, 2000)
    client.user.setGame(`Athenos - ${client.users.size} membros em ${client.guilds.size} guilds com ${client.channels.size} canais.`, "https://www.twitch.tv/zmarciogod")
    client.user.setStatus(statusIDO[Math.round(Math.random() * statusIDO.length - 1)]);
    client.guilds.find("id", "399756948951662592").channels.find("id", "402601119320244236").send("**:warning: Dynos reiniciados.**")
    setInterval(() => {
        client.user.setGame(`Athenos - ${client.users.size} membros em ${client.guilds.size} guilds com ${client.channels.size} canais.`, "https://www.twitch.tv/zmarciogod")
        client.user.setStatus(statusIDO[Math.round(Math.random() * statusIDO.length - 1)]);
    }, 1 * 60 * 1000)

});

client.login(token)

client.on("message", (message) => {

    database.Users.findOne({
        "_id": message.author.id
    }, function (erro, documento) {
        if(documento) {
            if(documento.ban) {} else {

                if(message.content.includes("<@!421759842382774272>")) {
                    if(message.channel.type == "dm") return;
                    if(message.author.bot) return;
                    message.reply("**Use p!help para saber meus comandos. :smile:**").then((value) => {
                        setTimeout(() => {
                            value.delete();
                        }, 5000);
                    });
                } else {
                    if(message.content.includes("<@421759842382774272>")) {
                        if(message.channel.type == "dm") return;
                        if(message.author.bot) return;
                        message.reply("**Use p!help para saber meus comandos. :smile:**").then((value) => {
                            setTimeout(() => {
                                value.delete();
                            }, 5000);
                        });
                    }
                }

                if(message.content.startsWith("Athenos")) {
                    clbot.write(message.content.replace("Athenos", ""), (response) => {
                        message.channel.startTyping();
                        setTimeout(() => {
                            message.channel.sendMessage(response.output).catch(console.error);
                            message.channel.stopTyping();
                        }, 1 * 1000);
                    });
                }

            }

        }

    })
})

client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return

    database.Guilds.findOne({
        "_id": message.guild.id
    }, function (serverro, servidorto) {

        if(servidorto) {

            if(servidorto.box) {

                if(servidorto.caixa) {} else {

                    var prc = Math.round(Math.random() * 7500)

                    if(prc == 1670) {
                        servidorto.caixa = true
                        servidorto.caixatipo = "Lendario"
                        servidorto.save()
                        message.reply("**Uma caixa lendaria foi dropada, use `p!getbox` para pegar.**");
                    } else if(prc == 153) {
                        servidorto.caixa = true
                        servidorto.caixatipo = "Epico"
                        servidorto.save()
                        message.reply("**Uma caixa epica foi dropada, use `p!getbox` para pegar.**");
                    } else if(prc == 527) {
                        servidorto.caixa = true
                        servidorto.caixatipo = "Raro"
                        servidorto.save()
                        message.reply("**Uma caixa rara foi dropada, use `p!getbox` para pegar.**");
                    } else if(prc == 2083) {
                        servidorto.caixa = true
                        servidorto.caixatipo = "Comum"
                        servidorto.save()
                        message.reply("**Uma caixa comum foi dropada, use `p!getbox` para pegar.**");
                    } else {}
                }
            } else {}

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
        }

    })

})

var xpCol = new Set()
let xpRDM = Math.round(Math.random() * 35)
let coinsRDM = Math.round(Math.random() * 45)


client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return
    database.Guilds.findOne({
        "_id": message.guild.id
    }, function (serverro, servidorto) {
        if(servidorto) {
            if(servidorto.leveis) {
                if(xpCol.has(message.author.id)) return;
                database.Users.findOne({
                    "_id": message.author.id
                }, function (erro, documento) {
                    if(documento) {
                        if(documento.ban) {} else {
                            var unbug = 370 * documento.level + 1
                            if(documento.xp > unbug) {
                                documento.xp += xpRDM
                                documento.coins += coinsRDM
                                documento.level += 1
                                message.channel.sendMessage(`**Parabéns ${message.author}**, você acabou de subir para o **nível ${documento.level}**!`);
                                documento.xp = 0
                                documento.save()
                                xpCol.add(message.author.id)
                                setTimeout(function () {
                                    xpCol.delete(message.author.id)
                                }, 30 * 1000)
                            } else {
                                documento.xp += xpRDM
                                documento.coins += coinsRDM
                                documento.save()
                                xpCol.add(message.author.id)
                                setTimeout(function () {
                                    xpCol.delete(message.author.id)
                                }, 30 * 1000)
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
                });
            } else {}
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
        }
    });
});

client.on("message", (message) => {
    if(message.channel.type == "dm") return;
    database.Guilds.findOne({
        "_id": message.guild.id
    }, function (serverro, servidorto) {
        if(servidorto) {

            if(servidorto.roleshop) {

                database.Roleshops.findOne({
                    "_id": message.guild.id
                }, function (cerro, cargo) {

                    if(cargo) {

                        if(message.channel.id == cargo.canal) {

                            setTimeout(() => {
                                message.delete();
                            }, 5000);

                        } else {}

                    } else {}

                })

            } else {}

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
        }

    })
})

client.on("message", (message) => {

    if(message.author.bot) return;
    if(message.channel.type == "dm") return
    database.Guilds.findOne({
        "_id": message.guild.id
    }, function (serverro, servidorto) {
        if(servidorto) {

            if(message.content.includes("https://discord.gg/")) {
                if(servidorto.invites) {
                    if(message.member.hasPermission(["MANAGE_MESSAGES"])) {} else {
                        if(message.member && message.member.roles.find("name", "athli")) {} else {
                            message.delete();
                            message.reply("**Sem permissão para enviar links de convite.**").then((value) => {
                                setTimeout(() => {
                                    value.delete();
                                }, 7500);
                            });
                        }
                    }
                } else {}
            } else if(message.content.includes("http://discord.gg/")) {
                if(servidorto.invites) {
                    if(message.member.hasPermission(["MANAGE_MESSAGES"])) {} else {
                        if(message.member && message.member.roles.find("name", "athli")) {} else {
                            message.delete();
                            message.reply("**Sem permissão para enviar links de convite.**").then((value) => {
                                setTimeout(() => {
                                    value.delete();
                                }, 7500);
                            });
                        }
                    }
                } else {}
            }

            if(message.content.includes("https://")) {
                if(servidorto.links) {
                    if(message.member.hasPermission(["MANAGE_MESSAGES"])) {} else {
                        if(message.member && message.member.roles.find("name", "athli")) {} else {
                            message.delete();
                            message.reply("**Sem permissão para enviar links.**").then((value) => {
                                setTimeout(() => {
                                    value.delete();
                                }, 7500);
                            });
                        }
                    }
                } else {}
            } else if(message.content.includes("http://")) {
                if(servidorto.links) {
                    if(message.member.hasPermission(["MANAGE_MESSAGES"])) {} else {
                        if(message.member && message.member.roles.find("name", "athli")) {} else {
                            message.delete();
                            message.reply("**Sem permissão para enviar links.**").then((value) => {
                                setTimeout(() => {
                                    value.delete();
                                }, 7500);
                            });
                        }
                    }
                } else {}
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
        }

    })

})

async function getEval(message, args) {
    if(message.content.includes("token")) return message.reply("**Ta doidão?**");
    let code = args.join(' ');

    try {
        let evaled = await eval(code);

        if(evaled === null) evaled = 'null';
        if(evaled === undefined) evaled = 'undefined';

        var msg12 = `**CÓDIGO:**\n\`\`\`js\n${code}\`\`\`\n**RESULTADO:**\n\`\`\`LDIF\n${evaled}\`\`\``

        message.channel.sendMessage(msg12.replace(/`${process.env.token}`/g, `PORQUEDESEJASABER`))

    } catch(err) {
        message.channel.sendMessage(`**CÓDIGO:**\n\`\`\`js\n${code}\`\`\`\n**ERRO:**\n\`\`\`LDIF\n${err}\`\`\``)
    }


}

client.on('message', message => {
    if(message.content.startsWith(prefix + 'eval') || message.content.startsWith(prefix + 'eval')) {
        var args = message.content.split(' ').slice(1)

        if(message.author.id === "315263840268976128" || message.author.id === '399302842688733195' || message.author.id === '286144811680137218') {
            getEval(message, args);
        } else {
            message.channel.sendMessage(`Ei ${message.author.username}, você não tem permissão para usar este comando!`)
        }
    }
});