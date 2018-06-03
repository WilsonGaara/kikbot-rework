exports.run = (bot, message, args)  => {
  const CRoyale = require('croyale');
const client = new CRoyale.Client(process.env.CR);
 
client.getPlayer('CVLQ2GV8')
    .then(player => {
        console.log(`The player's name is ${player.name}`);
  console.log(player)
    });
  }
