exports.run = (client, message, args)  => {

 
  if(!message.guild.member(client.user.id).hasPermission('EMBED_LINKS')) { return message.reply('<:err:449743511391305748> **|** Eu preciso que me seja fornecida a permissão de EMBED_LINKS, ou enviar links.') 
} else {

        
         
     
 var weather = require('weather-js');
weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) { 
 const Discord2 = require('discord.js');

 const embed2 = new Discord2.RichEmbed()
.setAuthor(message.author.tag, message.author.displayAvatarURL)
.setColor('BLUE')
.setTitle(':thinking: k!clima')
.setDescription('Exibe as informações "climáticas" de um específico lugar!\n\n:information_desk_person: **Como usar:** k!clima cidade\n\n:book: **Exemplo:**\nk!clima `Caruaru`')
 .setFooter(`Utilitários • Website: kikbot-.glitch.me`, message.author.displayAvatarURL)
 if(args.length < 1) return message.channel.send({embed : embed2});

if (result === undefined || result.length === 0) return message.channel.send('<:err:449743511391305748> **|** '+message.author+' Não encontrei nenhuma cidade chamada `'+args.join(' ')+'`')


 const moment = require('moment');
 moment.locale('pt-BR'); 
 // Variáveis
 var current = result[0].current; 
 var location = result[0].location;
 var forecast = result[0].forecast[1];
 // Abaixo ele vai enviar uma msg.channel falando o resumo da previsão do tempo para derteminado local! (inclui args)

// Vai constar a váriavel Discord que requer discord.js
 const Discord = require('discord.js');

     // Vai constar a variável "embed" que vai dizer a API do discord que o robô irá fazer um embed rico.
 const embed = new Discord.RichEmbed()
 .setDescription(`**${current.skytext}**`)
 .setAuthor(`Informações "climáticas" para: ${location.name}`, `http://mmls.mmu.edu.my/wordpress/1151100763/wp-content/uploads/sites/29663/2016/02/iOS-7-weather-app-icon-500x500.png`) 
.setColor('#00ffff')

     .addField(':thermometer: Temperatura',`${forecast.high}°C Máxima\n**${current.temperature}°C Atual**\n${forecast.low}°C Minima\n${current.feelslike}°C Sens. térmica`, true)
 .addField(':wind_blowing_face: Velocidade do vento',current.winddisplay, true)
 .addField(`:date: Data e dia`, `${current.date} - ${current.day}`, true)
 .addField(`:cloud: Precipitação`, `${forecast.precip}%`, true)
 .addField(':sweat_drops: Umidade', `${current.humidity}%`, true)
 .addField(':stars: Latitude', `${location.lat}°`, true)
 .addField(':stars: Longitude', `${location.long}°`, true)
.addField('⏰ Fuso horário', `UTC${location.timezone}`, true)
.addField('🛰 Tempo de observação', current.observationtime, true)
 .setTimestamp()

 .setFooter(`${current.observationpoint}`, current.imageUrl)

 message.channel.send({embed});

// Aqui vai enviar a msg pra o canal onde o comando foi executado!

const config = {
 apikey: process.env.CLIMA,
 language: "pt-br"
};


const accuweatherSimple = require('accuweather-simple')(config);
var embclima = new Discord.RichEmbed()
.setAuthor('AccuWeather', `https://apkapps.com/upload/apps/main_image/thumb/7BB1gD1EJ9g2mcqHfAtMuP0Z5Zg1a1syl4l8GTGIXFUUUpTSbg_txXw99YAVUZ9B8A=w300.png`)
.setDescription("Reaja com: ✅ para mais informações")
.setTimestamp()
.setFooter(`A pedido de: ${message.author.username}`, message.author.displayAvatarURL)
message.channel.send({embclima}).then(newMsg => {
   newMsg.react('✅');
const collector = newMsg.createReactionCollector((r, u) => (r.emoji.name === '✅') && u.id == message.author.id);

   collector.on('collect', r => {
       switch(r.emoji.name) {
           case '✅':
           const Discord = require('discord.js');
   accuweatherSimple.getWeather(`${args.join(` `)}`).then(result => {    
         var embclima2 = new Discord.RichEmbed()
.setAuthor('AccuWeather', `https://apkapps.com/upload/apps/main_image/thumb/7BB1gD1EJ9g2mcqHfAtMuP0Z5Zg1a1syl4l8GTGIXFUUUpTSbg_txXw99YAVUZ9B8A=w300.png`)
.setDescription('**Previsão, olhar para o futuro** \n`'+ result+'`')
.setColor("GREEN")
.setTimestamp()
.setFooter(`A pedido de: ${message.author.username}`, message.author.displayAvatarURL)
  newMsg.edit({embclima2})
var erremb = new Discord.RichEmbed()
.setColor("RED")
.setDescription('<:err:449743511391305748> **|** '+message.author+' Aconteceu algo que já foi identificado (limite de pedidos ao servidor por dia) 😢 Desculpe. ')
.setTimestamp()
.setFooter("Desculpe 😢", client.user.avatarURL)
         .catch(error => newMsg.edit(erremb));
   })
     //Oops! O AccuWeather não conseguiu encontrar a cidade. Enquanto isso só está as informações de MSN
     
           r.users.filter(u => r.remove(u.id !== client.user.id));
                   
           break;
   
     
 }})
});
       

})
}
}

