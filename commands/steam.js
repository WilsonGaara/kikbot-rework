const SteamAPI = require('steamapi');
const Discord = require('discord.js')
const steam = new SteamAPI(process.env.STEAM);
const moment = require('moment');
     moment.locale('pt-BR');  
//VARIAVEIS

exports.run = (client, message, args)  => {
  if(args.join(' ').length < 1) return message.reply('<:err:449743511391305748> **|** Você precisa inserir um id da steam válido, o que vem depois de steamcommunity.com/profiles/**seuid** ele pode até ser o seu personalizado.');
    steam.resolve(args.join(' ')).then(id => {
        steam.getUserSummary(id).then(summary => {
    const embed = new Discord.RichEmbed()
    .setAuthor(summary.nickname, summary.avatar.large)
.setThumbnail(summary.avatar.large)
.setColor('BLUE')
.setFooter(`ID STEAM do usuário: ${summary.steamID} | kikbot-`)
message.channel.send({embed: embed});
//CODIGO
		steam.getUserRecentGames(id).then(games => {
   //BLABLA
     
        const afk = games.map(g => g.name).join("\n")
 
      const Discord2 = require('discord.js')
      const embed2 = new Discord2.RichEmbed()
   .setAuthor('Jogos recentes de: '+summary.nickname, games.iconURL)
   .setDescription(`:white_check_mark: **|** Aqui está a lista de jogos recentes:\n${afk}`)
   .setImage(games.logoURL)
   .setTimestamp()
   .setFooter('kikbot- | Steam', client.user.avatarURL)
  message.channel.send({embed: embed2});

  
  
});
    });
  });
};
