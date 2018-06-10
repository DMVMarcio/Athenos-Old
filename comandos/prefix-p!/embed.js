exports.run = (client, message, args) => {


    let razaou = args.slice(0).join(' ');

    if (!message.member.hasPermission(["ADMINISTRATOR"])) return message.reply("**Você não tem permissão para enviar uma embed!**");

    if (!razaou.length < 1) {
        message.channel.sendMessage({
            "embed": {
              "description": message.content.replace("s&embed ", ""),
              "color": 13828096
            }
          });
    } else {
        message.reply("**Diga oque quer na embed.**");
    }

}