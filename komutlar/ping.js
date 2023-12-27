module.exports = {
  kod: "ping",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
    const embed = new MessageEmbed()
    .setTitle('Ping Değeri Hesaplanıyor..')
    .addField('Botun Pingi: ', client.ws.ping + ' ms')
    .addField('Mesaj Gecikme Süresi: ', `${Date.now() - message.createdTimestamp} ms`);
    message.channel.send(embed)
  }
}
