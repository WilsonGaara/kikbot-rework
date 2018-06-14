exports.run = (client, message, args)  => {
  message.delete()
  var texto = ['a.y_w@zz', 'Z wYzW', 'k.ciwzZ', 'upNow', 'randomized', 'kikbot'];
    const random = texto[Math.floor(Math.random() * texto.length)];
	let CaptchaRole = message.guild.roles.find("name", `Membros`);
  if(!CaptchaRole) { return message.reply(":x: Não vi nenhum cargo com o nome de `Membros`");
} else {
};
message.channel.send(random)
if(args.join(" ").toLowerCase() == random) {
		 message.guild.member(message.author.id).addRole(CaptchaRole.id).catch(console.error);
     message.author.send(`Cargo adcionado em: ${message.guild}`)
if(args.join(" ").toLowerCase() !== random) return message.channel.send('<:err:449743511391305748> **|** Você não acertou o captcha, tente novamente.')
    };
  };
