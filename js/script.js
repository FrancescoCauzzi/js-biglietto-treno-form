

// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

let nomeCognome = document.getElementById('input-nome-cognome');
// console.log(nomeCognome.value);

// - Il numero di chilometri da percorrere
let kmDaPercorrere = document.getElementById('input-km-da-percorrere');

console.log(kmDaPercorrere.value);


// - Età del passeggero
let selectAge = document.querySelector('.__select-age');
console.log(selectAge.value);

// console.log(selectAge.value);



let generaButton = document.getElementById('genera-btn')

// aggiungere funzionalità al bottone click

generaButton.addEventListener('click', function(){
  // prezzo viaggio al km

  let pricePerKm = 0.21;

  // calcolo il prezzo finale in base ai paletti

  // Sconti

  let seniorDiscount = 0.4;
  let underageDiscount = 0.2;

  let finalPrice = +kmDaPercorrere.value * pricePerKm;
  

  if (selectAge.value === '2'){
    finalPrice -= finalPrice*underageDiscount;
  }else if(selectAge.value === '3'){
    finalPrice -= finalPrice*seniorDiscount;
  }
  document.getElementById('nome-utente').textContent = nomeCognome.value;
  document.getElementById('ticket-price').textContent = `${finalPrice.toFixed(2)} €`;
})