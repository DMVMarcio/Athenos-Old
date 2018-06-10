exports.run = (client, message, args) => {

    let user = message.mentions.users.first();
    let razaou = args.slice(0).join(' ');

    if (!razaou.length < 1) {

        if (message.mentions.users.size < 1) {

            if(client.users.get(args[0])){
                message.channel.sendMessage({
                    "embed": {
                      "description": `:frame_photo: **Avatar de ${client.guilds.get(message.guild.id).members.get(args[0]).user.username}:**`,
                      "color": 55512,
                      "timestamp": new Date(),
                      "footer": {
                        "icon_url": message.author.displayAvatarURL,
                        "text": message.author.username
                      },
                      "image": {
                        "url": client.guilds.get(message.guild.id).members.get(args[0]).user.displayAvatarURL
                      }
                    }
                  });
            } else {
                if(client.guilds.get(message.guild.id).members.filter(mem=>{mem.displayName != message.content.replace("p!avatar ", "")})){
                    message.channel.sendMessage({
                        "embed": {
                          "description": `:frame_photo: **Avatar de ${client.guilds.get(message.guild.id).members.filter(mem=>{mem.displayName != message.content.replace("p!avatar ", "")}).user.username}:**`,
                          "color": 55512,
                          "timestamp": new Date(),
                          "footer": {
                            "icon_url": message.author.displayAvatarURL,
                            "text": message.author.username
                          },
                          "image": {
                            "url": client.guilds.get(message.guild.id).members.filter(mem=>{mem.displayName != message.content.replace("p!avatar ", "")}).user.displayAvatarURL
                          }
                        }
                      });
                } else {
                    message.reply("**:x: O usuário não foi encontrado no servidor.**");
                }
            }

        } else {
            message.channel.sendMessage({
                "embed": {
                  "description": `:frame_photo: **Avatar de ${message.mentions.users.first().username}:**`,
                  "color": 55512,
                  "timestamp": new Date(),
                  "footer": {
                    "icon_url": message.author.displayAvatarURL,
                    "text": message.author.username
                  },
                  "image": {
                    "url": message.mentions.users.first().displayAvatarURL
                  }
                }
              });
        }

    } else {
        message.channel.sendMessage({
            "embed": {
              "description": `:frame_photo: **Avatar de ${message.author.username}:**`,
              "color": 55512,
              "timestamp": new Date(),
              "footer": {
                "icon_url": message.author.displayAvatarURL,
                "text": message.author.username
              },
              "image": {
                "url": message.author.displayAvatarURL
              }
            }
          });
    }

}