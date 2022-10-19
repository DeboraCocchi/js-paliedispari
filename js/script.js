/***Palidroma**
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma


**Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/


/* da chiedere:
1-perchè non corrisponde l'output; 2- perchè non ha preso il pattern dell'input*/

const userInput = document.getElementById('user-word');
const oputputField = document.querySelector('.verifica-parola');
const wordBtn = document.getElementById('sub-word');

wordBtn.addEventListener('click', function(){
  checkWord(userInput.value);
  oputputField.innerHTML += verificaPalindroma;
});

const verificaPalindroma = checkWord('userInput.value');


function checkWord(parola){

  for (let i=0; i<parola.length; i++){
      if(parola[i] === parola[parola.length-1-i]){
        console.log('la parola è palindroma!');
        return 'è palindroma';
      }return 'NON è palindroma, prova con un\'altra parola';
      
  }
};

// pari e dispari

const computerRisult = computerNumber();
console.log(computerRisult);

function computerNumber(){
  const pcResult = Math.ceil(Math.random()*(5));
  return pcResult;

}

const userNumber = document.getElementById('user-number');
const userEvenOdd = document.getElementById('user-evenodd');
const userChoice = document.getElementById('sub-choice');
const sumOutput = document.querySelector('.verifica-somma');


userChoice.addEventListener('click', function(){
  console.log(userNumber.value, userEvenOdd.value);
  if(userNumber.value<1 ||userNumber.value>5 || isNaN(userNumber.value) || userEvenOdd.value !=='pari' ||userEvenOdd.value !=='dispari'){
    sumOutput.innerHTML = 'Inserisci tutti i dati come richiesto';
  }sumOutput.innerHTML = 'bravo';
  
});



