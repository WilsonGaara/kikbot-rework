exports.run = (client, message, args)  => {
    let Discord = require('discord.js')
    var texto = ['RED', 'GOLD', 'BLUE'];
    const random = texto[Math.floor(Math.random() * texto.length)];
    const embed = new Discord.RichEmbed()
.setAuthor('Ajuda | Kikbot-', client.user.avatarURL)
.setColor(random)
.setDescription('Olá! **'+message.author+'**, muito obrigado por me usar!\n🔗 **|** Minha guild: [Clique aqui!](https://discord.gg/PuQ3RNN)\n🔗 **|** OAUTH2: [Clique aqui!](https://discordapp.com/oauth2/authorize?client_id=405846104123637761&scope=bot&permissions=0)\n<:Kikbot:449725569056112649> **|** Meu website: [Clique aqui!](http://kikbot-.glitch.me/)')
.setFooter(`Email suporte | kikbot-@outlook.com`, message.author.avatarURL)
message.channel.send({embed : embed})
message.reply(':white_check_mark: **|** Uma lista de meus comandos foi enviada na sua **DM**!\nCaso não for enviada, ative as configurações de privacidade.\n**1** de **1** respostas enviadas, ('+ client.ping / 1000+' segundos)');

const embedb = new Discord.RichEmbed()
.setTitle('🎨 Photoshop')
.setThumbnail(client.user.avatarURL)
.setDescription('_Nestes comandos eu uso imagens, edito. Porém sem floodar comandos photoshop, não tenho muito recurso pra fazer tantas fotos_\n\nk!wasted `<usuário.mencionado>` **|** Cria uma imagem divertida, como esta. [Imagem](https://cdn.discordapp.com/attachments/433375129976832010/434372618959978526/file.jpg)\nk!primeiraspalavras `<palavras>` **|** Cria uma imagem engraçada como esta. [Imagem](https://cdn.discordapp.com/attachments/433375129976832010/434373958268223500/file.png)\nk!lixo `<usuário.mencionado>` **|** Cria uma imagem como esta. [Imagem](https://cdn.discordapp.com/attachments/433375129976832010/434374479070625819/file.jpg)')
.setColor(random)

message.author.send({embed : embedb})

const embedc = new Discord.RichEmbed()
.setTitle('👮 Administração e Segurança')
.setThumbnail(client.user.avatarURL)
.setDescription('_Nestes comandos eu administro o servidor por ordem de outro administrador_\n\nk!mute `<usuário.mencionado>` `<tempo>` **|** Silencia alguém no servidor. Por determinado tempo, exemplo: k!mute **usuário** 10. Ele vai silenciar o usuário por 10 minutos.\nk!mute**s** `<usuario.mencionado>` `<tempo>` **|** Silencia o usuário mencionado. Por determinado tempo Ex: k!mutes **usuário** 10. Silencia o usuário por dez segundos.\nk!report `<usuario.mencionado>` `<razão/motivo>` **|** Reporta algum usuário e manda em um canal que precisa ser chamado de `#kik-modlogs`\nk!ban `<usuário.mencionado>` `(razão/motivo)`**|** Pune o usuário mencionado do servidor atual.')
.setColor(random)

message.author.send({embed : embedc})
const embedd = new Discord.RichEmbed()
.setTitle('⌨ Discord')
.setThumbnail('https://images-ext-1.discordapp.net/external/nuERQnVPqEaQA4PQgD-UfjbQy45tWroVXfMdpv5ZusI/https/lh3.googleusercontent.com/_4zBNFjA8S9yjNB_ONwqBvxTvyXYdC7Nh1jYZ2x6YEcldBr2fyijdjM2J5EoVdTpnkA%3Dw300?width=80&height=80')
.setDescription('_Comandos relacionados ao Discord_\n\nk!memberinfo **|** Mostra informações suas ou de outro usuário, caso mencione alguém\nk!serverinfo **|** Mostra informações no servidor local.\nk!avatar **|** Mostra seu avatar no Discord ou de outra pessoa de quem podes mencionar.\nk!emoji `<emoji>` **|** Muda o emoji usado para formato unicode. Exemplo `🎨`')
.setColor(random)

message.author.send({embed : embedd})
const embede = new Discord.RichEmbed()
.setColor('GOLD')
.setDescription('Comando | `'+message.guild+'`')
message.channel.send({embed : embede});
};
