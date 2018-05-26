const SteamAPI = require('steamapi');
const Discord = require('discord.js')
const steam = new SteamAPI('D5D2E6CF8B0377EFB792D564FBB66C30');
const moment = require('moment');
	   moment.locale('pt-BR');  
exports.run = (client, message, args)  => {
    steam.resolve(args.join(' ')).then(id => {
        steam.getUserSummary(id).then(summary => {
    const embed = new Discord.RichEmbed()
    .setAuthor(summary.nickname)
.setThumbnail(summary.avatar.medium)
.setColor('GOLD')
.setDescription('Ultimo logoff: '+moment(summary.lastLogOff).format(`lll`))
.setFooter(`ID do usuário: ${summary.steamID} | kikbot-`)
message.channel.send({embed: embed});
});
});
};
