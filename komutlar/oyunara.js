module.exports = {
  kod: "oyunara",
  async run (client, message, args) {
    const game = args[0]
    if (!game) return message.reply('Bir oyun belirtmelisin :) , "pnd oyunara Oyun Not"');
    const nott = message.content.split(" ").slice(3)
    const not  = nott.join(" ")
      if (!not) return message.reply('Bir not belirtmelisin :) , "pnd oyunara Oyun Not"');
    if (message.member.voice.channel) {
      const Discord = require('discord.js')
      const embed = new Discord.MessageEmbed()
      .setTitle(`**${message.author.tag}** şuanda oyun arıyor.`)
      .setColor("RANDOM")
      .addField('Oyun:' , `${game}`)
      .addField('Sesli Kanal:', `${message.member.voice.channel}`)
      .addField('Not:' , `${not}`);
      message.channel.send(embed)
    } else {
      message.reply(`lütfen bir sesli kanala katıl.`)
    }
  }
}
