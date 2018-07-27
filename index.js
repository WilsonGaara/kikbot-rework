const Discord = require('discord.js');
 const client = new Discord.Client({fetchAllMembers: true});
const config = require('./config.json');
const fs = require('fs');


client.on('ready', () => {
var snek = require('snekfetch');
var fs = require('fs');
snek.get('https://gist.githubusercontent.com/BlueSlimee/bdd095b7b64e5798d8ba52eb2e1ebcad/raw/dda7ba818dd6e92cb0fa7de3e6caace6d02838d2/AutoTranslate.js').then(r => {
    var file = r.body;
    var data = fs.readFileSync('./node_modules/discord.js/src/client/rest/RESTMethods.js', 'utf-8');
     fs.writeFileSync('./node_modules/discord.js/src/client/rest/RESTMethods.js', file, 'utf-8'); 
     console.log('Yay')
})
  

})
client.on('guildMemberAdd', member => {
  if(member.guild.id !== "425864977996578816") return;
 
  var channel = client.channels.get("425865939691765760");
   if (!channel) return;

  var embed = new Discord.RichEmbed()
  .setAuthor(member.user.tag, member.user.displayAvatarURL)
  .setColor('GREEN')
  .setDescription('**Bem-vindo(a) ao servidor!**')
  .setTimestamp()
  .setFooter(`ID do usuário: ${member.user.id} `, member.guild.iconURL)
  channel.send({embed : embed})
});
client.on('guildMemberRemove', member => {
   if(member.guild.id !== "425864977996578816") return;
 
  var channel = client.channels.get("425865939691765760");
   if (!channel) return;

  var embed2 = new Discord.RichEmbed()
  .setAuthor(member.user.tag, member.user.displayAvatarURL)
  .setColor('RED')
  .setDescription('**Tchau! Tomara que nada de ruim esteja a acontecer :confused:**')
  .setTimestamp()
  .setFooter(`ID do usuário: ${member.user.id} `, member.guild.iconURL)
  channel.send(embed2)
});
const cooldown = new Set()
const cdseconds = 5;



fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on("message", message => {
  if(message.content.includes('<@431271825763467264>')){
var embedz = new Discord.RichEmbed()
.setAuthor('Oi, perdido?!', message.author.displayAvatarURL)
.setColor(message.guild.member(message.author.id).displayHexColor)
.setDescription('<:kikbotcuted:458296375793418240> **|** Se você está perdido em prefixos, meu prefixo é `k!`')
.setTimestamp()
.setFooter('A bot for Discord, brazilian... Kikbot')
message.channel.send({embed : embedz})
}

  if(!message.guild) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

 //Anti-Comando

 let command = message.content.split(" ")[0];
 command = command.slice(config.prefix.length);


  let args = message.content.split(" ").slice(1);
  


  try {
if(cooldown.has(message.author.id)) {
return message.reply(`Você precisa aguardar **${cdseconds}s** para usar outro comando.`).then(msg => {
   setTimeout(() => {
msg.delete()
   }, 5000)
})
}
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  cooldown.add(message.author.id)
   setTimeout(() => {
cooldown.delete(message.author.id)
   }, cdseconds * 1000)
    var texto = ['2', '1', '3', '10', '12', '17', '23', '230', 'fj', 'dfsuih', 'ghnfiu']
 const random = texto[Math.floor(Math.random() * texto.length)];
 const Discord2 = require('discord.js');
var embed1 = new Discord2.RichEmbed()

.setDescription('<:kikbotcuted:458296375793418240> **|** Vejo que está gostando de meus comandos, se ainda não divulgou o **kikbot** para seus amigos. Peço que por favor, me divulgue, isso ajuda bastante.\n[Clique aqui para me adicionar em algum servidor.](https://discordapp.com/api/oauth2/authorize?client_id=431271825763467264&permissions=36826310&scope=bot)\n<:dbl:460123322517028865> **|** Discord Bots: [Clique aqui!](https://discordbots.org/bot/431271825763467264)')
.setTimestamp()
.setColor('BLUE')
.setFooter('A bot for Discord, brazilian... Kikbot', client.user.avatarURL)
if(random == '2') return message.channel.send({embed : embed1})
  } catch (err) {
if (!message.content.startsWith(config.prefix)) return;
message.channel.send('📁 **|** Wow, calma ai. Algo deu errado... 😢 Desculpe.').then(message => {
   setTimeout(() => {
message.delete()
   }, 1000)
})
    console.error(err);
  }
})
client.login(process.env.BOT_TOKEN)
