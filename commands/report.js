exports.run = (client, message, args)  => {
message.delete()
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();

  if (message.mentions.users.first() < 0) return message.reply('Mencione alguém').catch(console.error);
  if (reason.length < 1) return message.reply('Coloque uma razão especifica! Ou. Mencione alguém!');
if (message.mentions.users.first().id === message.author.id) return message.reply(`Se reportar?!`)
  if (message.mentions.users.first().id === client.user.id) return message.reply(`O que que eu fiz ;(?!`)
  const channel = message.guild.channels.find('name', 'kik-modlogs');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return message.reply(`:x: **l** Erro! Não encontrei o canal #kik-modlogs`)
  // Send the message, mentioning the member
  
  const Discord = require('discord.js');
  const embed = new Discord.RichEmbed()
  .setColor(`RED`)
.setDescription(`⚠ **l** Você foi reportado! \n Motivo: ${reason} Fique mais atento!`)
user.send({embed});
  message.reply(`:white_check_mark: Prontinho!`,2500)
  channel.send(` :warning: **l** ${user} foi reportado por: ${message.author}  ("${reason}")`).then(message => {
    message.react(`👍`)
    message.react(`👎`)

})}