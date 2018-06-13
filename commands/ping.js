exports.run = (client, message, args)  => {
	const Discord = require('discord.js');

		message.react(`🏓`);
message.channel.send(message.author + ' 📡 **|** `'+client.ping+'` (Shard: '+`${client.shard.id + 1}`+'/2)')
}
