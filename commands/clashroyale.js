exports.run = (client, message, args)  => {
  const CRoyale = require('croyale');
const client = new CRoyale.Client(process.env.CR);
 
client.getPlayer('CVLQ2GV8', { keys: ['name'] })
    .then(player => {
        console.log(`The player's name is ${player.name}`);
  console.log(player)
    });
  }
