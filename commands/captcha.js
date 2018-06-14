exports.run = async (client, message, args)  => {
  message.delete()
  var texto = ['ay.w@zz', 'zwyzw', 'kciwzw', 'upnow', 'randomized', 'kikbot', 'Z 395r_W'];
    const random = texto[Math.floor(Math.random() * texto.length)];
	let CaptchaRole = message.guild.roles.find("name", `Membros`);
  if(!CaptchaRole) { return message.reply(":x: Não vi nenhum cargo com o nome de `Membros`");
  
} else {
};
if(message.member.roles.has(CaptchaRole.id)) {
  message.guild.member(message.author.id).removeRole(CaptchaRole.id)
message.author.send(`Cargo removido :frowning:`)

} else {
  message.channel.send(':white_check_mark: **|** Ok, agora o captcha é: **'+random+'**\nDigite e espere 22 segundos para eu verificar!')
.then(() => {
  message.channel.awaitMessages(response => response.author.id === message.author.id, {
    max: 1,
    time: 22000,
    errors: ['time'],
  })
.then((collected) => {
  collected = collected.first().content.toLowerCase();
  if(collected !== random) { return message.channel.send('<:err:449743511391305748> **|** Você não acertou o captcha, tente novamente.')
     } else { 
      if(collected == random) {
        message.guild.member(message.author.id).addRole(CaptchaRole.id).catch(console.error);
        message.author.send(`Cargo adcionado em: ${message.guild}`)
      message.channel.send(':white_check_mark: **|** Mano do céu, conseguiu brother.')
    }}})
    
.catch(() => {
      message.channel.send('<:err:449743511391305748> **|** Você não digitou nada depois de 22 segundos... Decepção');
    });
});
};
};
