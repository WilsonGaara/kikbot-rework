exports.run = (client, message, args)  => {
	const Discord = require('discord.js');

message.channel.send(`:nerd: **|** Calculando latência, aguarde.`).then(msg1 => {


msg1.edit('🏓 **|** Latência calculada da mensagem editada: '+`**${Date.now() - msg1.createdTimestamp}**`+'ms\n❤ Batimento cardiaco: (ping - websocket) `'+Math.round(client.ping)+'`ms (📡 **|** Shard: **'+`${client.shard.id + 1}**/2)\n🆘 **|** Caso esteja tendo problemas com conexão do Discord verifique sua rede ou acesse: https://status.discordapp.com`)
})
}
