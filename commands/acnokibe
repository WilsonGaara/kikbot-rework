exports.run = (client, message, args)  => { 


          
message.react(`✌`);

const moment = require('moment');
	   moment.locale('pt-BR');  
	   var timeout = `${message.guild.afkTimeout}`;
  function verificationLevel() {
    var guildVerification = message.guild.verificationLevel
    if  (guildVerification == "0") {
    return "Nenhum"
  } else if (guildVerification == "1") {
    return ("Baixo")
      
  
  
  
  
  
  
  
  
  
  
  
  
  } else if  (guildVerification == "2") {
    return ("Médio")
    } else if (guildVerification == "3") {
    return ("Alto")
	    } else if (guildVerification == "4") {
    return ("Extremo")
    }
  }
  function tipo() {
    var guildVerification = message.channel.type
  if (guildVerification == "text") {
    return (":notepad_spiral: l Texto")
	    } else if  (guildVerification == "voice") {
    return (":microphone: l Voz")

    }
  }
  function regiao() {
    var guildVerification = message.guild.region
    if  (guildVerification == "en-us") {
    return ":flag_us: Estados Unidos"
  } else if (guildVerification == `brazil`) {
    return (":flag_br: Brasil")
	    } else if  (guildVerification == "russia") {
    return (":flag_ru: Rússia")
    } else if (guildVerification == "singapore") {
    return (":flag_sg: Singapura")
	    } else if (guildVerification == "hongkong") {
    return (":flag_hk: Hong Kong")
  } else if (guildVerification == "unnamed") {
    return ("<:blobfacepalm:369904810784325635> l Eu não fiz mais functions, desculpe, volte mais tarde")
  } else if (guildVerification == "eu-west") {
    return (":flag_eu: Europa Oeste")
  } else if (guildVerification == "us-east") {
    return (":flag_us: Costa Leste dos Estados Unidos")
  } else if (guildVerification == "sydney") {
    return (":flag_au: Sydney (Dentro da austrália)")
  } else if (guildVerification == "us-central") {
    return (":flag_us: Estados Unidos Central")
  } else if (guildVerification == "us-south") {
    return (":flag_us: Região Sul dos Estados Unidos")
  } else if (guildVerification == "us-west") {
    return (":flag_us: Região Oeste dos Estados Unidos")
  } else if (guildVerification == "us-west") {
    return (":flag_gb: Londres ")
    
    }
  }

    

var min = Math.floor(timeout/(1*60))%60;
var horas = Math.floor(timeout/(1*60*60))%24;
var timeoutconv = horas + ' hrs e ' + min + ' mins';  
function afkchannel(){
    var afk = message.guild.afkChannel
    if(afk != undefined){
		return afk;
    }else{
        return "Não detectado";
    }
}
let string = ''
for(var i = 0;i < message.guild.roles.size;i++){
   string  += `${message.guild.roles.array()[i].name}` + `, `;

}
  const Discord = require('discord.js')
  var embed1 = new Discord.RichEmbed()
  .setAuthor(`${message.guild}`, `https://cdn.discordapp.com/emojis/314003252830011395.png`)
  .setThumbnail(message.guild.iconURL)
  .setColor(`BLUE`)
  .addField(`:computer: ID`, message.guild.id, true)
.addField(`:notepad_spiral: Canais no total:`, `${message.guild.channels.size}`, true)  
.addField(`:pencil: Canais de texto:`, `${message.guild.channels.filter(channel => channel.type == 'text').size}`, true)
.addField(`:notes: Canais de voz:`, `${message.guild.channels.filter(channel => channel.type == 'voice').size}`, true)
.setAuthor(`${message.guild}`, `https://cdn.discordapp.com/emojis/314003252830011395.png`)
.setThumbnail(message.guild.iconURL)
.setColor(`BLUE`)

.addField(":date: Criado em", moment(message.guild.createdAt).format('lll'), true);
        embed1.addField(`:star2: Entrei aqui em`, moment(message.guild.joinedAt).format(`lll`), true)
.addField(`:robot: Robôs`, message.guild.members.filter(member => member.user.bot).size, true)
.addField(`:zzz: Tempo AFK:`, `${timeoutconv}`, true)
.addField(`:earth_americas: Região`, regiao(), true)
.setDescription(`[Clique aqui para abrir o URL do ícone do servidor](${message.guild.iconURL})`)



  message.channel.send({embed: embed1}).then(newMsg => {
      newMsg.react('⬅');
      newMsg.react('➡');
      const collector = newMsg.createReactionCollector((r, u) => (r.emoji.name === '⬅' || r.emoji.name === '➡') && u.id !== client.user.id);

      collector.on('collect', r => {
          switch(r.emoji.name) {
              case '⬅':
              var embed2 = new Discord.RichEmbed()
              .setAuthor(`${message.guild}`, `https://cdn.discordapp.com/emojis/314003252830011395.png`)
              .setThumbnail(message.guild.iconURL)
              .setColor(`RED`)
              .addField(`:computer: ID`, message.guild.id, true)
            .addField(`:notepad_spiral: Canais no total:`, `${message.guild.channels.size}`, true)  
            .addField(`:pencil: Canais de texto:`, `${message.guild.channels.filter(channel => channel.type == 'text').size}`, true)
            .addField(`:notes: Canais de voz:`, `${message.guild.channels.filter(channel => channel.type == 'voice').size}`, true)
            .setAuthor(`${message.guild}`, `https://cdn.discordapp.com/emojis/314003252830011395.png`)
            .setThumbnail(message.guild.iconURL)
            .setColor(`BLUE`)
            .addField(`:raising_hand: Membros (${message.guild.memberCount})`,  message.guild.memberCount - message.guild.members.filter(member => member.user.bot).size, true)
            .addField(":date: Criado em", moment(message.guild.createdAt).format(`lll`), true);
                    embed2.addField(`:star2: Entrei aqui em`, moment(message.guild.joinedAt).format(`lll`), true)
            .addField(`:zzz: Tempo AFK:`, ` ${timeoutconv}`, true)
            .addField(`:earth_americas: Região`, regiao(), true)
            .setDescription(`[Clique aqui para abrir o URL do ícone do servidor](${message.guild.iconURL})`)
            
                  newMsg.edit({embed: embed2});
                  r.users.filter(u => r.remove(u.id !== client.user.id));
                  break;
              case '➡':
              var embed3 = new Discord.RichEmbed()
              .setAuthor(`${message.guild}`, `https://cdn.discordapp.com/emojis/314003252830011395.png`)
              .setThumbnail(message.guild.iconURL)
              .setColor(`RED`) 
              .addField(`:robot: Robôs`, message.guild.members.filter(member => member.user.bot).size, true)
	   .addField(":crown: Rei", message.guild.owner.user.username + '#' + message.guild.owner.user.discriminator, true)
	   .addField(`<:blobdetective:395358275685711873> Nível de Verificação:`, `${verificationLevel()}`, true) 
.addField(`:moneybag: Cargos [${message.guild.roles.size}]`, string, true)
			  .setDescription(`[Clique aqui para abrir o URL do ícone do servidor](${message.guild.iconURL})`)
	   
                  newMsg.edit({embed: embed3});
                  r.users.filter(u => r.remove(u.id !== client.user.id));
          break
          }
      });
  });
}
//var embed = new Discord.RichEmbed()
       
     //  .setAuthor(`${message.guild}`, `https://cdn.discordapp.com/emojis/314003252830011395.png`)
     //  .setThumbnail(message.guild.iconURL)
      // .setColor(`BLUE`)
  //     .addField(`:computer: ID`, message.guild.id, true)
//.addField(`:notepad_spiral: Canais no total:`, `${message.guild.channels.size}`, true)  
//.addField(`:pencil: Canais de texto:`, `${message.guild.channels.filter(channel => channel.type == 'text').size}`, true)
//.addField(`:notes: Canais de voz:`, `${message.guild.channels.filter(channel => channel.type == 'voice').size}`, true)


   //    embed.addField(":date: Criado em", moment(message.guild.createdAt).format('lll'), true);
	 //            embed.addField(`:star2: Entrei aqui em`, moment(message.guild.joinedAt).format(`lll`), true)
//embed.addField(`:robot: Robôs`, message.guild.members.filter(member => member.user.bot).size, true)
 //      embed.addField(`:zzz: Tempo AFK:`, `${timeoutconv}`, true)
 //      .addField(`:earth_americas: Região`, regiao(), true)
       
   //    .addField(`:raising_hand: Membros`,  message.guild.memberCount - message.guild.members.filter(member => member.user.bot).size, true)
    //   .addField(`<:blobkissheart:369904812608716800> l <:blobgo:369904811753078805> Tipo de Canal`, tipo(), true)
	 //  embed.addField(":crown: Rei", message.guild.owner.user.username + '#' + message.guild.owner.user.discriminator, true)
	 //  embed.addField(`<:blobdetective:369904803997941760> Nível de Verificação:`, `${verificationLevel()}`, true) 
	     //     embed.addField(`:moneybag: Cargos [${message.guild.roles.size}]`, string, true)
			 // .setDescription(`[Clique aqui para abrir o URL do ícone do servidor](${message.guild.iconURL})`)
	   

              
//message.channel.send({embed: embed});
         
