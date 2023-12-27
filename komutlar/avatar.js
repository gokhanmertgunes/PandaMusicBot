module.exports = {
  kod: 'avatar',
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
    const kisi = message.mentions.users.first()
    const args1 = message.content.split(' ').slice(2)
    const botmesajı = args.join(" ")
    if (kisi) {
      const embed = new MessageEmbed()
      .setTitle(`${kisi.tag} kişisinin avatarı burada:`)
      .setImage(kisi.displayAvatarURL({ dynamic: true , size: 4096}))
      message.channel.send(embed)
    } else {
      const embed = new MessageEmbed()
      .setTitle(`${message.author.tag} kişisinin avatarı burada:`)
      .setImage(message.author.displayAvatarURL({ dynamic: true , size: 4096}))
      message.channel.send(embed)
    }
  }
}
