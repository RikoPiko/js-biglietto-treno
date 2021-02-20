const prezzoKm = 0.21;


var kilometri = prompt("Quanti kilometri vuoi percorrere?");
var eta = prompt("Quanti anni hai?");

if (!isNaN(kilometri) && kilometri != "" && kilometri > 0 && !isNaN(eta) && eta != "" && eta > 0){

    let prezzoTotale = kilometri * prezzoKm;
    let scontoMinorenni = kilometri * prezzoKm * 20 / 100;
    let scontoMaggiorenni = kilometri * prezzoKm * 40 / 100;
    if (eta < 18) {
        document.getElementById("prezzo").innerHTML = "Il prezzo del biglietto è " + (prezzoTotale - scontoMinorenni).toFixed(2) + " € .";
    }
    else if (eta > 65) {
        document.getElementById("prezzo").innerHTML = "Il prezzo del biglietto è " + (prezzoTotale - scontoMaggiorenni).toFixed(2) + " € .";
    }
    else {
        document.getElementById("prezzo").innerHTML = "Il prezzo del biglietto è di " + prezzoTotale.toFixed(2) + " € .";
    }
}
else{
    document.getElementById("prezzo").innerHTML = "I valori che inserisci devono essere numeri decimali positivi.<br>Riprova";
}
