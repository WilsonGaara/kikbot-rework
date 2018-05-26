exports.run = (client, message, args)  => {
	const Discord = require("discord.js");
	  if (message.mentions.users.first()) {
    user = message.mentions.users.first().username;
    userfoto = message.mentions.users.first().avatarURL;
  } else {
    user = message.author.username
    userfoto = message.author.avatarURL;
  }
    var Jimp = require("jimp")
    let img    = Jimp.read('./mine.png'),// vAI PEGAR A IMAGEM NORMAL
    avatar = Jimp.read(message.author.avatarURL)
    avatar2 = Jimp.read(message.mentions.users.first().avatarURL)// Pega o avatar do meliante
Promise.all([img, avatar, avatar2]).then(imgs => {
  let avatar2  = imgs[2]
    let avatar = imgs[1],
    img    = imgs[0];
    avatar2.resize(138, 138)
    avatar.resize(140, 140); 
    Jimp.loadFont(Jimp.FONT_SANS_16_BLACK).then(function (font) {  
  
      img.composite(avatar2, 356, 50).getBuffer(Jimp.MIME_PNG, (err, buffer) => {
        
    img.composite(avatar, 120, 45).getBuffer(Jimp.MIME_PNG, (err, buffer) => {


message.channel.sendFile(buffer)
      });
    
})});
})};
