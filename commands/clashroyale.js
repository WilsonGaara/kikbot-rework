exports.run = (client, message, args)  => {
  const cr = require('clashroyale');
cr.getProfile('GG829JGY').then(profile => console.log(profile));
}
