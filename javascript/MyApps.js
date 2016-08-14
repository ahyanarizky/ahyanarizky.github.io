// Aplikasi model CERITA INTERAKTIF //
// Sedang dikembangkan beta version nya yang akan ada variabel poin dan property lain //
alert("'To Be Nurse'")
alert("Suatu hari, kamu tiba-tiba ditunjuk sebagai perawat di suatu rumah sakit karena rumah sakit tersebut sedang kekurangan personil perawat.");
alert("Karena kamu adalah seorang programmer penggangguran yang belum dapat proyek, maka kamu menerima tawaran tersebut. 'Lumayan buat nambah-nambah malem mingguan' pikirmu dalam hati.");
alert("Sesampainya di rumah sakit, kamu ternyata ditempatkan di bagian Unit Gawat Darurat bagian triase, yaitu bagian yang memutuskan kondisi kedaruratan pasien.");
alert("Jadi, tugas kamu sekarang adalah memilih di tingkatan mana kamu akan menempatkan pasien, apakah pada tingkatan MERAH, KUNING atau HIJAU.");
alert("MERAH berarti ruangan untuk kritis, KUNING untuk semi-kritis dan HIJAU untuk non-kritis.");
alert("Kamu akan ditempatkan di bagian tersebut dengan seorang perawat senior bernama MARWOTO, yang tidak mengetahui bahwa basic kamu adalah seorang programmer, bukan suster.");
alert("Pagi hari saat kamu bertugas, datang seorang pasien bernama pak SUKIRNO berjalan kaki , setelah diperiksa oleh MARWOTO, ia memberikan laporan sebagai berikut :");
alert("Pak SUKIRNO mengeluh nyeri ulu hati seperti terbakar, menjalar ke punggung, muncul +/- 2 jam sebelum masuk rumah sakit, ada riwayat hipertensi dan gula darah, rasa sakit muncul pada saat beraktifitas dan berkurang pada saat beristirahat, hasil pemeriksaan EKG menggambarkan adanya infarctmiocard")
var case1 = prompt("Saatnya memutuskan, ke bagian manakah kamu akan mengirim pak SUKIRNO ? jawab 'MERAH', 'KUNING' atau 'HIJAU'").toUpperCase(); //MERAH
switch (case1)  {
  case 'MERAH':
  alert("pak SUKIRNO mendapatkan perawatan kritis, ternyata penyakitnya adalah penyakit JANTUNG KORONER yang dapat menyebabkan kematian jika terlambat ditolong. Selamat kamu telah menyelamatkan nyawa pak SUKIRNO !");
  break;
  case 'KUNING' :
  alert("pak SUKIRNO masuk ke ruang perawatan semi-kritis, setelah menunggu untuk bertemu dokter ternyata kondisinya memburuk, setelah itu ia dilarikan ke unit MERAH dan mendapatkan penanganan, kamu dimarahi habis-habisan oleh kepala ruangan !");
  break;
  case 'HIJAU' :
  alert("pak SUKIRNO masuk ruang hijau, mengantri dokter bersama para pasien diare dan pusing, saat kondisi memburuk dan mau dilarikan ke darurat para pasien sakit perut protes karena pak SUKIRNO datang belakangan tapi dapat perawatan duluan. Kondisi makin memburuk dan akhirnya pak SUKIRNO MENINGGAL DUNIA. Semua orang bertanya-tanya siapa yang memasukkan pasien jantung koroner ke ruang hijau.");
  break;
  default :
  alert("Perkataanmu tidak jelas, pak SUKIRNO keburu MENINGGAL tepat di depanmu dan kamu dimaki-maki oleh keluarga pasien.");
  break;
}
alert("Kemudian muncul lagi pasien bernama JUMINTEN, berikut ini laporan MARWOTO :");
var case2 = prompt("pasien datang, post-KLL, 2 jam sebelum masuk rumah sakit, terlihat fraktur tertutup pada femur, hemodinamis pasien masih stabil, namun nadi pasien 138 x/menit. kemana kamu akan mengirim JUMINTEN ?").toUpperCase(); //KUNING
switch (case2)  {
  case 'MERAH':
  alert("JUMINTEN masuk ke ruang perawatan kritis, ternyata penyakitnya tidak separah itu! Dokter yang menangani ruangan merah memarahi kamu, ");
  break;
  case 'KUNING' :
  alert("JUMINTEN mendapatkan perawatan semi-kritis, ternyata penyakitnya adalah shock hipopolemik e.c close fraktur femur. Tulang paha yang patah menyebabkan arteri pada paha putus, sehingga terjadi kelebihan pendarahan dalam dan mengganggu sirkulasi darah tubuh secara global. Penyakit ini berpotensi mematikan, namun JUMINTEN terselamatkan berkat tugasmu !");
  break;
  case 'HIJAU' :
  alert("JUMINTEN masuk ruang hijau, mengantri dokter bersama para pasien diare dan pusing, saat kondisi memburuk dan mau dilarikan ke darurat para pasien sakit kepala protes karena JUMINTEN datang belakangan tapi dapat perawatan duluan. Kondisi makin memburuk dan akhirnya JUMINTEN MENINGGAL DUNIA.");
  break;
  default :
  alert("Perkataanmu tidak jelas, JUMINTEN keburu MENINGGAL tepat di depanmu dan kamu dimaki-maki oleh keluarga pasien.");
  break;
}
var case3 = prompt("pasien KELING datang dengan fraktur terbuka tibia fibula, hemodinamis pasien stabil, pendarahan tidak aktif, pasien teriak-teriak kesakitan, skala nyeri 5/10, kemana kamu akan mengirim KELING ?").toUpperCase(); //KUNING
switch (case3)  {
  case 'MERAH':
  alert("KELING masuk ke ruang perawatan kritis, dokter ruangan merah yang stress MEMBENTAK kamu dihadapan umum sambil menyuruhmu mengantar pasien ke ruangan lain yg lebih sesuai ");
  break;
  case 'KUNING' :
  alert("KELING masuk ke ruang perawatan semi-kritis, tapi penyakit ini tidak mengancam jiwa selama sudah mendapatkan perawatan pertama, dokter ruangan kuning memarahi kamu, dia bilang : 'kamu dari akademi mana sih? masa nanganin kasus begini aja salah?' tapi dia tidak tau sebenarnya kamu adalah seorang programmer.");
  break;
  case 'HIJAU' :
  alert("KELING masuk ruang hijau, sakitnya adalah patah tulang betis sampai terjadi luka, namun tidak menyebabkan nadi putus, selanjutnya KELING mendapat penjadwalan untuk tindakan operasi, meskipun dia teriak-teriak kesakitan namun hal yang kamu lakukan tepat menurut prioritas penempatan pasien di rumah sakit.");
  break;
  default :
  alert("Perkataanmu tidak jelas, MARWOTO kesal dan menangani pasien KELING sendirian.");
  break;
}//HIJAU
var case4 = prompt("pasien YONO datang dengan keluhan nyeri pada tulang rusuk, sakit pada saat bernafas, mengalami KLL 3 jam sebelum masuk rumah sakit, saturasi oksigen pasien 94%, nadi dan tensi normal, ada jejas pada dada, kemana kamu akan mengirim YONO ?").toUpperCase(); //KUNING
switch (case4)  {
  case 'MERAH':
  alert("YONO masuk ke ruang perawatan kritis, dokter ruangan merah yang stress MEMBENTAK kamu dihadapan umum sambil menyuruhmu mengantar pasien ke ruangan lain yg lebih sesuai ");
  break;
  case 'KUNING' :
  alert("YONO mendapatkan perawatan semi-kritis, penyakitnya adalah pnemeuthorax, tulang rusuknya patah dan menusuk paru-paru, menyebabkan trauma pada paru-paru dan mengganggu pernapasan. Penyakit ini berpotensi mematikan jika tidak ditangani dengan tepat, pasien YONO terselamatkan olehmu ! ");
  break;
  case 'HIJAU' :
  alert("YONO masuk ruang hijau, mengantri dokter bersama para pasien diare, saat kondisi memburuk dan mau dilarikan ke ruang darurat para pasien sakit kepala protes karena YONO datang belakangan tapi dapat perawatan duluan. Kondisi makin memburuk karena TERLAMBAT PENANGANAN dan akhirnya YONO MENINGGAL DUNIA.");
  break;
  default :
  alert("Perkataanmu tidak jelas, MARWOTO kesal dan menangani pasien YONO sendirian.");
  break;
}
var case5 = prompt("pasien NANAY datang dengan keluhan nyeri pada abdomen, skala nyeri 4/10, pasien mengeluh belum pup dan kentut selama 2 hari, ada mual dan muntah, terjadi defensive muscle saat pemeriksaan pada bagian perut, kemana kamu akan mengirim NANAY ?").toUpperCase(); //KUNING
switch (case5)  {
  case 'MERAH':
  alert("NANAY masuk ke ruang perawatan kritis, dokter ruangan merah yang stress terlihat sangat kesal dan memeriksa dahimu sambil berkata: 'apakah kamu sehat?' sambil menyuruhmu mengantar pasien ke ruangan lain yg lebih sesuai ");
  break;
  case 'KUNING' :
  alert("NANAY mendapatkan perawatan semi-kritis, penyakitnya adalah ileus obstructive, ileus = usus; obstructive = pecah, yang berarti ada gangguan pencernaan pada bagian usus diakibatkan rusaknya jaringan usus. Penyakit ini mengancam jiwa jika tidak ditangani dengan serius, pasien NANAY berterima kasih padamu! ");
  break;
  case 'HIJAU' :
  alert("NANAY masuk ruang hijau, mengantri dokter bersama para pasien panu, ternyata kondisi memburuk !!! Saat mau dilarikan ke ruang darurat para pasien sakit kulit protes karena NANAY datang belakangan tapi dapat perawatan duluan. Kondisi makin memburuk karena pecah ususnya makin parah dan akhirnya NANAY MENINGGAL DUNIA.");
  break;
  default :
  alert("Perkataanmu tidak jelas, MARWOTO kesal dan menangani pasien NANAY sendirian.");
  break;
}
alert("Akhirnya shift tugasmu berakhir ! Hari yang melelahkan ! Saatnya mengambil honormu dan kembali ke kehidupan programmer ! ");
alert("Nantikan seri selanjutnya yang lebih seru pada 'To Be Nurse 2'");

/*pasien merupakan bayi berusia 5 bulan, datang dalam keadaan kejang, panas 40,5 derajat, sebelumnya tidak ada riwayat kejang
kemana kamu akan mengirim ACAY ? //MERAH
pasien datang dengan kesadaran apatis, ada pendarahan aktif lewat telinga, terdapat jejas pada lingkaran mata
kemana kamu akan mengirim BHUJANG ? //MERAH
pasien datang kondisi demam hari ke 3, suhu 39,9, pasien mengeluhkan nyeri perut
kemana kamu akan mengirim SUNTO ?// HIJAU
pasien berumur 50 thn datang dengan keluhan mual, muntah, dan BAB hitam selama 5 hari, tensi 100/60, nadi 112 x/menit, pernapasan 20 x/menit
kemana kamu akan mengirim BALEO ? //KUNING
pasien berumur 25 thn datang dengan keluhan sakit kepala, tensi 150/90, disertai mual dan muntah
kemana kamu akan mengirim WAMBE ? //HIJAU */
