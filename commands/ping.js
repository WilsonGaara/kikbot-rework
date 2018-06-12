exports.run = (client, message, args)  => {
	const Discord = require('discord.js');

		message.react(`🏓`);

	
	message.reply('📡 **l** `'+Math.round(client.ping)+'ms`' + ' Shard **|** '+ client.shard.id + 1 +'/2\n`❔` **|** Este comando te fala sobre minha taxa de ida e volta, em milisegundos, isto é. Meu **ping**. ');
	 


};
