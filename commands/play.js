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
let info2 = await ytdl.getInfo(musica)
   let voiceChannel = message.member.voiceChannel
   if(message.guild.members.get(client.user.id).voiceChannel) { 
       continue
   } else {
   voiceChannel.join()
 

  .then(connection => {
    const stream = ytdl(musica, { filter : 'audioonly' });
    const info = videos[ 0 ]
    const dispatcher = connection.playStream(stream)
let embed = new Discord.RichEmbed()
.setAuthor(info2.author.name, info2.author.avatar)
.setThumbnail(info2.thumbnail_url)
.setDescription(`💽 **|** Escutando agora: [${info.title}](https://www.youtube.com${info.url})`)
.setFooter(`🎧 | Tocando em: ${message.member.voiceChannel.name}`)
message.channel.send(embed)
  })
}})}
