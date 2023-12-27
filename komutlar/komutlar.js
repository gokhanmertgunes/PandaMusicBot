module.exports = {
  kod: "komutlar",
  async run (client, message, args) {
    const Discord = require('discord.js');
    const kanal = new Discord.MessageEmbed()

		.setTitle('Komutlarım burada:')
    .addField('pnd botinfo' , 'Botun Yaratıcısı ve Orjinal sunucusu hakkında bilgi verir.')
    .addField('pnd futbol' , '4 büyük türkiye takımı arasından rastgele galip seçmenizi sağlar.')
      .addField('pnd help' , 'Botun amacı ve oluşturma tarihi hakkında bilgi verir.')
        .addField('pnd oylama konu' , 'Evet/Hayır oylaması yapmanızı sağlar.')
          .addField('pnd özelmesaj @kişi mesaj' , 'Bir kişiye bot üzerinden mesaj atmanızı sağlar.')
            .addField('pnd avatar kişi' , 'Etiketlediğiniz kişinin avatarını gösterir.')
            .addField('pnd creatorinfo' , 'Botun yaratıcısı hakkında detaylı bilgi verir.')
            .addField('pnd duyuru #kanal duyuru' , 'Etiketlediğiniz kanaldan bir duyuru geçer.')
            .addField('pnd ping' , 'Botun ping değerini gösterir.')
		message.channel.send(kanal);
  }
};
