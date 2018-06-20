const Discord = require('discord.js');
 const client = new Discord.Client({fetchAllMembers: true});
const config = require('./config.json');
const fs = require('fs');


client.on('ready', () => {

  console.log('Ok, pronto para a batalha!');

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


fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on("message", message => {
  if(message.content.includes( '<@431271825763467264>')){
message.channel.send('<:kikbotcuted:458296375793418240> **|** Menção, ah!\nMeu prefixo é k!, experimenta usar k!help :wink: ')
}
});
  if(!message.guild) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

 //Anti-Comando

 let command = message.content.split(" ")[0];
 command = command.slice(config.prefix.length);


  let args = message.content.split(" ").slice(1);
  


  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  
    var texto = ['2', '4', '3', '10', '12', '17', '23', '230']
 const random = texto[Math.floor(Math.random() * texto.length)];
 const Discord2 = require('discord.js');
var embed1 = new Discord2.RichEmbed()

.setDescription('<:kikbotcuted:458296375793418240> **|** Vejo que está gostando de meus comandos, se ainda não divulgou o **kikbot** para seus amigos. Peço que por favor, me divulgue, isso ajuda bastante.\n[Clique aqui para me adcionar em algum servidor.](https://discordapp.com/api/oauth2/authorize?client_id=431271825763467264&permissions=36826310&scope=bot)')
.setTimestamp()
.setColor('BLUE')
.setFooter(message.author.tag, client.user.avatarURL)
if(random == '2') return message.channel.send({embed : embed1})
  } catch (err) {
    console.error(err);
  }
})
client.login(process.env.BOT_TOKEN)
