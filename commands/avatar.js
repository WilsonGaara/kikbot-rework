exports.run = (client, message, args)  => {
    
	const Discord = require("discord.js");
	  if (message.mentions.users.first()) {
    user = message.mentions.users.first().username;
    userfoto = message.mentions.users.first().displayAvatarURL;
  } else {

    user = message.author.username
    userfoto = message.author.diplayAvatarURL;
  }

        const embed = new Discord.RichEmbed()
             .setColor('AQUA')
             .setTitle(`:frame_photo: ${user}`)
            .setTimestamp()
             .setImage(userfoto)
             .setFooter(user, userfoto)
  
        message.channel.send({embed: embed})
}
