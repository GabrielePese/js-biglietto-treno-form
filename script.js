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
var cancella = document.getElementById("canc");
var prezzoKm = 0.21;
var prezzoTotale;


creaBiglietto.addEventListener("click", function (){
  var nome = document.getElementById("nome").value;
 console.log (nome)
  var km = document.getElementById("km").value;
  console.log (km)
  var categoria = document.getElementById("categoria").value;
  console.log(categoria)

  if (categoria == "minorenne") {
    prezzoTotale = (km * prezzoKm) * 0.8 }

  else if (categoria == "over65") {
      prezzoTotale = (km * prezzoKm) * 0.6}

    else  {
      prezzoTotale = (km * prezzoKm)
    }

var codiceTreno = Math.floor (Math.random () * 1000);
var carrozza = "AB" + Math.floor (Math.random () * 100);


document.getElementById("prezzo").innerHTML = prezzoTotale;
document.getElementById("passeggero").innerHTML = nome;
document.getElementById("codice").innerHTML = codiceTreno;
document.getElementById("carrozza").innerHTML = carrozza;
document.getElementById("tipologia").innerHTML = categoria;
})

cancella.addEventListener("click", function(){

document.getElementById("prezzo").innerHTML = "";
document.getElementById("passeggero").innerHTML = "";
document.getElementById("codice").innerHTML = "";
document.getElementById("carrozza").innerHTML = "";
document.getElementById("tipologia").innerHTML = "";

document.getElementById("nome").value = "";
document.getElementById("km").value = "";
document.getElementById("categoria").value = "";
})
