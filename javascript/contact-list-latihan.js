var daftarKontak = [];

function cetakKontak(x) {
    console.log("Nama: "+ x.nama + "; E-mail: " + x.email + "; Telepon: " + x.telepon);
}

function lihatSemua() {
	var jumlahKontak = daftarKontak.length;
	for (var i = 0; i < jumlahKontak; i++) {
		cetakKontak(daftarKontak[i]);
  }
};

function cariKontak(nama) {
    var jumlahKontak = daftarKontak.length;
    for (var i=0; i<jumlahKontak; i++) {
        if (nama === daftarKontak[i].nama) {
            cetakKontak(daftarKontak[i]);
        }
    }
}

function tambahKontak(nama, email, telepon) {
    daftarKontak[daftarKontak.length] = {
        nama: nama,
        email: email,
        telepon: telepon
    }
}


tambahKontak("ariz", "ariz@nana", 021);
tambahKontak("nana", "nana@ariz",031);
tambahKontak("zakiy", "zakiy@syalala", 231);
lihatSemua();
