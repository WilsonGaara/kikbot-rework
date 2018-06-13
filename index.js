const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');


client.on('ready', () => {

  console.log('Ok, pronto para a batalha!');

})
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('id', '425865939691765760');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  var embed = new Discord.RichEmbed()
  .setAuthor(member.user.tag, member.user.displayAvatarURL)
  .setColor('GREEN')
  .setDescription('**Bem-vindo(a) ao servidor!**')
  .setTimestamp()
  .setFooter(`ID do usuário: ${member.user.id} `, member.guild.iconURL)
  channel.send({embed : embed})
});
client.on('guildMemberDelete', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('id', '425865939691765760');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  var embed = new Discord.RichEmbed()
  .setAuthor(member.user.tag, member.user.displayAvatarURL)
  .setColor('RED')
  .setDescription('**Tchau! Tomara que nada de ruim esteja a acontecer :confused:**')
  .setTimestamp()
  .setFooter(`ID do usuário: ${member.user.id} `, member.guild.iconURL)
  channel.send({embed : embed})
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

  if(!message.guild) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
 //Anti-Comando errado

 let command = message.content.split(" ")[0];
 command = command.slice(config.prefix.length);


  let args = message.content.split(" ").slice(1);
  



  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
})
client.login(process.env.BOT_TOKEN)
