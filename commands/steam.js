exports.run = (client, message, args)  => {
    steam.resolve(args.join(' ')).then(id => {
        steam.getUserSummary(id).then(summary => {
    const embed = new Discord.RichEmbed()
    .setAuthor(summary.nickname, summary.avatar.large)
.setThumbnail(summary.avatar.large)
.setColor('BLUE')
.setFooter(`ID STEAM do usuário: ${summary.steamID} | kikbot-`)
message.channel.send({embed: embed});
		getUserRecentGames(id).then(games => {
      const jogos = games.appID.map(g =>+'https://store.steampowered.com/app/'+g).join("\n")
});
});
    });
               };
              
