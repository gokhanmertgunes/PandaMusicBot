    module.exports = {
      kod: "futbol",
      async run (client, message, args) {
        const Discord = require('discord.js');
        var Maç1 = [
        			'Beşiktaş',
        			'Fenerbahçe'
        		];
        		var Maç2 = [
        			'Galatasaray',
        			'Trabzonspor'
        		];
        		var maç1galip = Math.floor(Math.random()* Maç1.length);
        		var maç2galip = Math.floor(Math.random()* Maç2.length);

        		var Maç3 = [
        			`${Maç1[maç1galip]}`,
        			`${Maç2[maç2galip]}`
        		];
        		var maç3galip = Math.floor(Math.random()* Maç3.length);
        		const embed = new Discord.MessageEmbed()
        		.setTitle('Şampiyonlar Ligi')
        		.addField('Yarı Final 1. Maç sonucu', `${Maç1[maç1galip]}`)
            .addField('Yarı Final 2. Maç sonucu', `${Maç2[maç2galip]}`)
        		.addField('Final Maçı sonucu', `${Maç3[maç3galip]}`);
        		message.channel.send(embed);
      }
    };
