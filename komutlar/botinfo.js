module.exports = {
  kod : "botinfo",
  async run (client, message, args) {
    const Discord = require('discord.js');
    const embed = new Discord.MessageEmbed({
      color: "BLUE",
      title:'Panda Discord Sunucusuna Katıl',
      url:"https://discord.gg/xYHqCH2",
      author: {
        name:"Gökhan",
        icon_url:"https://cdn.discordapp.com/avatars/273414810048135168/c58858eebc209a2de8e7bf467108b0ce.png?size=256",
        url: " ",
      },
      thumbnail: {
        url:"https://cdn.discordapp.com/attachments/274585812115652608/855546926422556732/Baslksz-1.png",
      },
      fields: [
      {
        name:"Sunucu Sahibi",
        value:"Emir#8737",
        url:" ",
      },
    {
      name:"Bot Sahibi",
      value:"Gökhan Mert#5695",
      inline:true
    },

  ],
  image: {
    url:" "
  },
  timestamp: new Date(),
  footer: {
    text:"Node.js",
    icon_url:" "
  }
});
message.channel.send(embed)
  }
}
