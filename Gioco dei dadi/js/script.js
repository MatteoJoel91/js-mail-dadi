// Gioco dei dadi 
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


alert('Tiro il dado per il Giocatore 1');

let dadoGiocatore1 = Math.floor(Math.random() * 6 +1);
console.log(dadoGiocatore1)
alert('È uscito ' + dadoGiocatore1);

alert('Tiro il dado per il Giocatore 2');

let dadoGiocatore2 = Math.floor(Math.random() * 6 +1);
console.log(dadoGiocatore2)
alert('È uscito ' + dadoGiocatore2);

if(dadoGiocatore1 > dadoGiocatore2){
    alert('Ha vinto il giocatore 1');
}else if(dadoGiocatore1 < dadoGiocatore2){
    alert('Ha vinto il giocatore 2');
}else{
    alert('Pareggio')
}