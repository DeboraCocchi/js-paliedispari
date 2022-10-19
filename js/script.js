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
1- perchè non ha preso il pattern dell'input*/

const userInput = document.getElementById('user-word');
const oputputField = document.querySelector('.verifica-parola');
const wordBtn = document.getElementById('sub-word');

wordBtn.addEventListener('click', function(){
  const verificaPalindroma = checkWord(userInput.value);
  oputputField.innerHTML += verificaPalindroma;
  userInput.value = '';
  oputputField.innerHTML +='';
});




function checkWord(parola){

  for (let i=0; i<parola.length; i++){
      if(parola[i] === parola[parola.length-1-i]){
        console.log('la parola è palindroma!');
        console.log(parola);
        return 'è palindroma';
        
      }else{
        console.log('la parola NON è palindroma!');
        console.log(parola);
        return 'NON è palindroma, prova con un\'altra parola';}
   
  }
  
};
userInput.value='';

// pari e dispari



const userNumber = document.getElementById('user-number');
const userEvenOdd = document.getElementById('user-evenodd');
const userChoice = document.getElementById('sub-choice');
const sumOutput = document.querySelector('.verifica-somma');


userChoice.addEventListener('click', function(){
  console.log(userNumber.value, userEvenOdd.value);

  //verifico che l'utente inserisca i dati come richiesto
  if((userNumber.value>=1 && userNumber.value<=5)&&(userEvenOdd.value==='pari' || userEvenOdd.value==='dispari')){

    //ha compilato correttamente entrambi i campi
    sumOutput.innerHTML = 'I dati sono validi';

    //lancio la funzione del numero rdm del pc, salvando il risultato in una const
    const pcNumber = computerNumber();
    console.log('al pc è uscito il numero ' + pcNumber);

    //recupero il numero inserito dallo user e lancio la funzione pari e dispari
    const ourSum = evenOddNumbersSum(parseInt(userNumber.value),pcNumber);
    console.log('la somma è ' + ourSum);

    if(userEvenOdd.value===ourSum){
      console.log(userEvenOdd.value , ourSum);
      sumOutput.innerHTML = `Hai indovinato il risultato! La somma dei due numeri è <strong>${ourSum}</strong>, come avevi previsto!`;
    }else{sumOutput.innerHTML = `Per questa volta non hai indovinato il risultato, ma puoi sempre riprovare!`;}

  //qui verifico la correttezza dei campi compilati e impedisco alla funzione di andare avanti
  }else if(userNumber.value<1 ||userNumber.value>5 || isNaN(userNumber.value) || userEvenOdd.value !=='pari' ||userEvenOdd.value !=='dispari' || userEvenOdd.value=='' ){
    sumOutput.innerHTML = 'Inserisci tutti i dati correttamente, come richiesto';
  }

  userEvenOdd.value ='';
  userNumber.value = '';
});



function evenOddNumbersSum(num1,num2){
  const somma = num1+num2;
  if(somma % 2){
    console.log('La somma dei due numeri è ' + somma +', dispari');
    return 'dispari';
  } 
  console.log('La somma dei due numeri è ' + somma +', pari');
  return 'pari';
}


function computerNumber(){
  pcResult = Math.ceil(Math.random()*(5));
  return pcResult;
}



