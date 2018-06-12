exports.run = (client, message, args)  => {
    const Discord = require('discord.js')
    var uptime = `${client.uptime}`;
var seg = Math.floor(uptime/1000)%60;
var min = Math.floor(uptime/(1000*60))%60;
var horas = Math.floor(uptime/(1000*60*60))%24;
var uptimeconv = horas + ' horas, ' + min + ' minutos e ' + seg + ' segundos.';  

    var embed2 = new Discord.RichEmbed()
    .setAuthor('Status | Kikbot', client.user.avatarURL)
     .setThumbnail(client.user.avatarURL)
    .addField('<:memory:437019126175891466> RAM', (` ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}mb`), true)
    .addField('🎛 CPU', (process.cpuUsage().user / 1024 / 1024 / 2).toFixed(2) + "%", true)
    .addField('📚 Outras infos...', `**Usuários:** ${client.users.size}\n**Latência:** ${Math.round(client.ping)}ms\n**Servidores:** ${client.guilds.size}`, true)
    .addField(`🆙⏲ Uptime`, uptimeconv, true)
    .setColor('RED')
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL)
          message.channel.send({embed: embed2});
    
    
    };
    
