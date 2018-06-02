exports.run = (client, message, args)  => { 


        
    
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
    } else if (guildVerification == "london") {
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

    const Discord = require('discord.js')

                var embed2 = new Discord.RichEmbed()
             .setAuthor(message.guild)
             .addField('💻 ID' , message.guild.id, true)
             .addField('👑 Dono', message.guild.owner, true)
             .addField('🌎 Região', regiao(), true)
             .addField(`💬 Canais(${message.guild.channels.size})`, `:pencil: **Texto:** ${message.guild.channels.filter(channel => channel.type == 'text').size}\n:speaking_head: **Voz:** ${message.guild.channels.filter(channel => channel.type == 'voice').size}`, true)
             .addField(`📅 Criado em`, moment(message.guild.createdAt).format('lll'), true)
             .addField(`🌟 Entrei aqui em`,moment(message.guild.joinedAt).format(`lll`), true)
             .addField(`👥 Membros (${message.guild.memberCount})`, `🙋 **Pessoas:** ${message.guild.memberCount - message.guild.members.filter(member => member.user.bot).size}\n🤖 **Robôs:** ${message.guild.members.filter(member => member.user.bot).size}`, true)
             .setColor('BLUE')
             .setThumbnail(message.guild.iconURL)
             .setTimestamp()
             .setFooter(message.guild)
                   message.channel.send({embed: embed2});

let fala = `${message.guild.iconURL}`
var convert = fala.replace('jpg', 'png');
               
  message.channel.send(convert)
} 
                
            
  
