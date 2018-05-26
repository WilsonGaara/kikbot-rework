exports.run = (client, message, args)  => {

	const Discord = require("discord.js");
	  if (message.mentions.users.first()) {
    user = message.mentions.users.first().username;
    userfoto = message.mentions.users.first().avatarURL;
  } else {
    user = message.author.username
    userfoto = message.author.avatarURL;
  }

  let mensagens = args.join(` `)
  if(mensagens.length > 14) {
    message.channel.sendMessage('Você excedeu o limite de caracteres...')
  } else {
  
    var Jimp = require("jimp")
    let img    = Jimp.read('./edit666.png'),
    avatar = Jimp.read(userfoto)
Promise.all([img, avatar]).then(imgs => {

    let avatar = imgs[1],
    img    = imgs[0];
    avatar.resize(87, 87); 

    Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) {  
   
    img.print(font, 80, 270, mensagens);

   img.getBuffer(Jimp.MIME_PNG, (err, buffer) => {

      
            message.channel.sendFile(buffer)
    });
})
})}}
