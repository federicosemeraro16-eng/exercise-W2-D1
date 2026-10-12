/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca nei motori di ricerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Saluto personalizzato
   Crea due const "nome" e "cognome".
   Stampa con un template literal: "Ciao, mi chiamo Mario Rossi."
*/

/* SCRIVI QUI LA TUA RISPOSTA */


const NAME = 'Federico';
const SURNAME = 'Semeraro';

console.log(`Ciao,mi chiamo ${NAME} ${SURNAME}`);

/* ESERCIZIO 2 — Calcolatrice base
   Due numeri "a" e "b".
   Stampa le 6 operazioni nel formato "10 + 3 = 13":
   somma, differenza, prodotto, divisione, resto (%), elevamento (**).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 10;
let b = 3;

const SUM = a + b;
const DIFFERENCE = a - b;
const PRODUCT = a * b;
const DIVISION = a / b;
const MODULE = a % b;
const ELEVATION = a ** b;

console.log(`${a} + ${b} = ${SUM}`);
console.log(`${a} - ${b} = ${DIFFERENCE}`);
console.log(`${a} * ${b} = ${PRODUCT}`);
console.log(`${a} / ${b} = ${DIVISION}`);
console.log(`${a} % ${b} = ${MODULE}`);
console.log(`${a} ** ${b} = ${ELEVATION}`);


/* ESERCIZIO 3 — Età nel tempo
   const annoNascita (scegli un anno).
   const annoCorrente = 2026.
   Stampa: età oggi, età tra 10 anni, età 5 anni fa.
   Formato: "Tra 10 anni avrai 35 anni."
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const BIRTH_YEAR = 1992;
const CURRENT_YEAR = 2026;
let currentAge = CURRENT_YEAR - BIRTH_YEAR;
let increment = 10;
let decrement = 5;
let ageIncremented = currentAge + increment;
let ageDecremented = currentAge - decrement;

console.log(`Hai ${currentAge} anni`);
console.log(`Tra ${increment} anni avrai ${ageIncremented} anni`);
console.log(`${decrement} anni fa avevi ${ageDecremented} anni`);

/* ESERCIZIO 4 — Maggiorenne?
   Variabile "eta".
   Calcola "maggiorenne" come "eta >= 18".
   Stampa: "Età: 25 — Maggiorenne: true"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let age = 34;
const ADULT_AGE = 18;
const ADULT_AGE_CHECK = age >= ADULT_AGE;
age = 34;
console.log(`Età: ${age}- ${ADULT_AGE}:${ADULT_AGE_CHECK}`);

/* ESERCIZIO 5 — Tipo del valore
   Cinque variabili: una string, una number, una boolean, una null, una undefined.
   Stampa per ognuna: "nome è di tipo: string" usando typeof.
   In commento sopra la variabile null: spiega cosa ritorna typeof null e perché.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let stringCheck = '5';
let numCheck = 10;
let boolCheck = false;
let nullCheck = null;
let undCheck;

console.log(`${stringCheck} è di tipo ${typeof stringCheck}`);
console.log(`${numCheck} è di tipo ${typeof numCheck}`);
console.log(`${boolCheck} è di tipo ${typeof boolCheck}`);
console.log(`${nullCheck} è di tipo ${typeof nullCheck}`);
// null restituisce object perché di fatto è un oggetto che potrà diventare qualsiasi cosa 
console.log(`${undCheck} è di tipo ${typeof undCheck}`);

/* ESERCIZIO 6 — === vs ==
   numero = 5
   stringa = "5"
   Stampa il risultato di "numero == stringa" e "numero === stringa".
   In commento, una riga: spiega la differenza.
*/

let num = 5;
let string = '5';
const equality = num == string;
const strictEquality = num === string;
console.log(equality); 
// risultato = true; 
// in questo caso  num e string sono uguali nel valore per questo ritorna true dato che possono essere o uguali di tipo o valore;
console.log(strictEquality);
//risultato = false;
// in questo caso num e string sono uguali nel valore ma non nel tipo quindi non sono strettamente uguali dato che in questo caso dovrebbero essere uguali sia nel tipo che nel valore

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7 — Conversioni implicite
   Senza eseguire il codice, prevedi in commento il risultato di queste 4 espressioni.
   Poi stampale per verificare.
   - "5" + 3 -> 53
   - "5" - 3 -> 5
   - true + 1 -> 2
   - "10" * "2" -> 50
   dato che almeno un operando è un numero viene convertito in numero 
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num2 = 3;
let string2 = '5';
let bool = true;
let string3 = '10';

let firstCheck = string2 + num2;
console.log(firstCheck);
let secondCheck = string2 - num2;
console.log(secondCheck);
let thirdCheck = bool + num2;
console.log(thirdCheck) ;
let fourthCheck = string3 * string2;
console.log(fourthCheck);


/* ESERCIZIO 8 — Classificazione numero
   Variabile "n".
   Usando % e operatori logici, stampa tre righe:
   "n è pari: true/false"
   "n è divisibile per 3: true/false"
   "n è pari E divisibile per 3: true/false"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n = 10;

let pariCheck = n%2 === 0;
let divThreecheck = n%3 === 0;
let divParCheck = n % 2 && n % 3 === 0;

console.log(pariCheck);
console.log(divThreecheck);
console.log(divParCheck);  // ritorna 0 chiedere al professore // 


// SBAGLIATO 


/* --EXTRA-- ESERCIZIO 9 — Triangolo
   Tre const "a", "b", "c" (lunghezze dei lati).
   Calcola perimetro.
   Determina il tipo: "equilatero", "isoscele", "scaleno".
   Stampa: "Triangolo isoscele, perimetro 15"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let latoA = 10;
let latoB = 20;
let latoC = 30;
let triangleType;

const PERIMETER = latoA + latoB + latoC;

if (latoA === latoB && latoA === latoC && latoB === latoC){
   triangleType ==='equilatero';
   

}else if (latoA === latoB && latoA === latoC && latoB === latoC ){
   triangleType ==='scaleno';
   
} else{
   triangleType === 'isoscele';
   
}

console.log(`Triangolo ${triangleType}, perimetro :${PERIMETER}`);


