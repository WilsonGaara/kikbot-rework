exports.run = (client, message, args)  => {
  
  let argns = args.join(``)
  if(argns.length < 1) {
    message.channel.sendMessage('Espero que você esteja cansado(a) de tanto digitar...')
    
  } else {
  if(!argns.size < 1) return message.reply(`Espero que você esteja cansado(a) de tanto digitar... `)
	message.react(`🎱`)
	var texto = ['Eu tenho uma pequena certeza que sim.', 'Não, acho que não viu.', 'Como assim? Tente denovo', 'Alô?! TERRA?!', 'Hmm, acho que sim em!', 'Acho que não...']
    const random = texto[Math.floor(Math.random() * texto.length)];
    message.channel.send(message.author+' 🎱 **|** Minha resposta é: '+random+'\n🤔 **|** A resposta muda a cada novo uso do comando (resposta aleatória)')
  }

}
