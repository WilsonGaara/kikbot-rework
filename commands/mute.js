exports.run = (client, message, args)  => {
    if(!(message.guild.member(client.user).hasPermission("MANAGE_ROLES"))) {
        message.channel.sendMessage(':x: **|** Oops! Não tenho a permissão `MANAGE_ROLES`.');
     } else {
        var args = args.slice(1).join(' ');
        if(args.length < 1) return message.reply(`Oops! Você não digitou nada como tempo. Exemplo k!mute @eu 1 Ele vai silenciar @eu por 1 minuto. k!mutes @eu 1. Ele irá silenciar @eu por 1 segundo`)
    if(!message.member.hasPermissions(["MANAGE_GUILD"])) return message.reply("Você não tem direito de gerenciar o servidor!");
    let cargokik = message.guild.roles.find("name", "Muted");
    if(!cargokik) return message.reply(":x: Não vi nenhum cargo com o nome de `Muted`");
    let membro = message.mentions.members.first(); 

    membro.addRole(cargokik);

    message.reply(':white_check_mark: **|** Usuário silenciado com sucesso.');
    setTimeout(() => {
        membro.removeRole(cargokik);
        var texto = ['RED', 'GOLD', 'BLUE'];
     const random = texto[Math.floor(Math.random() * texto.length)];
        var Discord = require('discord.js')
        var embed = new Discord.RichEmbed()
        .setColor(random)
        .setDescription('Você foi desmutado. Tempo: `'+args+'`m.\nServidor: **'+message.guild+'**')
        .setFooter('kikbot- | unmute', client.user.avatarURL)
        message.mentions.members.first().send({embed : embed})
    }, args * 60000);

        }
    };


