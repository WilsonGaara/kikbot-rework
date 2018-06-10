exports.run = (client, message, args)  => {
  let args2 = args.join(``)
  if(args2.length < 1) {
      message.channel.sendMessage('Espero que você esteja cansado(a) de tanto digitar...')
      

const Discord = require('discord.js')
const embed = new Discord.RichEmbed()
.setColor(`RED`)
.setTitle(`Oops!`)
.setDescription(`Parece que tem algo de errado`)
.addField(`Você não deu argumento`, `Ex: k!ppt Pedra, temos 3 opções pedra papel e tesoura :)`)
.setFooter(`Oops!`)
message.channel.send({embed: embed})

  } else {
 if(args[0].toLowerCase() != 'papel' && args[0].toLowerCase() != 'pedra' && args[0].toLowerCase() != 'tesoura') return message.reply('Você não colocou um argumento válido.')
              var texto = [`Você escolheu :new_moon:, eu escolhi :newspaper: \n :flag_black:  **I Que pena... Você perdeu, mas o que vale é a intenção**`, `Você escolheu :new_moon:, eu escolhi :new_moon: \n :flag_white: **I Empate! ** `, `:tada: **I** Você escolheu :new_moon:, eu escolhi :scissors: \n :small_blue_diamond: **I Parabéns você ganhou! **`];
              const random = texto[Math.floor(Math.random() * texto.length)];
              var texto2 = [`Você escolheu :newspaper:, eu escolhi :scissors: \n :flag_black:  **I Que pena... Você perdeu, mas o que vale é a intenção**`, `Você escolheu :newspaper:, eu escolhi :newspaper: \n :flag_white: **I Empate! ** `, `:tada: **I** Você escolheu :newspaper:, eu escolhi :new_moon: \n :small_blue_diamond: **I Parabéns você ganhou! **`];
              const random2 = texto2[Math.floor(Math.random() * texto2.length)];
              var texto3 = [`Você escolheu :scissors:, eu escolhi :new_moon: \n :flag_black:  **I Que pena... Você perdeu, mas o que vale é a intenção**`, `Você escolheu :scissors:, eu escolhi :scissors: \n :flag_white: **I Empate! ** `, `:tada: **I** Você escolheu :scissors:, eu escolhi :newspaper: \n :small_blue_diamond: **I Parabéns você ganhou! **`];
              const random3 = texto3[Math.floor(Math.random() * texto3.length)];
      if(args2.includes(`esoura`)) {
          message.channel.send(random3)
      } else { 
              if (args2.includes(`edra`)) {
                  message.channel.sendMessage(random);
              } else {
                  if (args2.includes('apel')) {
                      message.channel.sendMessage(random2);
                  } else {
  }  
}
}
}
}
