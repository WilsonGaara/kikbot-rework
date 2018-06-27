exports.run = async (client, message, args) => {
var video;
var Discord = require('discord.js')
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

  .then(connection => {
    const stream = ytdl(musica, { filter : 'audioonly' });
    const info = videos[ 0 ]
    const dispatcher = connection.playStream(stream)
let embed = new Discord.RichEmbed()
.setDescription(`💽 **|** Escutando agora: [${info.title}](https://www.youtube.com/${info.url})`)
messag.channel.send(embed)
  })
})}
