exports.run = (client, message, args)  => {
    if(!(message.guild.member(client.user).hasPermission("MANAGE_ROLES"))) {
        message.channel.sendMessage(':x: **|** Oops! Não tenho a permissão `MANAGE_ROLES`.');
     } else {
        var args = args.slice(1).join(' ');
        if(args.length < 1) return message.reply(`Oops! Você não digitou nada como tempo. Exemplo k!mute @eu 1 Ele vai silenciar @eu por 1 minuto. k!mutes @eu 1. Ele irá silenciar @eu por 1 segundo`)
    if(!message.member.hasPermissions(["MANAGE_GUILD"])) return message.reply("Você não tem direito de gerenciar o servidor!");
    let cargokik = message.guild.roles.find("name", "🔇 | MUTADO");
    if(!cargokik) return message.reply(":x: Não vi nenhum cargo com o nome de `🔇 | MUTADO`");
    let membro = message.mentions.members.first(); 

    membro.addRole(cargokik);

    message.reply(':white_check_mark: **|** Usuário silenciado com sucesso.');
    setTimeout(() => {
        membro.removeRole(cargokik);
        var texto = ['RED', 'GOLD', 'BLUE'];
     const random = texto[Math.floor(Math.random() * texto.length)];
        var Discord = require('discord.js')
        const fs = require('fs')
        var embed = new Discord.RichEmbed()
        .setColor(random)
        .setDescription('Você foi desmutado. Tempo: `'+args+'`m.\nServidor: **'+message.guild+'**')
        .setFooter('kikbot- | unmute', client.user.avatarURL)
        message.mentions.members.first().send({embed : embed})
    }, args * 60000);

        }
    };


    exports.run = async(client, message, args) => {


        if  (!message.member.hasPermissions(["MANAGE_GUILD"])) return message.reply("Você não tem direito de mudar meu prefix!");
        if(args.join(' ').length < 1) return message.reply('Uso correto: k!prefix <prefixo>')
        if(args.join(' ').length < 4) return message.reply('O prefix não pode ser muito longo para usuários lembrar!')

        let prefixes = JSON.parse(fs.readFileSync("./prefixos.json", "utf8"));
        prefixes[message.guild.id] = {
            prefixes: args[0]
        };
        fs.writeFile("./prefixos.json", JSON.stringify(prefixes), (err) => {
if(err) return message.reply(err)
        });
        message.channel.send('🚀 **|** O prefixo foi mudado para **'+args[0]+'** com êxito.')









    }
