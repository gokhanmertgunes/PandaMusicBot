module.exports = {
  kod: "yardım",
  async run (client, message, args) {
    const Discord = require('discord.js');
    const kanal = new Discord.MessageEmbed()
		.setTitle('Panda Blue')
		.setDescription(`Davet etmek için Tıkla`)
    .setURL('https://discord.com/oauth2/authorize?client_id=855170775357849600&scope=bot&permissions=8589934591')
    .addField('Özellikleri:' , 'Çeşitli eğlence komutları içerir.')
    .addField('Botun Yaratılma Tarihi:' , '17.06.2021')
    .addField('Bot komutlarına erişmek için:' , 'pnd komutlar yazınız.')
    .addField('Müzik botu komutlarına erişmek için:' , 'pnd help yazınız')
		.setColor("RANDOM")
		.setThumbnail('https://cdn.discordapp.com/attachments/855187027499024415/855192943773876274/unknown.png')
		.addField(':zany_face: ' , 'Arkadaşlarınızı Davet etmeyi Unutmayın!')
    .setFooter('Created by Gökhan Mert#5695');
		message.channel.send(kanal);
  }
};
