exports.run = (client, message, args)  => {
    
	const Discord = require("discord.js");

  let user = message.mentions.users.first().username || message.author.username || message.guild.members.get(args.join(' ').username)
  let user2 = message.mentions.users.first().displayAvatarURL || message.author.displayAvatarURL || message.guild.members.get(args.join(' ').displayAvatarURL)
        const embed = new Discord.RichEmbed()
             .setColor('AQUA')
             .setTitle(`:frame_photo: ${user}`)
             .setDescription(`**Clique [aqui](${user2}) para abrir o link do seu avatar, ou o link de download**`)
             .setImage(userfoto);
  
        message.channel.send({embed: embed})
}
