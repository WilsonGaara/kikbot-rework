exports.run = async (client, message, args) => {
var video;
const ytdl = require("ytdl-core");
ytSearch = require('yt-search');
 ytSearch(args.join(" "), async function (err, r) {
   if ( err ) throw err
   const videos = r.videos
   video = videos[0]
   console.log(video)
   let musica = "www.youtube.com" + video.url
   var connection = await message.member.voiceChannel
   let voiceChannel = message.member.voiceChannel
   voiceChannel.join()
   .then(conneciton => {
     const stream = ytdl(musica, { filter : 'audioonly' });
     const dispatcher = connection.playStream(stream)
     dispatcher.setVolumeLogarithmic(5 / 5);
   });
  });
};
