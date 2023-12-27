module.exports = {
  kod: "oylama",
  async run (client, message, args) {
    const Discord = require('discord.js');
    var args = message.content.split(' ').slice(2)
    		const botmesajı = args.join(" ")
    		if (!botmesajı) return message.reply('Oylamanın ne olacağını belirtmediniz.');
    		message.delete(message.author)
    		const embed = new Discord.MessageEmbed()
    		.setTitle('Oylama')
    		.setDescription(botmesajı)
    		.setFooter('Panda Blue');
    		message.channel.send({embed: embed}).then(embedMessage => {
    			embedMessage.react("✔️")
    			embedMessage.react("❌");
  })
}
};
