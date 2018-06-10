exports.run = (client, message, args) => {

  let paginas = ["- **p!autorole**\n- **p!welcome**\n- **p!byebye**\n- **p!clear**\n- **p!info**", "- **p!help**\n- **p!config**\n- **p!profile**\n- **p!rep**\n- **p!daily**", "- **p!serverinfo**\n- **p!moneytop**\n- **p!ping**\n- **p!memory**\n- **p!doar**", "- **p!getbox**\n- **p!box**\n- **p!filter**\n- **p!gif**\n- **p!avatar**", "- **p!setbackground**\n- **p!roleshop**\n- **p!traduzir**\n- **p!coins**\n- **p!reverse**", "- **p!cat**"];
  let pagina = 1;

  message.reply("**Comandos enviados em sua DM! :envelope_with_arrow:**");
  message.author.sendMessage({
      "embed": {
          "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ ATHENOS ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Aqui está uma lista de meus comandos:**\nㅤ\n**Prefix:** `p!`",
          "color": 55512,
          "timestamp": new Date(),
          "footer": {
              "icon_url": message.author.displayAvatarURL,
              "text": message.author.username
          },
          "thumbnail": {
              "url": "https://i.imgur.com/4JaNmFp.png"
          },
          "fields": [{
              "name": `:bookmark: Pag. ${pagina}/${paginas.length}:`,
              "value": paginas[pagina - 1]
          }]
      }
  }).then(help => {

      setTimeout(() => {
          help.react('⬅');
      }, 500);
      setTimeout(() => {
          help.react('➡');
      }, 1000);

      const collector = help.createReactionCollector((r, u) => (r.emoji.name === '⬅' || r.emoji.name === '➡') && u.id !== client.user.id);

      collector.on('collect', r => {
          switch(r.emoji.name) {

          case '⬅':

              if(pagina == 1) {
                pagina = paginas.length
                help.edit({
                    "embed": {
                        "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ ATHENOS ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Aqui está uma lista de meus comandos:**\nㅤ\n**Prefix:** `p!`",
                        "color": 55512,
                        "timestamp": new Date(),
                        "footer": {
                            "icon_url": message.author.displayAvatarURL,
                            "text": message.author.username
                        },
                        "thumbnail": {
                            "url": "https://i.imgur.com/4JaNmFp.png"
                        },
                        "fields": [{
                            "name": `:bookmark: Pag. ${pagina}/${paginas.length}:`,
                            "value": paginas[pagina - 1]
                        }]
                    }
                });
                r.users.filter(u => r.remove(u.id !== client.user.id));
              } else {
                  pagina = pagina - 1
                  help.edit({
                      "embed": {
                          "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ ATHENOS ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Aqui está uma lista de meus comandos:**\nㅤ\n**Prefix:** `p!`",
                          "color": 55512,
                          "timestamp": new Date(),
                          "footer": {
                              "icon_url": message.author.displayAvatarURL,
                              "text": message.author.username
                          },
                          "thumbnail": {
                              "url": "https://i.imgur.com/4JaNmFp.png"
                          },
                          "fields": [{
                              "name": `:bookmark: Pag. ${pagina}/${paginas.length}:`,
                              "value": paginas[pagina - 1]
                          }]
                      }
                  });
                  r.users.filter(u => r.remove(u.id !== client.user.id));
              }

              break;

          case '➡':

              if(pagina + 1 > paginas.length) {
                pagina = 1
                help.edit({
                    "embed": {
                        "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ ATHENOS ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Aqui está uma lista de meus comandos:**\nㅤ\n**Prefix:** `p!`",
                        "color": 55512,
                        "timestamp": new Date(),
                        "footer": {
                            "icon_url": message.author.displayAvatarURL,
                            "text": message.author.username
                        },
                        "thumbnail": {
                            "url": "https://i.imgur.com/4JaNmFp.png"
                        },
                        "fields": [{
                            "name": `:bookmark: Pag. ${pagina}/${paginas.length}:`,
                            "value": paginas[pagina - 1]
                        }]
                    }
                });
                r.users.filter(u => r.remove(u.id !== client.user.id));
              } else {
                  pagina = pagina + 1
                  help.edit({
                      "embed": {
                          "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ ATHENOS ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Aqui está uma lista de meus comandos:**\nㅤ\n**Prefix:** `p!`",
                          "color": 55512,
                          "timestamp": new Date(),
                          "footer": {
                              "icon_url": message.author.displayAvatarURL,
                              "text": message.author.username
                          },
                          "thumbnail": {
                              "url": "https://i.imgur.com/4JaNmFp.png"
                          },
                          "fields": [{
                              "name": `:bookmark: Pag. ${pagina}/${paginas.length}:`,
                              "value": paginas[pagina - 1]
                          }]
                      }
                  });
                  r.users.filter(u => r.remove(u.id !== client.user.id));
              }

              break;

          }
      })

      setTimeout(() => {
          help.delete();
      }, 1 * 60 * 1000);

  })

}