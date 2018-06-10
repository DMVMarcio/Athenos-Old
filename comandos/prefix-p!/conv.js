var database = require("../../database.js")

exports.run = (client, message, args) => {


    let razaou = args.slice(0).join(' ');

    if (!razaou.length < 1) {

        database.Convs.findOne({
            "frase": message.content.toLowerCase().replace("p!conv ", "")
        }, function(erro, documento) {

            if(documento){

                message.channel.sendMessage(`${documento.aprove ? "<:check:438534229563801620>" : ":red_circle:"} **|** ${documento.resposta}`);

            } else {
                message.reply("**Não tenho uma resposta para isso. Use `p!addre <frase>`**");
            }

        })

    } else {
        message.reply("**Diga algo.**");
    }

}