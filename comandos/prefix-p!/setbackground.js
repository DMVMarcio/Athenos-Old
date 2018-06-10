var database = require("../../database.js")

exports.run = (client, message, args) => {

    let razaou = args.slice(0).join(' ');

    database.Users.findOne({
        "_id": message.author.id
    }, function (erro, documento) {

        if(documento) {

            if(!razaou.length < 1) {

                documento.background = message.content.replace("p!setbackground ", "");
                documento.save();
                message.reply("**Background setado.**");

            } else {
                message.reply("**Mande o link do background**");
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
                background: "https://i.imgur.com/J3GPYFM.jpg"
            })

            pessoa.save()
        }

    })

}