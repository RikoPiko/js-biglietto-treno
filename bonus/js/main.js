const prezzoKm = 0.21;

var kilometri, eta;
do {
    kilometri = prompt("Quanti kilometri vuoi percorrere?");
}
while (isNaN(kilometri) == true || kilometri == "");

do {
    eta = prompt("Quanti anni hai?");
}
while (isNaN(eta) == true || eta == "");

var prezzoTotale = kilometri * prezzoKm;
var scontoMinorenni = kilometri * prezzoKm * 20 / 100;
var scontoMaggiorenni = kilometri * prezzoKm * 40 / 100;

if (eta < 18) {
    document.getElementById("prezzo").innerHTML = "Il prezzo del biglietto è " + (prezzoTotale - scontoMinorenni).toFixed(2) + " € .";
}
else if (eta > 65) {
    document.getElementById("prezzo").innerHTML = "Il prezzo del biglietto è " + (prezzoTotale - scontoMaggiorenni).toFixed(2) + " € .";
}
else {
    document.getElementById("prezzo").innerHTML = "Il prezzo del biglietto è di " + prezzoTotale.toFixed(2) + " € .";
}