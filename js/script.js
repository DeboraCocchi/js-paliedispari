/***Palidroma**
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma


**Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/


/* l'utente inserisce una parola: se non è una stringa esce dalla funzione --> typeof String = isString booleano;
ok, la parola è una stringa: verifica che sia palindroma, ovvero che l'indice i = lenght-(i+1)*/

const userInput = document.getElementById('user-word');
const oputputField = document.querySelector('.verifica-parola');
const wordBtn = document.getElementById('sub-word');

wordBtn.addEventListener('click', function(){
  checkWord(userInput.value);
  oputputField.innerHTML += verificaPalindroma;
});

verificaPalindroma = checkWord('userInput.value');


function checkWord(parola){

  for (let i=0; i<parola.length; i++){
      if(parola[i] === parola[parola.length-1-i]){
        console.log('la parola è palindroma!');
        return 'è palindroma';
      } else{
        return 'NON è palindroma, prova con un\'altra parola';
      }
  }
};



