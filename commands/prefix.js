    exports.run = async(client, message, args) => {
const fs = require('fs')
const Discord = require('discord.js')

        if  (!message.member.hasPermissions(["MANAGE_GUILD"])) return message.reply("Você não tem direito de mudar meu prefix!");
        if(args.join(' ').length < 1) return message.reply('Uso correto: k!prefix <prefixo>')
        
        let prefixes = JSON.parse(fs.readFileSync("./prefixos.json", "utf8"));
        prefixes[message.guild.id] = {
            prefixes: args[0]
        };
        fs.writeFile("./prefixos.json"), JSON.stringify(prefixes), (err) => {

        };
        message.channel.send('🚀 **|** O prefixo foi mudado para **'+args[0]+'** com êxito.')









    }
