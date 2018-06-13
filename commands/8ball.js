exports.run = (client, message, args)  => {
  
  let argns = args.join(``)
  if(argns.length < 1) {
    message.channel.sendMessage('Espero que você esteja cansado(a) de tanto digitar...')
    
  } else {
  if(!argns.size < 1) return message.reply(`Espero que você esteja cansado(a) de tanto digitar... `)
	message.react(`🎱`)
	var texto = ['Pergunte para outra pessoa', 'Não', 'Sim...', 'Não estou entendendo, me ensine!', `Não lhe devo esse tipo de resposta`, `Você é muito tagarela sábia?`, `Pergunte pra outra pessoa, quem sabe ela liga pra você :telephone_receiver: `, `Sua vida é tão ruim assim?`, `Estou em duvida...`, `E eu devo saber?`, `Sim!!`, `Não!`, `Eu não sei... E se for você?`, `Não ligo `];
    const random = texto[Math.floor(Math.random() * texto.length)];
    message.channel.send(random)
  }

}
