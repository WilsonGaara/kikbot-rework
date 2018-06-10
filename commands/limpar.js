exports.run = (client, message, args)  => {
  if  (!message.member.hasPermissions(["MANAGE_MESSAGES"])) return message.reply("**Você não tem a permissão para usar isto!**");
  const Discord2 = require('discord.js');
 
     const embed2 = new Discord2.RichEmbed()
 .setAuthor(message.author.tag, message.author.displayAvatarURL)
 .setColor('BLUE')
 .setDescription(':thinking: | k!limpar\nApague algumas mensagens de um canal de texto!\n\n:information_desk_person: **Como usar:** k!limpar <quantia.de.mensagens>\n\n:book: **Exemplo:**\nk!limpar `50`')
     .setFooter(`Utilitários • Website: kikbot-.glitch.me`, message.author.displayAvatarURL)
     if(args.length < 1) return message.channel.send({embed : embed2})
   
   
     if (args.join(' ') > '100') {
      message.channel.send(`Opa, acho que mais de 100 não posso!`)
  } else {
      if(!args[0]) return message.reply(`Coloque algum número depois do comando :x:`)
          if  (!message.member.hasPermissions(["MANAGE_MESSAGES"])) return message.reply("**Você não tem a permissão para usar isto!**");
          let messagecount = parseInt
message.channel.bulkDelete(args[0])
.catch(error => message.reply(`<:err:455473374421057547> **|** Ocorreu um erro: ${error}`)) 


  }
}
