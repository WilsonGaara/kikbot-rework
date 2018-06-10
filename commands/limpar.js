exports.run = (client, message, args)  => {
  if  (!message.member.hasPermissions(["MANAGE_MESSAGES"])) return message.reply("**Você não tem a permissão para usar isto!**");
  const Discord2 = require('discord.js');
 
     const embed2 = new Discord2.RichEmbed()
 .setAuthor(message.author.tag, message.author.displayAvatarURL)
 .setColor('BLUE')
 .setDescription(':thinking: | k!limpar\nApague algumas mensagens de um canal de texto!\n\n:information_desk_person: **Como usar:** k!limpar <quantia.de.mensagens>\n\n:book: **Exemplo:**\nk!limpar `50`')
     .setFooter(`Utilitários • Website: kikbot-.glitch.me`, message.author.displayAvatarURL)
     if(args.length < 1) return message.channel.send({embed : embed2})
   
   
            
             let messagecount = parseInt
if(args > 101)  return message.channel.send(`<:err:449743511391305748> **|** Oops! Você excedeu o limite de mensagens para serem excluidas, eu acho. Outras causas:\nVocê não colocou um número.\nO número é negativo.\nE uma infinidade de erros.`);
  var num = Number.isInteger(args.join(` `))
  if(num !== true) { return message.channel.send(`<:err:449743511391305748> **|** Oops! Você excedeu o limite de mensagens para serem excluidas, eu acho. Outras causas:\nVocê não colocou um número.\nO número é negativo.\nE uma infinidade de erros.`)
     
} else {
 
  message.channel.bulkDelete(args[0])
  setInterval(() => {





    message.channel.send(`:rocket: **|** Foram deletadas **${args.join(' ')}** mensagens.`);

  }, 900);
};
};
