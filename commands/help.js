exports.run = (client, message, args)  => {
	let Discord = require('discord.js')
	var texto = ['RED', 'GOLD', 'BLUE', 'GREEN'];
	const random = texto[Math.floor(Math.random() * texto.length)];
	const embed = new Discord.RichEmbed()
.setAuthor('Ajuda | Kikbot-', client.user.avatarURL)
.setColor(random)
.setTimestamp()
.setDescription('Olá! **'+message.author+'**, desfrute de meus comandos!\n🔗 **|** Minha guild: [Clique aqui!](https://discord.gg/sFQFK2Q)\n🔗 **|** OAUTH2: [Clique aqui!](https://discordapp.com/api/oauth2/authorize?client_id=431271825763467264&permissions=36826310&scope=bot)\n<:Kikbot:449725569056112649> **|** Meu website: [Clique aqui!](http://kikbot-.glitch.me/)\n<:dbl:460123322517028865> **|** Discord Bots: [Clique aqui!](https://discordbots.org/bot/431271825763467264)')
.setFooter(`SOS | kikbot-@outlook.com`, message.author.avatarURL)
message.channel.send({embed : embed})
message.reply(':white_check_mark: **|** Uma lista de meus comandos foi enviada na sua **DM**!\nCaso não for enviada, ative as configurações de privacidade.\n**1** de **1** respostas enviadas, ('+ Math.round(client.ping) / 1000+' segundos)');

const embedb = new Discord.RichEmbed()
.setTitle('🎨 Photoshop')
.setThumbnail(client.user.avatarURL)
.setDescription('_Nestes comandos eu uso imagens, edito. Porém sem floodar comandos photoshop, não tenho muito recurso pra fazer tantas fotos_\n\nk!wasted `<usuário.mencionado>` **|** Cria uma imagem divertida, como esta. [Imagem](https://cdn.discordapp.com/attachments/433375129976832010/434372618959978526/file.jpg)\nk!primeiraspalavras `<palavras>` **|** Cria uma imagem engraçada como esta. [Imagem](https://cdn.discordapp.com/attachments/433375129976832010/434373958268223500/file.png)\nk!lixo `<usuário.mencionado>` **|** Cria uma imagem como esta. [Imagem](https://cdn.discordapp.com/attachments/433375129976832010/434374479070625819/file.jpg)')
.setColor(random)

message.author.send({embed : embedb})

const embedc = new Discord.RichEmbed()
.setTitle('👮 Administração e Segurança')
.setThumbnail(client.user.avatarURL)
.setDescription('_Nestes comandos eu administro o servidor por ordem de outro administrador_\n\nk!mute `<usuário.mencionado>` `<tempo>` **|** Silencia alguém no servidor. Por determinado tempo, exemplo: k!mute **usuário** 10m. Ele vai silenciar o usuário por 10 minutos.\nk!report `<usuario.mencionado>` `<razão/motivo>` **|** Reporta algum usuário e manda em um canal que precisa ser chamado de `#kik-modlogs`\nk!ban `<usuário.mencionado>` `(razão/motivo)`**|** Pune o usuário mencionado do servidor atual.')
.setColor(random)

message.author.send({embed : embedc})
const embedd = new Discord.RichEmbed()
.setTitle('⌨ Discord')
.setThumbnail('https://images-ext-1.discordapp.net/external/nuERQnVPqEaQA4PQgD-UfjbQy45tWroVXfMdpv5ZusI/https/lh3.googleusercontent.com/_4zBNFjA8S9yjNB_ONwqBvxTvyXYdC7Nh1jYZ2x6YEcldBr2fyijdjM2J5EoVdTpnkA%3Dw300?width=80&height=80')
.setDescription('_Comandos relacionados ao Discord_\n\nk!userinfo **|** Mostra informações suas ou de outro usuário, caso mencione alguém\nk!serverinfo **|** Mostra informações no servidor local.\nk!avatar **|** Mostra seu avatar no Discord ou de outra pessoa de quem podes mencionar.\nk!emoji `<emoji>` **|** Muda o emoji usado para outro formato. Exemplo `🎨`\nk!serverinfo **|** Mostra informações sobre o servidor atual.\nk!info **|** Mostra minhas informações, sharding, users, guilds e uptime.')
.setColor(random)
message.author.send({embed : embedd})
const embede = new Discord.RichEmbed()
.setTitle('💻 Utilitários')
.setThumbnail(message.author.displayAvatarURL)
.setDescription('_Comandos para ajudar no dia a dia :sunglasses: _\n\nk!clima `<cidade>` **|** Mostra as condições climáticas de um lugar na Terra.\nk!steam `<url.steam.perfil>` **|** Mostra informações pelo URL de perfil ou Id64 Steam de um usuário Steam.\nk!traduzir `<lingua>` `<texto>` **|** Traduza um texto usando a Google Tradutor API.')
.setColor(random)
message.author.send({embed : embede})
var embedz = new Discord.RichEmbed()
.setDescription('Em breve | Coming soon')
.setColor(random)
.setTimestamp()
.setFooter(client.user.tag, message.author.displayAvatarURL)
message.author.send({embed : embedz})
}

