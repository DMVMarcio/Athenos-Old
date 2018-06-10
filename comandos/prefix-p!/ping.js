exports.run = (client, message, args) => {

  var ping;

  ping = (Date.now() - message.createdTimestamp)
  let peso = ping > 1000 ? "16711680" : "55512"

    message.channel.send({
            "embed": {
            "description": "ㅤㅤㅤ:snowflake: **PING:** :snowflake:ㅤㅤ\n\n📡**" + ping + "**ms",
              "color": peso,
              "thumbnail": {
                "url": "https://i.imgur.com/4JaNmFp.png"
              }
            }
          });
}