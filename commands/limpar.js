exports.run = (client, message, args)  => {

    if (if(args.join(' ').length > 100)) {
        message.channel.send(`Opa, acho que mais de 100 não posso!`)
    } else {
        if(!args[0]) return message.reply(`Coloque algum número depois do comando :x:`)
            if  (!message.member.hasPermissions(["MANAGE_MESSAGES"])) return message.reply("**Você não tem a permissão para usar isto!**");
            let messagecount = parseInt
message.channel.bulkDelete(args[0])
.catch(error => message.reply(`<:err:449743511391305748> **|** Oops! Você excedeu o limite de mensagens para serem excluidas, eu acho.`)) 


    }
}
