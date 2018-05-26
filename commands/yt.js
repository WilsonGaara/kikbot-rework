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
    let img    = Jimp.read('./teste.png'),
    avatar = Jimp.read(userfoto)
Promise.all([img, avatar]).then(imgs => {
    let avatar = imgs[1],
    img    = imgs[0];
    avatar.resize(90, 90); 
    Jimp.loadFont(Jimp.FONT_SANS_16_BLACK).then(function (font) {  
    img.print(font, 144, 36, `${user}`);
    
    img.composite(avatar, 30, 10).getBuffer(Jimp.MIME_PNG, (err, buffer) => {

       
            message.channel.sendFile(buffer)
    });
})
})}
