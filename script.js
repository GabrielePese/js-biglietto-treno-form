// Il programma dovrà permettere l'inserimento del nome del passeggero, dei chilometri che vuole percorrere e la selezione di una categoria (over65, minorenne, maggiorenne).
// Sulla base di queste informazioni dovrà:
// calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// (Come esercizio precedente)
// Dovrà creare un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato
// Categoria selezionata dall'utente
// Un minimo di animazione alla pagina sarà data dal biglietto che compare al click del bottone "Crea" e scompare al click del bottone "Annulla", se annullato il biglietto ripulire i campi del form.


var creaBiglietto = document.getElementById("btn");
var prezzoTotale;
var prezzoKm = 0.21;

creaBiglietto.addEventListener("click", function (){
  var nome = document.getElementById("nome").value;
 console.log (nome)
  var km = document.getElementById("km").value;
  console.log (km)
  var categoria = document.getElementById("categoria").value;
  console.log(categoria)
})

//   if (categoria == "Minorenne") {
//     prezzoTotale = (km * prezzoKm) * 0.8 }
//   elseif(categoria == "maggiorenne") {
//     prezzoTotale = km * prezzoKm; }
//   else (categoria == "over65") {
//     prezzoTotale = (km * prezzoKm) * 0.6 ;
//   }
//
// console.log(prezzoTotale)