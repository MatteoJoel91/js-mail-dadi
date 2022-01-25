// Mail 
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


// Doamanda email
let mail = (prompt('Inserire la mail per il controllo.\nGrazie'));
console.log(mail);

const myArray = ['matteo@gmail.com', 'luca@gmail.com', 'marco@gmail.com', 'giovanni@gmail.com'];
console.log(myArray)

if (mail = myArray) {
    alert('La sua mail è nella lista e può accedere');
} else {
    alert('La sua mail non è nella lista, non può accedere');
}






