exports.run = (client, message, args)  => {
      
  
    if(!(message.guild.member(client.user).hasPermission("EMBED_LINKS"))) {
        message.channel.send(":no_entry_sign: **l** Oops! \n Pelo jeito não tenho a permissão (`EMBED_LINKS`) \n \n Como arrumar \n \n :cop: Fale com um administrador para me dar esta permissão!")
    
      
      } else {
      
    var weather = require('weather-js');
weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) { 
    const Discord2 = require('discord.js');

    const embed2 = new Discord2.RichEmbed()
.setAuthor(message.author.tag, message.author.displayAvatarURL)
.setColor('BLUE')
.setDescription(':thinking: | k!clima\nVerifique a temperatura de uma cidade!\n\n:information_desk_person: **Como usar:** k!clima cidade\n\n:book: **Exemplo:**\nk!clima `Caruaru`')
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
    .setAuthor(`Previsão do tempo para: ${location.name} - ${current.day}`, `https://i.imgur.com/uiW0eUg.png`) 

  //  .setColor(`BLUE`)
    .addField(':clock4: Fuso Horário',`UTC${location.timezone}`, true) 
        .addField(':cloud_rain: Temperatura',`${forecast.high}°C Máxima\n${current.temperature}°C Atual\n${forecast.low}°C Minima`, true)
    .addField(':cold_sweat:  Sensação Térmica', `${current.feelslike} °C`, true)
    .addField(':wind_blowing_face: Velocidade do vento',current.winddisplay, true)
    .addField(`:date: Data`, current.date, true)
    .addField(`:cloud: Precipitação`, `${forecast.precip}%`, true)
    .addField(':sweat_drops: Umidade', `${current.humidity}%`, true)
    .addField(':stars: Latitude', `${location.lat}°`, true)
    .addField(':stars: Longitude', `${location.long}°`, true)

    
   
    .setFooter(`Email suporte | kikbot-@outlook.com | Website: kikbot-.glitch.me`, message.author.displayAvatarURL)
   
    message.channel.send({embed});
    if(current.temperature > 27) return message.reply(`:warning: Temperatura elevada!`);
        if(current.temperature < 18) return message.reply(`:warning: Temperatura baixa :snowflake: `);
// Aqui vai enviar a msg pra o canal onde o comando foi executado!

const config = {
    apikey: "kTC0LP5MCeSkcYUBogj7UeeApGcDbK7d",
    language: "pt-br"
  };

  
  const accuweatherSimple = require('accuweather-simple')(config);

  message.channel.send('**QUER SABER MAIS?**\nReaja => :white_check_mark:').then(newMsg => {
      newMsg.react('✅');
      const collector = newMsg.createReactionCollector((r, u) => (r.emoji.name === '✅') && u.id !== client.user.id);
    
 
      collector.on('collect', r => {
          switch(r.emoji.name) {
              case '✅':
              const Discord = require('discord.js');
            accuweatherSimple.getWeather(`${args.join(` `)}`).then(result => newMsg.edit('**Previsão, olhar para o futuro** \n`'+ result+'`'))
            
            .catch(error => message.channel.send('<:err:449743511391305748> **|** '+message.author+' **O AccuWeather não encontrou a cidade, exibindo apenas informações da MSN Weather. (Isso também pode acontecer pelo limite de pedidos ao AccuWeather que são 50 por dia. Eles fazem isso para pessoas que não pagam não usarem muita banda.**'));
        //Oops! O AccuWeather não conseguiu encontrar a cidade. Enquanto isso só está as informações de MSN
        
              r.users.filter(u => r.remove(u.id !== client.user.id));
              break;
           
        };
    });
});
          
  //accuweatherSimple.getWeather(`${args.join(` `)}`).then(result => message.reply('**Previsão, olhar para o futuro** \n` '+ result))
          

});


      }};

  

       
