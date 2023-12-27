module.exports = {
  kod: "duyuru",
  async run (client, message, args) {
    const Discord = require('discord.js');
        var args = message.content.split(' ').slice(3)
    		const kanal = message.mentions.channels.first();
    		const botmesajı = args.join(" ")
    		if (!botmesajı) return message.reply('Duyurunun ne olacağını yazmadınız.');
    		if (!kanal) return message.reply ('Duyurunun hangi kanalda yapılacağını tanımlamadınız.');
    		message.delete(message.author)
    		kanal.send(botmesajı);
  }
};
