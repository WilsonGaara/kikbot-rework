exports.run = (client, message, args)  => {
	const Discord = require("discord.js");
	  if (message.mentions.users.first()) {
    user = message.mentions.users.first().username;
    userfoto = message.mentions.users.first().displayavatarURL;
  } else {
    user = message.author.username
    userfoto = message.author.displayavatarURL;
  }
    var Jimp = require("jimp")
    let mask    = Jimp.read('./papa.png')
    
    avatar = Jimp.read(userfoto)

Promise.all([mask, avatar]).then(imgs => {
  
    let avatar = imgs[1],
    mask    = imgs[0];
   
    avatar.resize(300, 300); 
 
   
    img.composite(avatar, 306, 241).getBuffer(Jimp.MIME_PNG, (err, buffer) => {
        img.composite(mask, 306, 241).getBuffer(Jimp.MIME_PNG, (err, buffer) => {
        img(mask, 306, 241)

message.channel.sendFile(buffer)
      });

})})};
