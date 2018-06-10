const gifSearch = require("gif-search");

exports.run = (client, message, args) => {

    let razaou = args.slice(0).join(' ');


    if(!razaou.length < 1) {

        gifSearch.random(message.content.replace("p!gif", "")).then(
            gifUrl => message.channel.sendMessage({
                "embed": {
                    "title": message.content.replace("p!gif", ""),
                    "color": 55512,
                    "timestamp": new Date(),
                    "footer": {
                        "icon_url": message.author.displayAvatarURL,
                        "text": message.author.username
                    },
                    "image": {
                        "url": gifUrl
                    }
                }
            })
        );

    } else {
        message.reply("**Diga que gif deseja procurar. :confused:**");
    }


}