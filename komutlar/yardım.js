/*


###############################################################
#                                                             #
#                                                             #
#            Kodlayan : Mustafa Eren                          #
#                                                             #
#                                                             #
#            Kodlayan : Mustafa Eren                          #
#                                                             #
#                                                             #
#            Kodlayan : Mustafa Eren                          #
#                                                             #
#                                                             #
###############################################################

*/

const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let pages = [
              '**Genel Komutlar**\n\n\n' + '``-ailemiz`` Botun Bulunduğu Sunucuları Listeler \n ``-avatar`` Avatarına Bakarsın \n ``-bilgi`` Bot ile alakalı bilgiler. \n ``-coolresim`` coolresim gösterir \n ``-davet`` Botun Davet Linkini Gösterir \n ``-emojiyazı`` Emojili Yazı Yazar \n ``-havadurumu`` Havadurumunu Gösterir \n ``-hesapla`` Matematik İşlemi Yapar \n ``-istatistik`` Bot İstatistiklerini gösterir\n ``-koş`` koşarsın \n ``-kullanıcıbilgim`` bilgilerin \n ``-mesajküçült`` mesajını küçültür \n ``-ping`` Botun ping ini gösterir. \n ``-rastgelerenk`` rastgele renk söyler \n ``-saat`` Türkiye saat ini gösterir \n ``-servericon`` Sunucu Resimi \n ``-stresçarkı`` stresçarkı çevirirsin \n ``-sunucubilgi`` sunucu bilgileri \n ``-tavsiye`` bot yapımcısına tavsiye gönderir. \n ``-tr`` resimine tr koyar \n ``-troll`` troll resimi atar \n ``-yazıtura`` Yazı Tura atar\n ``-çayiç`` Çay İçersin \n ``-woodie`` Woodie the Lumberjack hakkında bilgi verir \n',
			  '**Yeni Komutlar**\n\n\n' + '``-düello`` Etiketlediğiniz kişiyi,arkadaşınızıla düello yaparsınız. \n ``-youtube`` Youtube da arama motoru yerine geçer. \n ``-yapımcı`` Botun yapımcısını gösterir \n ``-fakemesaj`` Etiketlediğiniz kişinin adına mesaj yazarsınız Bir nevi şaka :D \n ``-bayrak`` Türk bayrağı dalgalanır <3\n ``-olay`` Olay a **Rıza Baba** Gelir!\n ``-sunucukurucu`` Sunucuzu kurar. Örnek: sohbet metin kanalı gibi kanallar açar.\n ``-tkm`` Taş kağıt makas oynarsınız.\n ``-tersrenk`` Profil fotoğrafınızın renklerini ters renk e boyar.\n ``-simitye`` Simit Yersiniz.\n ``-kartopu`` Arkadaşınıza kartopu atarsınız. \n',
              '**Müzik**\n\n\n' + '``-çal`` şarkı çalma \n``-geç`` şarkıyı geçme \n``-kuyruk`` oynatma listesine bakma \n``-durdur`` şarkıyı durdurma \n``-gir`` odaya girme \n``-çalan`` şuanda çalan şarkı \n``-duraklat`` duraklatır \n``-devam`` Şarkıyı devam eder \n',
			  '**Çerçeve Komutları**\n\n\n' + '``-bravery`` Profil fotoğrafınıza HypeSquad bravery çerçevesi ekler. \n ``-balance`` Profil fotoğrafınıza HypeSquad Balance çerçevesi ekler. \n ``-brilliance`` Profil fotoğrafınıza HypeSquad Brilliance çerçevesi ekler. \n ``-atatürkçerçeve`` Profil fotoğrafınıza atatürk çerçevesi ekler. \n ``-nitro`` Profil fotoğrafınıza nitro çerçevesi ekler. \n ``-partner`` Profil fotoğrafınıza partner çerçevesi ekler. \n ``-wasted`` Profil fotoğrafınıza wasted efekt i katar. \n ``-winner`` Profil fotoğrafınıza winner efekt i katar. \n ``-event`` Discord HypeSquad **Orjinal** çerçevesi ekler. \n',
			  '**Moderasyon Komutları**\n\n\n' + '``-uyar`` İstediğiniz kişiyi uyarır. (Üyeleri atma yetkisine sahip olanlar) \n ``-unban`` banını açar (Kullanıcıları atma yetkisine sahip olanlar kullanabilir) \n ``-sustur`` kişiye mute atar (Kullanıcıları atma yetkisine sahip olanlar kullanabilir) \n ``-kilit`` kanalı kilitler (Kullanıcıları atma yetkisi olanlar kullanabilir)\n ``-kick`` kullanıcıyı atar (Kullanıcıları atma yetkisi olan kişiler kullanabilir)\n ``-ban`` kullanıcıyı banlar (Kullanıcıları yasaklama yetkisi olan kişiler kullanabilir) \n ``-temizle`` mesajları temizler (Kullanıcıları atma yetkisi olan kişiler kullanabilir) \n ``-kilitaç`` kilitlediğin kanalın kilidini kaldırır. (Kullanıcıları yasaklama yetkisi olan kişiler kullanabilir) \n',
			  '**Sunucu bakımı**\n\n\n' + '``-sunucubilgi`` Sunucu ile ilgili bilgileri gösterir. \n``-yazıkanalıaç`` Bot sunucuya <ismi> ile belirttiğin yazı kanalını açar. (Kullanıcıları yasaklama yetkisine sahip olanlar kullanabilir) \n``-kilit`` Bot belirttiğin yazı kanalını belirttiğin süre ile kilitler. (Kullanıcıları atma yetkisi olanlar kullanabilir) \n``-temizle`` Yazı kanalını belirttiğin rakam ile temizler! (Max 99 rakam.) (Kullanıcıları atma yetkisi olan kişiler kullanabilir) \n``-reklamtaraması`` Sunucuda kişilerde reklam var mı diye tarar. (Kullanıcıları atma yetkisi olan kişiler kullanabilir) \n ``-kilitaç`` kilitlediğin kanalın kilidini kaldırır. (Kullanıcıları yasaklama yetkisi olan kişiler kullanabilir) \n',
              ];
  let page = 1;

  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail('https://cdn.discordapom/attachments/487719679868272689/488329963926192158/image0.png')
    .setFooter(`Sayfa ${page} / ${pages.length}`)
    .setDescription(pages[page-1])
	message.channel.send(':postbox: Özel mesajlarını kontrol et.')
  message.author.send(embed).then(msg => {

  msg.react('⬅')
  .then(r => {
    msg.react('➡')

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('RANDOM')
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('RANDOM')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })

    })
  })
};


exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["help", "y", "h"],
permLevel: 0
};

exports.help = {
name: 'yardım',
description: 'Yardım Listesini Gösterir',
usage: 'yardım'
};


/*


###############################################################
#                                                             #
#                                                             #
#            Kodlayan : Mustafa Eren                          #
#                                                             #
#                                                             #
#            Kodlayan : Mustafa Eren                          #
#                                                             #
#                                                             #
#            Kodlayan : Mustafa Eren                          #
#                                                             #
#                                                             #
###############################################################


*/
