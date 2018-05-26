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
    let img    = Jimp.read('./edit.png'),
    avatar = Jimp.read(userfoto)
Promise.all([img, avatar]).then(imgs => {
    let avatar = imgs[1],
    img    = imgs[0];
    avatar.resize(86, 86); 
    Jimp.loadFont(Jimp.FONT_SANS_16_BLACK).then(function (font) {  
  
    
    img.composite(avatar, 1, 1).getBuffer(Jimp.MIME_PNG, (err, buffer) => {

       
            message.channel.sendFile(buffer)
    });
})
})}
