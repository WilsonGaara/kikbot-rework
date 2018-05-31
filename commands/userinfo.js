const Discord = require('discord.js');
exports.run = (client, message, args, game)  => {
    if (message.mentions.users.first()) {
        userapelido = message.guild.member(message.mentions.users.first()).nickname
      user = message.mentions.users.first().username;
      userfoto = message.mentions.users.first().displayavatarURL;
    userstatus = message.mentions.users.first().presence.status;
    usertag = message.mentions.users.first().tag;
    usercolorole = message.guild.member(message.mentions.users.first()).displayHexColor;
    usercriado = message.mentions.users.first().createdAt;
    userid = message.mentions.users.first().id;
  game = message.mentions.users.first().presence.game
  userentrou = message.guild.member(message.mentions.users.first().id).joinedAt;
  usercargo = message.guild.member(message.mentions.users.first().id).roles.size;
  userbot = message.mentions.users.first().bot;
  
    } else {
      user = message.author.username;
      userfoto = message.author.displayavatarURL;
      userstatus = message.author.presence.status;
    usertag = message.author.tag;
    usercolorole = message.guild.member(message.author.id).highestRole.displayHexColor;
    usercriado = message.author.createdAt;
    userid = message.author.id;
    game = message.author.presence.game
    userentrou = message.guild.member(message.author.id).joinedAt;
    usercargo = message.guild.member(message.author.id).roles.size;
    userapelido = message.guild.member(message.author.id).nickname
    userbot = message.author.bot;
    }
var embed = new Discord.RichEmbed()
.setAuthor('Informações de:'+usertag, userfoto)
.setColor(usercolorole)
.setTimestamp()
.setFooter('kikbot-', client.user.avatarURL)
  };
