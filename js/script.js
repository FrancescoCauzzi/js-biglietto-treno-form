

// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

// - Il numero di chilometri da percorrere
let travelDistanceKm = 600;

// - Età del passeggero
let passengerAge = 45;

// prezzo viaggio al km

let pricePerKm = 0.21;

// calcolo il prezzo finale in base ai paletti

// Sconti

let seniorDiscount = 0.4;
let underageDiscount = 0.2

let finalPrice = travelDistanceKm * pricePerKm;

if (passengerAge < 18){
  finalPrice -= finalPrice*underageDiscount;
}else if(passengerAge >= 65){
  finalPrice -= finalPrice*seniorDiscount;
}

console.log(finalPrice);