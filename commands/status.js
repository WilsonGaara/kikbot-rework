exports.run = (client, message, args)  => {
	const Discord = require('discord.js')
	var uptime = `${client.uptime}`;
var seg = Math.floor(uptime/1000)%60;
var min = Math.floor(uptime/(1000*60))%60;
var horas = Math.floor(uptime/(1000*60*60))%24;
var uptimeconv = `(${horas}) Hora(s) e (${min}) minutos.`

	var embed = new Discord.RichEmbed()
	.setAuthor('Status | Kikbot', client.user.avatarURL)
	 .setThumbnail(client.user.avatarURL)
	.addField('<:memory:437019126175891466> RAM', (` ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}mb`), true)
	.addField('🎛 CPU', (process.cpuUsage().user / 1024 / 1024 / 10).toFixed(2) + "%", true)
	.addField('📚 Outras infos...', `**Usuários:** ${client.users.size}\n**Latência:** ${Math.round(client.ping)}ms\n**Servidores:** ${client.guilds.size}\n**Shard:** **${client.shard.id + 1}**/2`, true)
	.addField(`🕙 Uptime`, uptimeconv, true)
	.setColor('BLUE')
	.setTimestamp()
	.setFooter(message.author.tag, message.author.displayAvatarURL)
				message.channel.send({embed: embed}).then(newMsg => {
          newMsg.react('⬅');
          newMsg.react('➡');
          const collector = newMsg.createReactionCollector((r, u) => (r.emoji.name === '⬅' || r.emoji.name === '➡') && u.id !== client.user.id);
          var uptime2 = `${client.shard[1].uptime}`;
          var seg = Math.floor(uptime2/1000)%60;
          var min = Math.floor(uptime2/(1000*60))%60;
          var horas = Math.floor(uptime2/(1000*60*60))%24;
          var uptimeconv2 = `(${horas}) Hora(s) e (${min}) minutos.`
          
          collector.on('collect', r => {
              switch(r.emoji.name) {
                  case '⬅':
                  var embed2 = new Discord.RichEmbed()
                  .setAuthor('Status | Kikbot', client.user.avatarURL)
                  .setThumbnail(client.user.avatarURL)
                 .addField('<:memory:437019126175891466> RAM', (` ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}mb`), true)
                 .addField('🎛 CPU', (process.cpuUsage().user / 1024 / 1024 / 10).toFixed(2) + "%", true)
                 .addField('📚 Outras infos...', `**Usuários:** ${client.users.size}\n**Latência:** ${Math.round(client.ping)}ms\n**Servidores:** ${client.guilds.size}\n**Shard:** **${client.shard.id + 1}**/2`, true)
                 .addField(`🕙 Uptime`, uptimeconv, true)
                 .setColor('BLUE')
                 .setTimestamp()
                 .setFooter(message.author.tag, message.author.displayAvatarURL)
                      newMsg.edit({embed: embed2});
                      r.users.filter(u => r.remove(u.id !== client.user.id));
                      break;
                  case '➡':
                  var embed3 = new Discord.RichEmbed()
                  .setAuthor('Status | Kikbot', client.user.avatarURL)
                  .setDescription('Mostrando informações sobre Fragmento(shard) ['+`${client.shard[1].id + 1}`+'] | Use as reactions para alternar de uma informação à outra')
                  .setThumbnail(client.user.avatarURL)
                 .addField('<:memory:437019126175891466> RAM', (` ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}mb`), true)
                 .addField('🎛 CPU', (process.cpuUsage().user / 1024 / 1024 / 10).toFixed(2) + "%", true)
                 .addField('📚 Outras infos...', `**Usuários:** ${client.shard[1].users.size}\n**Latência:** ${Math.round(client.shard[1].ping)}ms\n**Servidores:** ${client.shard[1].guilds.size}\n**Shard:** **${client.shard.id + 1}**/2`, true)
                 .addField(`🕙 Uptime`, uptimeconv2, true)
                 .setColor('BLUE')
                 .setTimestamp()
                 .setFooter(message.author.tag, message.author.displayAvatarURL)
                      newMsg.edit({embed: embed3});
                      r.users.filter(u => r.remove(u.id !== client.user.id));
              break
              };
      
        });
  });
};
