exports.run = async (client, message, args) => {
    const SteamAPI = require('steamapi');
   const steam = new SteamAPI(process.env.STEAM);
   steam.getGameDetails(args[0]).then(summary => {
  
   const Discord = require('discord.js')
   if(!summary.price_overview.discount_percent) {
    let embed1 = new Discord.RichEmbed()
    .setAuthor(summary.name, 'https://webrazzi.com/wp-content/uploads/2013/01/steam.png')
    .setDescription(summary.short_description)
    .setImage(summary.header_image)
   return message.channel.send({embed : embed1, translate: true, lang: "pt"}).catch(error => message.reply("<:err:449743511391305748> **|** Insira o ID de algum jogo steam. store.steampowered.com/app/**322330**\n322330 seria o steam do jogo Don't Starve Together."))
   } else {
   let embed = new Discord.RichEmbed()
   .setAuthor(summary.name, 'https://webrazzi.com/wp-content/uploads/2013/01/steam.png')
   .setDescription(summary.short_description)
   .addField(':money_with_wings: Detalhes por preço', "Desconto de: "+summary.price_overview.discount_percent+"%")
   .setImage(summary.header_image)
   message.channel.send({embed : embed, translate: true, lang: "pt"}).catch(error => message.reply("<:err:449743511391305748> **|** Insira o ID de algum jogo steam. store.steampowered.com/app/**322330**\n322330 seria o steam do jogo Don't Starve Together."))
  
   }})}
