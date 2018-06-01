const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')
const fs = require('fs');









client.on('ready', () => {
console.log(`Opa, estou vivo. Literalmente, onde estou? Na web!`)
});




client.on('guildMemberAdd', member => {

    let canal = member.guild.channels.find('name', 'hoopla-logs')

  if (!canal) return;

  canal.send(` <:blobangel:395358333441146890> **l** Bem-vindo(a) ao nosso servidor, ${member}.`);
})


client.on('guildMemberRemove', member => {
  const canal = member.guild.channels.find('name', 'hoopla-logs');
    if (!canal) return;

  canal.send(` <:blobfrowning:395358353196449812> **l** ${member} Saiu do servidor.`);

});



client.on('guildCreate', guild => {


console.log(`Oi, eu entrei em uma guild.`);

});

client.on('guildDelete', guild => {

console.log(`Oops, sai de uma guild. Hoopla!`)



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
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
      prefixes[message.guild.id] = {
          prefixes: config.prefix
      };
  }
  let prefixo = prefixes[message.guild.id].prefixes;
  if(!message.guild) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
 //Anti-Comando errado
 
 let command = message.content.split(" ")[0];
 command = command.slice(prefixo.length);


  let args = message.content.split(" ").slice(1);






  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
})
client.login(process.env.BOT_TOKEN)
