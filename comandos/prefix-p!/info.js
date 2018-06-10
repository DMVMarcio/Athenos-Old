const os = require('os-utils');

exports.run = (client, message, args) => {

    var marcio = client.guilds.get("399756948951662592").members.get("315263840268976128").user.tag
    var julia = client.guilds.get("399756948951662592").members.get("399302842688733195").user.tag
    var ana = client.guilds.get("399756948951662592").members.get("260385767895859201").user.tag
    var adriano = client.guilds.get("399756948951662592").members.get("244489368717230090").user.tag
    var zagrion = client.guilds.get("399756948951662592").members.get("286144811680137218").user.tag
    var natsu = client.guilds.get("399756948951662592").members.get("282504900552949760").user.tag

    String.prototype.toHHMMSS = function () {
      var sec_num = parseInt(this, 10); 
      var hours   = Math.floor(sec_num / 3600);
      var days   = Math.floor(hours / 24);
      var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
      var seconds = sec_num - (hours * 3600) - (minutes * 60);
      if (hours   < 10) {hours   = "0"+hours;}
      if (minutes < 10) {minutes = "0"+minutes;}
      if (seconds < 10) {seconds = "0"+seconds;}
      var time    = "- **" + hours+'** horas\n- **'+minutes+'** minutos\n- **'+seconds+'** segundos';
          days > 1 ? time = days+" dias " : time = time
      return time;
  };

    message.channel.sendMessage({
        "embed": {
          "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ ATHENOS ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\nOlá, sou **Athenos**, um bot simples para discord, aqui estão algumas informações sobre mim:\nㅤ",
          "color": 55512,
          "timestamp": new Date(),
          "footer": {
            "icon_url": message.author.displayAvatarURL,
            "text": message.author.username
          },
          "thumbnail": {
            "url": "https://i.imgur.com/4JaNmFp.png"
          },
          "fields": [
            {
              "name": ":bust_in_silhouette: Donos:",
              "value": `- **${marcio}**\n- **${julia}**\n- **${zagrion}**`,
              "inline": true
            },
            {
              "name": ":tools: Ajudantes:",
              "value": `- **${adriano}**\n- **${ana}**\n- **${natsu}**`,
              "inline": true
            },
            {
              "name": ":trident: Status:",
              "value": `- **${Number(client.guilds.size).toLocaleString()}** guilds\n- **${Number(client.channels.size).toLocaleString()}** channels\n- **${Number(client.users.size).toLocaleString()}** users\n- **${Number(client.emojis.size).toLocaleString()}** emojis`,
              "inline": true
            },
            {
              "name": ":tools:  Links:",
              "value": "- **[Bot](https://discordapp.com/oauth2/authorize?client_id=421759842382774272&scope=bot&permissions=2146958591)**\n- **[Servidor](https://discord.gg/Ez8PyvA)**\n- **[GitHub](https://github.com/DMVMarcio/Athenos-Publico)**\n- **[Discord Bot List](https://discordbots.org/bot/421759842382774272)**",
              "inline": true
            },
            {
              "name": ":clock1: Uptime:",
              "value": `${os.processUptime().toString().toHHMMSS()}`,
              "inline": true
            },
            {
              "name": ":books: Info:",
              "value": `- **11.3.0** discord.js\n- **8.9.4** node.js\n- **${(Date.now() - message.createdTimestamp)}** ms`,
              "inline": true
            }
          ]
        }
      });

}
