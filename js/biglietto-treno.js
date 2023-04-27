// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65. L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

// VARIABILI GLOBALI 
let costoKm = 0.21 ;
let scontoUnder18 = 20;
let scontoOver65 = 40;

// chiedere all’utente il numero di chilometri che vuole percorrere
let kmPercorso = parseInt(prompt("Quanti kilometri intende percorere?"))
console.log(kmPercorso);

// chiedere all’utente l’età del passeggero
let ageUser = parseInt(prompt("Quanti anni ha il passeggero ?"))
console.log(ageUser);

// calcolare il prezzo totale del viaggio
let costoViaggio = costoKm * kmPercorso;
console.log(costoViaggio);

// applicare uno sconto al biglietto del 40% per gli over 65 e del 20% per i minorenni
let scontoViaggio; 

if (ageUser > parseInt(65)) { // applicare uno sconto del 40% per gli over 65
    scontoViaggio = costoViaggio - (costoViaggio * scontoOver65/ 100);
} else if (ageUser < parseInt(18)) { // applicare uno sconto del 20% per i minorenni
    scontoViaggio = costoViaggio - (costoViaggio * scontoUnder18/ 100);
} else {
    scontoViaggio = costoViaggio 
}
console.log(scontoViaggio);

let costoTotale = scontoViaggio.toFixed(2);

// L’output del prezzo finale 
document.getElementById("prezzo-biglietto").innerHTML = "Costo biglietto € "+costoTotale 