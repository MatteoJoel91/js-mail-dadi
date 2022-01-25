// Mail 
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


// Arrey
const myArray = ['matteo@gmail.com', 'luca@gmail.com', 'marco@gmail.com', 'giovanni@gmail.com'];

// Doamanda email
let mail = (prompt('Inserire la mail per il controllo.\nGrazie'));

let mail_trovata = false;

// Ciclo for
for (let i = 0; i < myArray.length; i++){

    if(mail == myArray[i]){
        mail_trovata = true;
    } else {
        mail_trovata = false;
    }
}

if(mail_trovata){
    console.log('positivo');
    alert('La mail è in lista e puoi accedere');
}else{
    console.log('negativo');
    alert('La mail non è in lista e non puoi accedere');
}