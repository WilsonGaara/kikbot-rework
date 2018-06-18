exports.run = (client, message, args)  => {
	const Discord = require('discord.js')
	var uptime = `${client.uptime}`;
var seg = Math.floor(uptime/1000)%60;
var min = Math.floor(uptime/(1000*60))%60;
var horas = Math.floor(uptime/(1000*60*60))%24;
var uptimeconv = `**${horas}**h, **${min}**m e **${seg}**s.`

	var embed = new Discord.RichEmbed()
  .setAuthor('Info | Kikbot', client.user.avatarURL)
  .setDescription('💡 **|** Você sabia que estou à: '+uptimeconv+' on-line?')
	 .setThumbnail(client.user.avatarURL)
        .addField('📡 Status', `**RAM:** ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}mb\n**CPU:** ${(process.cpuUsage().user / 1024 / 1024 / 24).toFixed(2)}%`, true)
  .addField('📚 Outras infos...', `**Usuários:** ${client.users.size}\n**Latência:** ${Math.round(client.ping)}ms\n**Servidores:** ${client.guilds.size}\n**Shard:** **${client.shard.id + 1}**/2`, true)
  .addField('💻 Meu criador:', client.users.get('395005096527790083').tag, true)
  .addField('📘 Links', '**-** [**WEBSITE**](http://www.kikbot-.glitch.me)\n**-** [**SUPORT GUILD**](https://discord.gg/sFQFK2Q)\n**-** [**INVITE**](https://discordapp.com/api/oauth2/authorize?client_id=431271825763467264&permissions=36826310&scope=bot)', true)
	.setColor('GREEN')
	.setTimestamp()
	.setFooter(message.author.tag, message.author.displayAvatarURL)
				message.channel.send({embed: embed})
     
};
