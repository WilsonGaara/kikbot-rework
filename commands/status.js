exports.run = (client, message, args)  => {
	const Discord = require('discord.js')
	var uptime = `${client.uptime}`;
var seg = Math.floor(uptime/1000)%60;
var min = Math.floor(uptime/(1000*60))%60;
var horas = Math.floor(uptime/(1000*60*60))%24;
var uptimeconv = `(${horas}) Hora(s) e (${min}) minutos.`

	var embed = new Discord.RichEmbed()
  .setAuthor('Status | Kikbot', client.user.avatarURL)
  .setDescription('Mostrando informações sobre Fragmento(shard) ['+`${client.shard.id + 1}`+'] ')
	 .setThumbnail(client.user.avatarURL)
	.addField('<:memory:437019126175891466> RAM', (` ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}mb`), true)
	.addField('🎛 CPU', (process.cpuUsage().user / 1024 / 1024 / 1024).toFixed(2) + "%", true)
	.addField('📚 Outras infos...', `**Usuários:** ${client.users.size}\n**Latência:** ${Math.round(client.ping)}ms\n**Servidores:** ${client.guilds.size}\n**Shard:** **${client.shard.id + 1}**/2`, true)
	.addField(`🕙 Uptime`, uptimeconv, true)
	.setColor('BLUE')
	.setTimestamp()
	.setFooter(message.author.tag, message.author.displayAvatarURL)
				message.channel.send({embed: embed})
     
};
