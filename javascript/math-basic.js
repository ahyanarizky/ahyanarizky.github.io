//Menghitung operasi pangkat//
var pangkatAngka = function(x,y) {
return Math.pow(x,y);}
pangkatAngka(2,8);

//Menghitung operasi akar//
var akarKuadrat = function (x) {
  return Math.sqrt(x);
}
akarKuadrat(256);

//Menghitung Hipotenusa//
var hipotenusa = function (x,y) {
  var panjangA = Math.pow(x,2);
  var panjangB = Math.pow(y,2);
  return Math.sqrt( panjangA + panjangB );
}
hipotenusa(3,4);

//Menghitung Luas Lingkaran//
var luasLingkaran = function(x) {
  var phi = Math.PI;
  return phi*(Math.pow(x,2));
}
luasLingkaran(15);
