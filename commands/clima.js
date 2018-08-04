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
 .setDescription(`[**${current.skytext}**](https://www.msn.com/pt-br/clima)`)
 .setAuthor(`MSN Clima de: ${location.name}`, `https://upload.wikimedia.org/wikipedia/commons/f/fd/MSN_Weather_icon.png`) 
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
message.channel.send('**Reaja com ✅ para mais informações.**').then(newMsg => {
  newMsg.react('✅');
const collector = newMsg.createReactionCollector((r, u) => (r.emoji.name === '✅') && u.id == message.author.id);
   collector.on('collect', r => {
      switch(r.emoji.name) {
          case '✅':
          const Discord = require('discord.js');
        accuweatherSimple.getWeather(`${args.join(` `)}`).then(result => newMsg.edit('**Previsão, olhar para o futuro** \n`'+ result+'`'))
        
        .catch(error => newMsg.edit('<:err:449743511391305748> **|** '+message.author+' Aconteceu algo que já foi identificado (limite de pedidos ao servidor por dia) 😢 Desculpe. '));
    //Oops! O AccuWeather não conseguiu encontrar a cidade. Enquanto isso só está as informações de MSN
    
          r.users.filter(u => r.remove(u.id !== client.user.id));
                  
          break;
       
    };
});
     
});
       

});
};
};

