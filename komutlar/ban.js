 module.exports == { // KOMUDUN ÇALIŞMASI İÇİN MODULE EXPORTSTAN SONRAKİ = LERDEN BİRİNİ SİLMEN LAZIM.
  kod: "ban",
  async run (client, message, args) {
    const args1 = message.content.split(" ").slice(2)
    const neden = args1.join(" ")
    const { MessageEmbed } = require("discord.js")
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
        .ban('sebep')
        .then(() => {
          const kanal = message.guild.channels.cache.find(ch => ch.name === 'panda-blue-test-kanalı')
          const embed = new MessageEmbed()
          .setTitle('ÜYE BANLANDI')
          .setDescription('Olay:  ``Ban``')
          .addField('Kişi:', member)
          .addField('Neden:', neden)
          kanal.send(embed)
        })
        .catch(err => {
          message.reply('Malesef banlayamıyorum.')
          console.error(err);

        });
      } else {
        message.reply('Bu kişi sunucuda değil malesef.')
      }
    } else {
      message.reply('Banlamam için birini etiketlemen lazım.')
    }
  }
}
