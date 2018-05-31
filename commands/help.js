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
  } else if (guildVerification == "lond") {
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
	   

              
       exports.run = (client, message, args)  => {
        let Discord = require('discord.js')
        var texto = ['RED', 'GOLD', 'BLUE'];
        const random = texto[Math.floor(Math.random() * texto.length)];
        const embed = new Discord.RichEmbed()
    .setAuthor('Ajuda | Kikbot-', client.user.avatarURL)
    .setColor(random)
    .setTimestamp()
    .setDescription('Olá! **'+message.author+'**, muito obrigado por me usar!\n🔗 **|** Minha guild: [Clique aqui!](https://discord.gg/PuQ3RNN)\n🔗 **|** OAUTH2: [Clique aqui!](https://discordapp.com/api/oauth2/authorize?client_id=431271825763467264&permissions=36826310&scope=bot)\n<:Kikbot:449725569056112649> **|** Meu website: [Clique aqui!](http://kikbot-.glitch.me/)')
    .setFooter(`SOS | kikbot-@outlook.com`, message.author.avatarURL)
    message.channel.send({embed : embed})
    message.reply(':white_check_mark: **|** Uma lista de meus comandos foi enviada na sua **DM**!\nCaso não for enviada, ative as configurações de privacidade.\n**1** de **1** respostas enviadas, ('+ Math.round(client.ping) / 1000+' segundos)');
    
    const embedb = new Discord.RichEmbed()
    .setTitle('🎨 Photoshop')
    .setThumbnail(client.user.avatarURL)
    .setDescription('_Nestes comandos eu uso imagens, edito. Porém sem floodar comandos photoshop, não tenho muito recurso pra fazer tantas fotos_\n\nk!wasted `<usuário.mencionado>` **|** Cria uma imagem divertida, como esta. [Imagem](https://cdn.discordapp.com/attachments/433375129976832010/434372618959978526/file.jpg)\nk!primeiraspalavras `<palavras>` **|** Cria uma imagem engraçada como esta. [Imagem](https://cdn.discordapp.com/attachments/433375129976832010/434373958268223500/file.png)\nk!lixo `<usuário.mencionado>` **|** Cria uma imagem como esta. [Imagem](https://cdn.discordapp.com/attachments/433375129976832010/434374479070625819/file.jpg)')
    .setColor(random)
    
    message.author.send({embed : embedb})
    
    const embedc = new Discord.RichEmbed()
    .setTitle('👮 Administração e Segurança')
    .setThumbnail(client.user.avatarURL)
    .setDescription('_Nestes comandos eu administro o servidor por ordem de outro administrador_\n\nk!mute `<usuário.mencionado>` `<tempo>` **|** Silencia alguém no servidor. Por determinado tempo, exemplo: k!mute **usuário** 10. Ele vai silenciar o usuário por 10 minutos.\nk!mute**s** `<usuario.mencionado>` `<tempo>` **|** Silencia o usuário mencionado. Por determinado tempo Ex: k!mutes **usuário** 10. Silencia o usuário por dez segundos.\nk!report `<usuario.mencionado>` `<razão/motivo>` **|** Reporta algum usuário e manda em um canal que precisa ser chamado de `#kik-modlogs`\nk!ban `<usuário.mencionado>` `(razão/motivo)`**|** Pune o usuário mencionado do servidor atual.')
    .setColor(random)
    
    message.author.send({embed : embedc})
    const embedd = new Discord.RichEmbed()
    .setTitle('⌨ Discord')
    .setThumbnail('https://images-ext-1.discordapp.net/external/nuERQnVPqEaQA4PQgD-UfjbQy45tWroVXfMdpv5ZusI/https/lh3.googleusercontent.com/_4zBNFjA8S9yjNB_ONwqBvxTvyXYdC7Nh1jYZ2x6YEcldBr2fyijdjM2J5EoVdTpnkA%3Dw300?width=80&height=80')
    .setDescription('_Comandos relacionados ao Discord_\n\nk!userinfo **|** Mostra informações suas ou de outro usuário, caso mencione alguém\nk!serverinfo **|** Mostra informações no servidor local.\nk!avatar **|** Mostra seu avatar no Discord ou de outra pessoa de quem podes mencionar.\nk!emoji `<emoji>` **|** Muda o emoji usado para outro formato. Exemplo `🎨`')
    .setColor(random)
    const embede = new Discord.RichEmbed()
    .setTitle('💻 Utilitários')
    .setThumbnail(message.author.displayAvatarURL)
    .setDescription('__Comandos para ajudar no dia a dia__\n\nk!clima `<cidade>` **|** Mostra as condições climáticas de um lugar na Terra.\nk!steam `<url.steam.perfil>` **|** Mostra informações pelo URL de perfil ou Id64 Steam de um usuário Steam.\nk!traduzir `<lingua>` `<texto>` **|** Traduza um texto usando a Google Tradutor API.')
    .setColor(random)
    message.author.send({embed : embede})
    const embedz = new Discord.RichEmbed()
    .setColor('GOLD')
    .setDescription('Comando | `'+message.guild+'`')
    message.channel.send({embed : embedz});
    };
    
