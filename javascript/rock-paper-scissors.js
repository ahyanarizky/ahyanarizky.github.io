var pilihanPengguna = prompt("Silahkan pilih : telunjuk, jempol atau kelingking?");
var pilihanKomputer = Math.random();
if (pilihanKomputer < 0.34) {
  pilihanKomputer = "telunjuk";
} else if (pilihanKomputer <= 0.67) {
  pilihanKomputer = "jempol";
} else {
  pilihanKomputer = "kelingking";
}
console.log("Komputer: " + pilihanKomputer);
var bertarung = function(pilihan1, pilihan2) {
if(pilihan1 === pilihan2) {
    return "Kamu seri !";
}

else if(pilihan1 === "telunjuk") {

    if(pilihan2 === "kelingking") {
        return "telunjuk menang !";
    }
    else {
        return "jempol menang !";
    }

}
else if(pilihan1 === "jempol") {

    if(pilihan2 === "telunjuk") {
        return "jempol menang !";
    }
    else {
        return "kelingking menang !";
    }
}

else if (pilihan1 === "kelingking") {
    if (pilihan2 === "telunjuk") {
        return "telunjuk menang !";
    }
    else {
        return "kelingking menang !";
    }
}
}

bertarung (pilihanPengguna, pilihanKomputer);
