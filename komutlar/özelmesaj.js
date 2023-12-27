module.exports = {
  kod: "özelmesaj",
  async run (client, message, args) {
    const Discord = require('discord.js');
  		const kişi = message.mentions.users.first();
    var args = message.content.split(' ').slice(3)
  		const botmesajı = args.join(" ")
  		if (!botmesajı) return message.reply('Özel mesajın ne olacağını yazmadınız.');
  		if (!kişi) return message.reply ('Özel mesajın kime gönderileceğini tanımlamadınız.');
  		message.delete(message.author)
  		kişi.send(botmesajı);
}
};
