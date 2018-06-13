const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');


client.on('ready', () => {

  console.log('Ok, pronto para a batalha!');

})
client.on('guildMemberAdd', member => {


    let channel = member.guild.channels.find('name', 'testar-bot-javascript💻 ')
   
    if (!channel) return;
  var Discord200 = require('discord.js')
  var embed = new Discord200.RichEmbed()
  .setAuthor(member.user.tag, member.user.displayAvatarURL)
.setDescription(`🙋 **|** Bem-vindo(a) ao servidor!`)
  .setColor('GREEN')
  .setTimestamp()
  .setFooter(`ID do usuário: ${member.user.id}`, member.user.displayAvatarURL)
    channel.send({embed : embed})
  })

client.on('guildMemberDelete', member => {


    let channel2 = member.guild.channels.find('name', 'testar-bot-javascript💻 ')
   
    if (!channel2) return;
  
  var embed2 = new Discord200.RichEmbed()
  .setAuthor(member.user.tag, member.user.displayAvatarURL)
.setDescription(`😕 **|** Tchau, espero que nada de mal lhe-aconteça...`)
  .setColor('RED')
  .setTimestamp()
  .setFooter(`ID do usuário: ${member.user.id}`, member.user.displayAvatarURL)
    channel2.send({embed : embed2})
  })
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
