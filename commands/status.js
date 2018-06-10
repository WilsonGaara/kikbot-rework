exports.run = (client, message, args)  => {
const Discord = require('discord.js')

var embed2 = new Discord.RichEmbed()
.setAuthor('Status | Kikbot', client.user.avatarURL)
.setDescription('_Este comando fala para o autor meus status atuais(ou não)_')
.addField('<:memory:437019126175891466> RAM', (` ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}mb`))
.addField('🎛 CPU', (process.cpuUsage().user / 1024 / 1024 / 10).toFixed(2) + "%")
.setColor('RED')
.setTimestamp()
.setFooter(message.author.tag, message.author.displayAvatarURL)
      message.channel.send({embed: embed2});


};
