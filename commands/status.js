exports.run = (client, message, args)  => {
    const Discord = require('discord.js')
    
    var embed2 = new Discord.RichEmbed()
    .setAuthor('Status | Kikbot', client.user.avatarURL)
    
    .addField('<:memory:437019126175891466> RAM', (` ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}mb`), true)
    .addField('🎛 CPU', (process.cpuUsage().user / 1024 / 1024 / 2).toFixed(2) + "%", true)
    .addField('📚 Outras infos...', `**Usuários:** ${client.users.size}\n**Latência:** ${Math.round(client.ping)}\n**Servidores:** ${client.guilds.size}`)
    .setColor('RED')
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL)
          message.channel.send({embed: embed2});
    
    
    };
    
