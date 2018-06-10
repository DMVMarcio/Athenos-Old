var database = require("../../database.js")
var devolucao = new Set()

exports.run = (client, message, args) => {


    let razaou = args.slice(0).join(' ');
    let razaod = args.slice(1).join(' ');
    let razaot = args.slice(2).join(' ');
    let razaoq = args.slice(3).join(' ');


    database.Guilds.findOne({
        "_id": message.guild.id
    }, function (erro, documento) {

        if(documento) {

            if(documento.roleshop) {

                database.Roleshops.findOne({
                    "_id": message.guild.id
                }, function (cerro, cargo) {

                    if(!razaou.length < 1) {

                        if(message.channel.id == cargo.canal) {

                            database.Users.findOne({
                                "_id": message.author.id
                            }, function (uerro, usuario) {

                                if(usuario) {

                                    database.Users.findOne({
                                        "_id": message.guild.ownerID
                                    }, function (derro, dono) {

                                        if(dono) {

                                            if(message.content.startsWith("p!roleshop info")) {

                                                message.channel.sendMessage({
                                                    "embed": {
                                                        "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ ATHENOS ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Canal:** " + `<#${cargo.canal}>` + "\nㅤ\n**Cargos:**\nㅤ\n" + `**1** = <@&${cargo.cargo1}> - **${cargo.cargo1preco}** coins\n**2** = <@&${cargo.cargo2}> - **${cargo.cargo2preco}** coins\n**1** = <@&${cargo.cargo3}> - **${cargo.cargo3preco}** coins\n**4** = <@&${cargo.cargo4}> - **${cargo.cargo4preco}** coins\n**5** = <@&${cargo.cargo5}> - **${cargo.cargo5preco}** coins\n**6** = <@&${cargo.cargo6}> - **${cargo.cargo6preco}** coins\n**7** = <@&${cargo.cargo7}> - **${cargo.cargo7preco}** coins\n**8** = <@&${cargo.cargo8}> - **${cargo.cargo8preco}** coins\n**9** = <@&${cargo.cargo9}> - **${cargo.cargo9preco}** coins\n**10** = <@&${cargo.cargo10}> - **${cargo.cargo10preco}** coins`,
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

                                            if(message.content.startsWith("p!roleshop set")) {

                                                if(!razaod.length < 1) {

                                                    if(message.mentions.roles.size > 0) {

                                                        if(!razaoq.length < 1) {

                                                            if(parseInt(args[3]) > 0) {

                                                                if(parseInt(args[1]) > 0) {

                                                                    if(parseInt(args[1]) < 11) {

                                                                        if(parseInt(args[1]) == 1) {
                                                                            cargo.cargo1 = message.mentions.roles.first().id
                                                                            cargo.cargo1preco = parseInt(args[3])
                                                                            cargo.save();
                                                                            message.reply("**Cargo setado.**");
                                                                        } else if(parseInt(args[1]) == 2) {
                                                                            cargo.cargo2 = message.mentions.roles.first().id
                                                                            cargo.cargo2preco = parseInt(args[3])
                                                                            cargo.save();
                                                                            message.reply("**Cargo setado.**");
                                                                        } else if(parseInt(args[1]) == 3) {
                                                                            cargo.cargo3 = message.mentions.roles.first().id
                                                                            cargo.cargo3preco = parseInt(args[3])
                                                                            cargo.save();
                                                                            message.reply("**Cargo setado.**");
                                                                        } else if(parseInt(args[1]) == 4) {
                                                                            cargo.cargo4 = message.mentions.roles.first().id
                                                                            cargo.cargo4preco = parseInt(args[3])
                                                                            cargo.save();
                                                                            message.reply("**Cargo setado.**");
                                                                        } else if(parseInt(args[1]) == 5) {
                                                                            cargo.cargo5 = message.mentions.roles.first().id
                                                                            cargo.cargo5preco = parseInt(args[3])
                                                                            cargo.save();
                                                                            message.reply("**Cargo setado.**");
                                                                        } else if(parseInt(args[1]) == 6) {
                                                                            cargo.cargo6 = message.mentions.roles.first().id
                                                                            cargo.cargo6preco = parseInt(args[3])
                                                                            cargo.save();
                                                                            message.reply("**Cargo setado.**");
                                                                        } else if(parseInt(args[1]) == 7) {
                                                                            cargo.cargo7 = message.mentions.roles.first().id
                                                                            cargo.cargo7preco = parseInt(args[3])
                                                                            cargo.save();
                                                                            message.reply("**Cargo setado.**");
                                                                        } else if(parseInt(args[1]) == 8) {
                                                                            cargo.cargo8 = message.mentions.roles.first().id
                                                                            cargo.cargo8preco = parseInt(args[3])
                                                                            cargo.save();
                                                                            message.reply("**Cargo setado.**");
                                                                        } else if(parseInt(args[1]) == 9) {
                                                                            cargo.cargo9 = message.mentions.roles.first().id
                                                                            cargo.cargo9preco = parseInt(args[3])
                                                                            cargo.save();
                                                                            message.reply("**Cargo setado.**");
                                                                        } else if(parseInt(args[1]) == 10) {
                                                                            cargo.cargo10 = message.mentions.roles.first().id
                                                                            cargo.cargo10preco = parseInt(args[3])
                                                                            cargo.save();
                                                                            message.reply("**Cargo setado.**");
                                                                        }

                                                                    } else {
                                                                        message.reply("**O número do cargo deve ser de 1 a 10**");
                                                                    }

                                                                } else {
                                                                    message.reply("**O número do cargo deve ser de 1 a 10**");
                                                                }

                                                            } else {
                                                                message.reply("**O preço não pode ser menor que 0.**");
                                                            }

                                                        } else {
                                                            message.reply("**Diga o preço do cargo.**")
                                                        }

                                                    } else {
                                                        message.reply("**Mencione o cargo que deseja setar.**");
                                                    }

                                                } else {
                                                    message.reply("**Diga um número de 1 a 10.**");
                                                }

                                            }

                                            if(message.content.startsWith("p!roleshop devo")) {
                                                if(devolucao.has(message.author.id + cargo.cargo1 + message.guild.id + cargo.cargo1preco)) {
                                                    usuario.coins += cargo.cargo1preco
                                                    usuario.save();
                                                    setTimeout(() => {
                                                    dono.coins -= cargo.cargo1preco
                                                    dono.save();
                                                    }, 5000);
                                                    message.guild.members.get(message.author.id).removeRole(message.guild.roles.get(cargo.cargo1));
                                                    devolucao.delete(message.author.id + cargo.cargo1 + message.guild.id + cargo.cargo1preco)
                                                    message.reply("**Seu dinheiro foi devolvido.**");
                                                } else if(devolucao.has(message.author.id + cargo.cargo2 + message.guild.id + cargo.cargo2preco)) {
                                                    usuario.coins += cargo.cargo2preco
                                                    usuario.save();
                                                    setTimeout(() => {
                                                    dono.coins -= cargo.cargo2preco
                                                    dono.save();
                                                    }, 5000);
                                                    message.guild.members.get(message.author.id).removeRole(message.guild.roles.get(cargo.cargo2));
                                                    devolucao.delete(message.author.id + cargo.cargo2 + message.guild.id + cargo.cargo2preco)
                                                    message.reply("**Seu dinheiro foi devolvido.**");
                                                } else if(devolucao.has(message.author.id + cargo.cargo3 + message.guild.id + cargo.cargo3preco)) {
                                                    usuario.coins += cargo.cargo3preco
                                                    usuario.save();
                                                    setTimeout(() => {
                                                    dono.coins -= cargo.cargo3preco
                                                    dono.save();
                                                    }, 5000);
                                                    message.guild.members.get(message.author.id).removeRole(message.guild.roles.get(cargo.cargo3));
                                                    devolucao.delete(message.author.id + cargo.cargo3 + message.guild.id + cargo.cargo3preco)
                                                    message.reply("**Seu dinheiro foi devolvido.**");
                                                } else if(devolucao.has(message.author.id + cargo.cargo4 + message.guild.id + cargo.cargo4preco)) {
                                                    usuario.coins += cargo.cargo4preco
                                                    usuario.save();
                                                    setTimeout(() => {
                                                    dono.coins -= cargo.cargo4preco
                                                    dono.save();
                                                    }, 5000);
                                                    message.guild.members.get(message.author.id).removeRole(message.guild.roles.get(cargo.cargo4));
                                                    devolucao.delete(message.author.id + cargo.cargo4 + message.guild.id + cargo.cargo4preco)
                                                    message.reply("**Seu dinheiro foi devolvido.**");
                                                } else if(devolucao.has(message.author.id + cargo.cargo5 + message.guild.id + cargo.cargo5preco)) {
                                                    usuario.coins += cargo.cargo5preco
                                                    usuario.save();
                                                    setTimeout(() => {
                                                    dono.coins -= cargo.cargo5preco
                                                    dono.save();
                                                    }, 5000);
                                                    message.guild.members.get(message.author.id).removeRole(message.guild.roles.get(cargo.cargo5));
                                                    devolucao.delete(message.author.id + cargo.cargo5 + message.guild.id + cargo.cargo5preco)
                                                    message.reply("**Seu dinheiro foi devolvido.**");
                                                } else if(devolucao.has(message.author.id + cargo.cargo6 + message.guild.id + cargo.cargo6preco)) {
                                                    usuario.coins += cargo.cargo6preco
                                                    usuario.save();
                                                    setTimeout(() => {
                                                    dono.coins -= cargo.cargo6preco
                                                    dono.save();
                                                    }, 5000);
                                                    message.guild.members.get(message.author.id).removeRole(message.guild.roles.get(cargo.cargo6));
                                                    devolucao.delete(message.author.id + cargo.cargo6 + message.guild.id + cargo.cargo6preco)
                                                    message.reply("**Seu dinheiro foi devolvido.**");
                                                } else if(devolucao.has(message.author.id + cargo.cargo7 + message.guild.id + cargo.cargo7preco)) {
                                                    usuario.coins += cargo.cargo7preco
                                                    usuario.save();
                                                    setTimeout(() => {
                                                    dono.coins -= cargo.cargo7preco
                                                    dono.save();
                                                    }, 5000);
                                                    message.guild.members.get(message.author.id).removeRole(message.guild.roles.get(cargo.cargo7));
                                                    devolucao.delete(message.author.id + cargo.cargo7 + message.guild.id + cargo.cargo7preco)
                                                    message.reply("**Seu dinheiro foi devolvido.**");
                                                } else if(devolucao.has(message.author.id + cargo.cargo8 + message.guild.id + cargo.cargo8preco)) {
                                                    usuario.coins += cargo.cargo8preco
                                                    usuario.save();
                                                    setTimeout(() => {
                                                    dono.coins -= cargo.cargo8preco
                                                    dono.save();
                                                    }, 5000);
                                                    message.guild.members.get(message.author.id).removeRole(message.guild.roles.get(cargo.cargo8));
                                                    devolucao.delete(message.author.id + cargo.cargo9 + message.guild.id + cargo.cargo9preco)
                                                    message.reply("**Seu dinheiro foi devolvido.**");
                                                } else if(devolucao.has(message.author.id + cargo.cargo9 + message.guild.id + cargo.cargo9preco)) {
                                                    usuario.coins += cargo.cargo9preco
                                                    usuario.save();
                                                    setTimeout(() => {
                                                    dono.coins -= cargo.cargo9preco
                                                    dono.save();
                                                    }, 5000);
                                                    message.guild.members.get(message.author.id).removeRole(message.guild.roles.get(cargo.cargo9));
                                                    message.reply("**Seu dinheiro foi devolvido.**");
                                                } else if(devolucao.has(message.author.id + cargo.cargo10 + message.guild.id + cargo.cargo10preco)) {
                                                    usuario.coins += cargo.cargo10preco
                                                    usuario.save();
                                                    setTimeout(() => {
                                                    dono.coins -= cargo.cargo10preco
                                                    dono.save();
                                                    }, 5000);
                                                    message.guild.members.get(message.author.id).removeRole(message.guild.roles.get(cargo.cargo10));
                                                    devolucao.delete(message.author.id + cargo.cargo10 + message.guild.id + cargo.cargo10preco)
                                                    message.reply("**Seu dinheiro foi devolvido.**");
                                                } else {
                                                    message.reply("**Não há nada para ser devolvido.**");
                                                }
                                            }

                                            if(message.content.startsWith("p!roleshop remove")) {

                                                if(!razaod.length < 1) {

                                                    if(parseInt(args[1]) > 0) {

                                                        if(parseInt(args[1]) < 11) {

                                                            if(parseInt(args[1]) == 1) {
                                                                cargo.cargo1 = "Nenhum"
																cargo.cargo1preco = "0"
                                                                cargo.save();
                                                            } else if(parseInt(args[1]) == 2) {
                                                                cargo.cargo2 = "Nenhum"
																cargo.cargo2preco = "0"
                                                                cargo.save();
                                                            } else if(parseInt(args[1]) == 3) {
                                                                cargo.cargo3 = "Nenhum"
																cargo.cargo3preco = "0"
                                                                cargo.save();
                                                            } else if(parseInt(args[1]) == 4) {
                                                                cargo.cargo4 = "Nenhum"
																cargo.cargo4preco = "0"
                                                                cargo.save();
                                                            } else if(parseInt(args[1]) == 5) {
                                                                cargo.cargo5 = "Nenhum"
																cargo.cargo5preco = "0"
                                                                cargo.save();
                                                            } else if(parseInt(args[1]) == 6) {
                                                                cargo.cargo6 = "Nenhum"
																cargo.cargo6preco = "0"
                                                                cargo.save();
                                                            } else if(parseInt(args[1]) == 7) {
                                                                cargo.cargo7 = "Nenhum"
																cargo.cargo7preco = "0"
                                                                cargo.save();
                                                            } else if(parseInt(args[1]) == 8) {
                                                                cargo.cargo8 = "Nenhum"
																cargo.cargo8preco = "0"
                                                                cargo.save();
                                                            } else if(parseInt(args[1]) == 9) {
                                                                cargo.cargo9 = "Nenhum"
																cargo.cargo9preco = "0"
                                                                cargo.save();
                                                            } else if(parseInt(args[1]) == 10) {
                                                                cargo.cargo10 = "Nenhum"
																cargo.cargo10preco = "0"
                                                                cargo.save();
                                                            }

                                                            message.reply("**Removido com sucesso.**");

                                                        } else {
                                                            message.reply("**Entre 0 e 10**");
                                                        }

                                                    } else {
                                                        message.reply("**Entre 0 e 10.**");
                                                    }

                                                } else {
                                                    message.reply("**Diga qual cargo quer remover da loja.**");
                                                }

                                            }

                                            if(message.content.startsWith("p!roleshop shop")) {

                                                if(message.author.id == dono._id) {
                                                    message.reply("**Apenas membros do servidor podem usar este comando.**");
                                                } else {

                                                if(!razaod.length < 1) {

                                                    if(parseInt(args[1]) > 0) {

                                                        if(parseInt(args[1]) < 11) {

                                                            var valor;
                                                            var tem;
                                                            var dinheiro;

                                                            if(parseInt(args[1]) == 1) {
                                                                if(message.guild.members.get(message.author.id).roles.get(cargo.cargo1)) {
                                                                    tem = "true"
                                                                } else {
                                                                    tem = "false"
                                                                    valor = cargo.cargo1preco
                                                                    if(usuario.coins < cargo.cargo1preco) {
                                                                        dinheiro = "false"
                                                                    } else {
                                                                        dinheiro = "true"
                                                                        usuario.coins -= cargo.cargo1preco
                                                                        usuario.save();
                                                                        setTimeout(() => {
                                                                        dono.coins += cargo.cargo1preco
                                                                        dono.save();
                                                                        }, 5000);
                                                                        message.guild.members.get(message.author.id).addRole(message.guild.roles.get(cargo.cargo1));
                                                                        devolucao.add(message.author.id + cargo.cargo1 + message.guild.id + cargo.cargo1preco)
                                                                        setTimeout(function () {
                                                                            devolucao.delete(message.author.id + cargo.cargo1 + message.guild.id + cargo.cargo1preco)
                                                                        }, 1 * 1000 * 60)
                                                                    }
                                                                }
                                                            } else if(parseInt(args[1]) == 2) {
                                                                if(message.guild.members.get(message.author.id).roles.get(cargo.cargo2)) {
                                                                    tem = "true"
                                                                } else {
                                                                    tem = "false"
                                                                    valor = cargo.cargo2preco
                                                                    if(usuario.coins < cargo.cargo2preco) {
                                                                        dinheiro = "false"
                                                                    } else {
                                                                        dinheiro = "true"
                                                                        usuario.coins -= cargo.cargo2preco
                                                                        usuario.save();
                                                                        setTimeout(() => {
                                                                        dono.coins += cargo.cargo2preco
                                                                        dono.save();
                                                                        }, 5000);
                                                                        message.guild.members.get(message.author.id).addRole(message.guild.roles.get(cargo.cargo2));
                                                                        devolucao.add(message.author.id + cargo.cargo2 + message.guild.id + cargo.cargo2preco)
                                                                        setTimeout(function () {
                                                                            devolucao.delete(message.author.id + cargo.cargo2 + message.guild.id + cargo.cargo2preco)
                                                                        }, 1 * 1000 * 60)
                                                                    }
                                                                }
                                                            } else if(parseInt(args[1]) == 3) {
                                                                if(message.guild.members.get(message.author.id).roles.get(cargo.cargo3)) {
                                                                    tem = "true"
                                                                } else {
                                                                    tem = "false"
                                                                    valor = cargo.cargo3preco
                                                                    if(usuario.coins < cargo.cargo3preco) {
                                                                        dinheiro = "false"
                                                                    } else {
                                                                        dinheiro = "true"
                                                                        usuario.coins -= cargo.cargo3preco
                                                                        usuario.save();
                                                                        setTimeout(() => {
                                                                        dono.coins += cargo.cargo3preco
                                                                        dono.save();
                                                                        }, 5000);
                                                                        message.guild.members.get(message.author.id).addRole(message.guild.roles.get(cargo.cargo3));
                                                                        devolucao.add(message.author.id + cargo.cargo3 + message.guild.id + cargo.cargo3preco)
                                                                        setTimeout(function () {
                                                                            devolucao.delete(message.author.id + cargo.cargo3 + message.guild.id + cargo.cargo3preco)
                                                                        }, 1 * 1000 * 60)
                                                                    }
                                                                }
                                                            } else if(parseInt(args[1]) == 4) {
                                                                if(message.guild.members.get(message.author.id).roles.get(cargo.cargo4)) {
                                                                    tem = "true"
                                                                } else {
                                                                    tem = "false"
                                                                    valor = cargo.cargo4preco
                                                                    if(usuario.coins < cargo.cargo4preco) {
                                                                        dinheiro = "false"
                                                                    } else {
                                                                        dinheiro = "true"
                                                                        usuario.coins -= cargo.cargo4preco
                                                                        usuario.save();
                                                                        setTimeout(() => {
                                                                        dono.coins += cargo.cargo4preco
                                                                        dono.save();
                                                                        }, 5000);
                                                                        message.guild.members.get(message.author.id).addRole(message.guild.roles.get(cargo.cargo4));
                                                                        devolucao.add(message.author.id + cargo.cargo4 + message.guild.id + cargo.cargo4preco)
                                                                        setTimeout(function () {
                                                                            devolucao.delete(message.author.id + cargo.cargo4 + message.guild.id + cargo.cargo4preco)
                                                                        }, 1 * 1000 * 60)
                                                                    }
                                                                }
                                                            } else if(parseInt(args[1]) == 5) {
                                                                if(message.guild.members.get(message.author.id).roles.get(cargo.cargo5)) {
                                                                    tem = "true"
                                                                } else {
                                                                    tem = "false"
                                                                    valor = cargo.cargo5preco
                                                                    if(usuario.coins < cargo.cargo5preco) {
                                                                        dinheiro = "false"
                                                                    } else {
                                                                        dinheiro = "true"
                                                                        usuario.coins -= cargo.cargo5preco
                                                                        usuario.save();
                                                                        setTimeout(() => {
                                                                        dono.coins += cargo.cargo5preco
                                                                        dono.save();
                                                                        }, 5000);
                                                                        message.guild.members.get(message.author.id).addRole(message.guild.roles.get(cargo.cargo5));
                                                                        devolucao.add(message.author.id + cargo.cargo5 + message.guild.id + cargo.cargo5preco)
                                                                        setTimeout(function () {
                                                                            devolucao.delete(message.author.id + cargo.cargo5 + message.guild.id + cargo.cargo5preco)
                                                                        }, 1 * 1000 * 60)
                                                                    }
                                                                }
                                                            } else if(parseInt(args[1]) == 6) {
                                                                if(message.guild.members.get(message.author.id).roles.get(cargo.cargo6)) {
                                                                    tem = "true"
                                                                } else {
                                                                    tem = "false"
                                                                    valor = cargo.cargo6preco
                                                                    if(usuario.coins < cargo.cargo6preco) {
                                                                        dinheiro = "false"
                                                                    } else {
                                                                        dinheiro = "true"
                                                                        usuario.coins -= cargo.cargo6preco
                                                                        usuario.save();
                                                                        setTimeout(() => {
                                                                        dono.coins += cargo.cargo6preco
                                                                        dono.save();
                                                                        }, 5000);
                                                                        message.guild.members.get(message.author.id).addRole(message.guild.roles.get(cargo.cargo6));
                                                                        devolucao.add(message.author.id + cargo.cargo6 + message.guild.id + cargo6preco)
                                                                        setTimeout(function () {
                                                                            devolucao.delete(message.author.id + cargo.cargo6 + message.guild.id + cargo.cargo6preco)
                                                                        }, 1 * 1000 * 60)
                                                                    }
                                                                }
                                                            } else if(parseInt(args[1]) == 7) {
                                                                if(message.guild.members.get(message.author.id).roles.get(cargo.cargo7)) {
                                                                    tem = "true"
                                                                } else {
                                                                    tem = "false"
                                                                    valor = cargo.cargo7preco
                                                                    if(usuario.coins < cargo.cargo7preco) {
                                                                        dinheiro = "false"
                                                                    } else {
                                                                        dinheiro = "true"
                                                                        usuario.coins -= cargo.cargo7preco
                                                                        usuario.save();
                                                                        setTimeout(() => {
                                                                        dono.coins += cargo.cargo7preco
                                                                        dono.save();
                                                                        }, 5000);
                                                                        message.guild.members.get(message.author.id).addRole(message.guild.roles.get(cargo.cargo7));
                                                                        devolucao.add(message.author.id + cargo.cargo7 + message.guild.id + cargo.cargo7preco)
                                                                        setTimeout(function () {
                                                                            devolucao.delete(message.author.id + cargo.cargo7 + message.guild.id + cargo.cargo7preco)
                                                                        }, 1 * 1000 * 60)
                                                                    }
                                                                }
                                                            } else if(parseInt(args[1]) == 8) {
                                                                if(message.guild.members.get(message.author.id).roles.get(cargo.cargo8)) {
                                                                    tem = "true"
                                                                } else {
                                                                    tem = "false"
                                                                    valor = cargo.cargo8preco
                                                                    if(usuario.coins < cargo.cargo8preco) {
                                                                        dinheiro = "false"
                                                                    } else {
                                                                        dinheiro = "true"
                                                                        usuario.coins -= cargo.cargo8preco
                                                                        usuario.save();
                                                                        setTimeout(() => {
                                                                        dono.coins += cargo.cargo8preco
                                                                        dono.save();
                                                                        }, 5000);
                                                                        message.guild.members.get(message.author.id).addRole(message.guild.roles.get(cargo.cargo8));
                                                                        devolucao.add(message.author.id + cargo.cargo8 + message.guild.id + cargo.cargo8preco)
                                                                        setTimeout(function () {
                                                                            devolucao.delete(message.author.id + cargo.cargo8 + message.guild.id + cargo.cargo8preco)
                                                                        }, 1 * 1000 * 60)
                                                                    }
                                                                }
                                                            } else if(parseInt(args[1]) == 9) {
                                                                if(message.guild.members.get(message.author.id).roles.get(cargo.cargo9)) {
                                                                    tem = "true"
                                                                } else {
                                                                    tem = "false"
                                                                    valor = cargo.cargo9preco
                                                                    if(usuario.coins < cargo.cargo9preco) {
                                                                        dinheiro = "false"
                                                                    } else {
                                                                        dinheiro = "true"
                                                                        usuario.coins -= cargo.cargo9preco
                                                                        usuario.save();
                                                                        setTimeout(() => {
                                                                        dono.coins += cargo.cargo9preco
                                                                        dono.save();
                                                                        }, 5000);
                                                                        message.guild.members.get(message.author.id).addRole(message.guild.roles.get(cargo.cargo9));
                                                                        devolucao.add(message.author.id + cargo.cargo9 + message.guild.id + cargo.cargo9preco)
                                                                        setTimeout(function () {
                                                                            devolucao.delete(message.author.id + cargo.cargo9 + message.guild.id + cargo.cargo9preco)
                                                                        }, 1 * 1000 * 60)
                                                                    }
                                                                }
                                                            } else if(parseInt(args[1]) == 10) {
                                                                if(message.guild.members.get(message.author.id).roles.get(cargo.cargo10)) {
                                                                    tem = "true"
                                                                } else {
                                                                    tem = "false"
                                                                    valor = cargo.cargo10preco
                                                                    if(usuario.coins < cargo.cargo10preco) {
                                                                        dinheiro = "false"
                                                                    } else {
                                                                        dinheiro = "true"
                                                                        usuario.coins -= cargo.cargo10preco
                                                                        usuario.save();
                                                                        setTimeout(() => {
                                                                        dono.coins += cargo.cargo10preco
                                                                        dono.save();
                                                                        }, 5000);
                                                                        message.guild.members.get(message.author.id).addRole(message.guild.roles.get(cargo.cargo10));
                                                                        devolucao.add(message.author.id + cargo.cargo10 + message.guild.id + cargo.cargo10preco)
                                                                        setTimeout(function () {
                                                                            devolucao.delete(message.author.id + cargo.cargo10 + message.guild.id + cargo.cargo10preco)
                                                                        }, 1 * 1000 * 60)
                                                                    }
                                                                }
                                                            }

                                                            if(dinheiro == "true") {
                                                                if(tem == "false") {
                                                                    message.reply(`**Você acaba de gastar ${valor} coins. Você pode pedir seu dinheiro de volta usando ` + "`p!roleshop devo`" + ` ( APENAS 1 MINUTO ).**`);
                                                                } else {
                                                                    message.reply("**Você já possui esse cargo.**");
                                                                }
                                                            } else {
                                                                message.reply("**Dinheiro insuficiente.**");
                                                            }

                                                        } else {
                                                            message.reply("**Entre 0 e 10**");
                                                        }

                                                    } else {
                                                        message.reply("**Entre 0 e 10.**");
                                                    }

                                                } else {
                                                    message.reply("**Diga o número do item.**")
                                                }
                                            }
                                            }

                                        } else {
                                            var pessoa = new database.Users({
                                                _id: message.guild.ownerID,
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
                            message.reply(`**Os comandos só podem ser utilizados no canal <#${cargo.canal}>.**`);
                        }

                    } else {
                        message.reply({
                            "embed": {
                                "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ ATHENOS ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Como usar:**\n```\np!roleshop shop <1 a 10> (assim você compra o cargo)\np!roleshop info\np!roleshop remove <1 a 10>\np!roleshop set <1 a 10> <menção> <preço>```",
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

                })

            } else {
                message.reply("**Roleshop está desativado no servidor, use `p!config roleshop` para ativar.**");
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