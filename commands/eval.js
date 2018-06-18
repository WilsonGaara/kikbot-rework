exports.run = (client, message, args) => {

if(message.author.id !== "395005096527790083") return;
try {
	const Discord = require('discord.js')
	const code = args.join(" ");
	let evaled = eval(code);

	if (typeof evaled !== "string")
		evaled = require("util").inspect(evaled);
var emb = new Discord.RichEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL)
.addField('Input', '```'+args.join(" ")+'```')
.setColor('GREEN')
.addField('Output', '```'+clean(evaled), {code:"xl"}+'```')
.setTimestamp()
.setFooter(message.author.tag, message.author.displayAvatarURL)
	message.channel.send(emb)
} catch (err) {
	var embed = new Discord.RichEmbed()
	.setAuthor(message.author.username, message.author.displayAvatarURL)
	.addField('Erro', '```'+clean(err)+'```')
	.setColor('RED')
	.setFooter('Desculpe, mas você errou em alguma coisa ai viu!')
	message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
}
}
