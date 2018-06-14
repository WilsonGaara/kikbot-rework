exports.run = (client, message, args)  => {
  message.delete()
  var texto = ['a.y_w@zz', 'Z wYzW', 'k.ciwzZ', 'upNow', 'randomized', 'kikbot'];
    const random = texto[Math.floor(Math.random() * texto.length)];
	let CaptchaRole = message.guild.roles.find("name", `Membros`);
  if(!CaptchaRole) { return message.reply(":x: Não vi nenhum cargo com o nome de `Membros`");
  
} else {
};
if(message.member.roles.has(CaptchaRole.id)) {
  message.guild.member(message.author.id).removeRole(CaptchaRole.id)
message.author.send(`Cargo removido :frowning:`)

} else {
message.channel.send(':white_check_mark: **|** Ok, agora o captcha é: **'+random+'**')
const check = await message.channel.awaitMessages(m => m.author.id === message.author.id, { time: 5000 })
if(check.toLowerCase() == random) {
		 message.guild.member(message.author.id).addRole(CaptchaRole.id).catch(console.error);
     message.author.send(`Cargo adcionado em: ${message.guild}`)
   message.channel.send(':white_check_mark: **|** Mano do céu, conseguiu brother.')
}
if(check.toLowerCase() !== random) return message.channel.send('<:err:449743511391305748> **|** Você não acertou o captcha, tente novamente.')
    };
  };
