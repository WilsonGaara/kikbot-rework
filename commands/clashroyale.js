exports.run = (client, message, args)  => {
  const cr = require('clashroyale');
cr.getProfile('2J8U0PRJ').then(profile => console.log(profile));
}
