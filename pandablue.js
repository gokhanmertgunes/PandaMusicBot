const Discord = require('discord.js') // discord.js modülü tanımlıyoruz.
const client = new Discord.Client() // client tanımalamsı
const { readdirSync } = require('fs'); // tanımlamalar
const { join } = require('path'); // tanımlamalar
const isaret = require("./isaret.json");
const hedefimiz = require ("./hedef.json")
const { Client, MessageEmbed } = require('discord.js');

var hedef = hedefimiz.hedef

client.commands= new Discord.Collection(); // komutları alıyoruz

const prefix = "asd "

const commandFiles = readdirSync(join(__dirname, "komutlar")).filter(file => file.endsWith(".js")); // Belli bir klasörden belli .js uzantılı dosyaları buluyor.

for (const file of commandFiles) {
    const command = require(join(__dirname, "komutlar", `${file}`));
    client.commands.set(command.kod, command); // Komutları Ayarlıyoruz.
}

client.on("error", console.error);

client.on('ready', () => {
    console.log(`Sunucuya girdi botunuz: ${client.user.tag}!` );
    client.user.setActivity('Genel/pnd yardım')
    .then(presence => console.log(`Durum : ${presence.activities[0].name} oldu`))
    .catch(console.error);
});

client.on("message", async message => {

    if(message.author.bot) return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return message.channel.send(`Böyle bir komuda sahip değilim, **pnd komutlar** yazarak komut listeme ulaşabilirsin.`);


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})

client.on('guildMemberAdd', member => {
	const giriscikis = member.guild.channels.cache.find(channel => channel.name === 'panda-blue-test-kanalı');
	giriscikis.send(`Aramıza hoşgeldin!, ${member} , seninle birlikte **${member.guild.memberCount}** kişi olduk.`);
	member.send(`${member}, sunucumuza hoşgeldin :)`)
});

client.on('guildMemberRemove', member => {
	const giriscikis = member.guild.channels.cache.find(channel => channel.name === 'panda-blue-test-kanalı');
	giriscikis.send(`${member} sunucumuzdan ayrıldı.`);
});

client.on("guildMemberAdd", member => {
	try {
	let role = member.guild.roles.cache.find(role => role.name === 'Yavru Pandalar')
	member.roles.add(role);
}
catch(e) {
	console.log(e)
}
});

client.on('guildCreate' , async guild => {
  const embed1 = new Discord.MessageEmbed()
  .setTitle('Sunucunuza Eklediğiniz İçin Teşekkürler!!')
  .setDescription('Sunucu Adı: `' + guild.name + '`')
  const embed2 = new Discord.MessageEmbed()
    .setTitle('Yeni Sunucu')
    .setDescription('Sunucu adı: ' + guild.name)
    .addField('Kişi Sayısı: ', guild.memberCount)
    .addField('Sunucu Sahibi :', guild.owner)
    .setColor('GREEN')
    .setThumbnail(guild.iconURL)
    guild.owner.send(embed1)
    const channel = client.channels.cache.find(ch => ch.id === '855379745457438720')
    channel.send(embed2)
 })

 client.on('guildDelete' , async guild => {
   const embed1 = new Discord.MessageEmbed()
   .setTitle('Sunucunuzdan Çıkarıldığım için Üzgünüm :(')
   .setDescription('Sunucu Adı: `' + guild.name + '`')
   const embed2 = new Discord.MessageEmbed()
     .setTitle('Bir Sunucudan Ayrıldım')
     .setDescription('Sunucu adı: ' + guild.name)
     .addField('Kişi Sayısı: ', guild.memberCount)
     .addField('Sunucu Sahibi :', guild.owner)
     .setColor('RED')
     .setThumbnail(guild.iconURL)
     guild.owner.send(embed1)
     const channel = client.channels.cache.find(ch => ch.id === '855379745457438720')
     channel.send(embed2)
  })


client.login('ODU1MTcwNzc1MzU3ODQ5NjAw.YMul2Q.FodoNp8vG8zZ8BxAjX5s6A1oCVA')
