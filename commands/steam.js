const SteamAPI = require('steamapi');
const Discord = require('discord.js')
const steam = new SteamAPI(process.env.STEAM);
const moment = require('moment');
	   moment.locale('pt-BR');  
exports.run = (client, message, args)  => {
    steam.resolve(args.join(' ')).then(id => {
        steam.getUserSummary(id).then(summary => {
    const embed = new Discord.RichEmbed()
    .setAuthor(summary.nickname)
.setThumbnail(summary.avatar.large)
.setColor('BLUE')
.setFooter(`ID do usuário: ${summary.steamID} | kikbot-`)
message.channel.send({embed: embed});
		steam.resolve(args.join(' ')).then(id2 => {
		steam.getUserOwnedGames(id2).then(jogo => {
let string = ''
for(var i = 0;i < jogo.appID;i++){
   string  += `https://store.steampowered.com/app/${jogo.appID}` + `\n`;
message.reply(string)

			console.log(jogo)
      console.log(jogo.nickname)
};
});
});
    });
               });
              };
            
