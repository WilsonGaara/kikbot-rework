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

   let voiceChannel = message.member.voiceChannel
  voiceChannel.join()
   message.reply('🎧 **|** Aguardando tocar: `'+videos[ 0 ].title+'` **'+videos[ 0 ].duration.timestamp+'**')
  .then(connection => {
    const stream = ytdl(musica, { filter : 'audioonly' });
    const dispatcher = connection.playStream(stream)
   
     .on("end", () => {
       message.channel.send('Música acabou!')
       message.member.voiceChannel.leave();
     });
     dispatcher.setVolumeLogarithmic(5 / 5);
   });
 });
};
