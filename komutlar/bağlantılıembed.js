module.exports = {
  kod: "creatorinfo",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
    const embed = new MessageEmbed()
    .setTitle('Yaratıcı Erişim Bilgileri')
    .addField('Bağlantılar' , '[Youtube](https://www.youtube.com/channel/UCMzPt0JAScICi9OV_SK_rSA)\n[Instagram](https://www.instagram.com/gokmert_han/)\n[Twitch](https://www.twitch.tv/skraatzgmg)\n[Discord](https://discord.gg/xYHqCH2)')
    message.channel.send(embed)
  }
}
