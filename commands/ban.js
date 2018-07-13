exports.run = async(client, message, args) => {


    if  (!message.member.hasPermissions(["BAN_MEMBERS"])) return message.reply("Você não tem direito para banir!");
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    if (message.mentions.users.lenght < 1) return message.reply(':x: Coloque alguém para eu banir!')
    if (reason.length < 1) return message.reply('**:x: Faltou um motivo // Coloque alguém para eu banir!**');


    if (!message.guild.member(user).bannable) return message.reply("**:x: Eu não posso banir este usuario!**");
    let member = await message.guild.member(user).ban()


const Discord = require('discord.js');
var embed = new Discord.RichEmbed()
.setTitle(':cop: | Vish.')
.setThumbnail(user.avatarURL)
.setDescription('Ladrão preso!')
.addField(':cop: | Motivo', `${reason}`, true)
.addField(':cop: | Staff', `${message.author.tag}`, true)
.addField(':cop: | Ladrão', `${user.tag}`, true)
.setFooter('Kikbot- | Ban')
message.channel.send({embed : embed})
};
