/*
**Descrizione:**
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
**NOTA**: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
**BONUS:**
- Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
- Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
Consigli del giorno:
>
> - Pensate prima in italiano.
> - Dividete in piccoli problemi la consegna.
> - Individuate gli elementi di cui avete bisogno per realizzare il programma.
> - Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"

*/

// Visualizziamo in pagina i 5 numeri random 
const numberList = document.querySelector('#numbers-list')
let numeriGenerati = [];
function GeneraNumeriCasuali(min, max) {
    return Math.floor(Math.random() * max) + min;
}

for (let i = 0; numeriGenerati.length < 5; i++) {
    let numeroRandom = GeneraNumeriCasuali(1, 50) 

    //controllo se il numero è già esistente nell'array
    if (!(numeriGenerati.includes(numeroRandom ))){

        //Inserisco il numero nell'array vuoto
        numeriGenerati.push(numeroRandom)
    }
}
console.log(numeriGenerati)

// stampo i numeri generati nell'elemento con la variabile numberList = in html <ul>
numeriGenerati.forEach(numero => {
    const li = document.createElement('li');
    li.textContent = `${numero}`;
    numberList.appendChild(li);
});

// Creo il timer che parte da 30 secondi e quando arriva a 0 fà scomparire i numeri creati precedentemente
//Seleziono gli elementi in html
const countdown = document.querySelector('#countdown')
const instructions = document.querySelector('#instructions')
const answersForm = document.querySelector('#answers-form')

//parte da 30
let counter = 30;

//funzione che fa partire il ccountdown
const timer = setInterval(() => {
    countdown.innerHTML = counter--

    // Se arriva diventa minore di 0
    if (counter < 0 ) {
        clearInterval(timer)
        numberList.classList.add('d-none') //  aggiungo la classe per rimuovere i numeri generati 
        instructions.classList.add('d-none') // aggiungo la classe per rimuovere le istruzioni 
        answersForm.classList.remove('d-none') // rimuovo la classe per far apparire gli input 
    }
    
}, 1000); //millisecondi = 1 sec

// avvio del gioco (confronto dei numeri generati con quelli dell'utente)
const bottone = document.querySelector('.btn-primary')
const inputs = document.querySelectorAll('input')
const numeriUtenteCorretti = [];
const messaggio = document.querySelector('#message')

console.log(inputs);

bottone.addEventListener('click', function(event) {
    event.preventDefault()

    for (let i = 0; i < inputs.length; i++) {

        //confronto dei numeri 
        if (numeriGenerati.includes( parseInt(inputs[i].value) ) ) {
            //Il punteggio aumenta
            numeriUtenteCorretti.push(inputs[i].value)
        }

        console.log(numeriUtenteCorretti, inputs[i].value, numeriGenerati.includes(parseInt(inputs[i].value)));

    }
    // stampo il risultato
    messaggio.innerHTML = `hai indovinato: ${numeriUtenteCorretti.length}, e sono: ${numeriUtenteCorretti.join(",")}`
})

// Modalità Dark
const btnDark = document.querySelector('.btn-dark');
const tagHtml = document.querySelector('html');

btnDark.addEventListener('click', function() {
    // Controlla il tema corrente
    const temadefault = tagHtml.getAttribute('data-bs-theme');

    // Alterna  'dark' e 'light'
    if (temadefault === 'dark') {
        tagHtml.setAttribute('data-bs-theme', 'light');
    } else {
        tagHtml.setAttribute('data-bs-theme', 'dark');
    }
});

// Refresh pagina 
const btnRefresh = document.querySelector('.btn-danger')

btnRefresh.addEventListener('click', function() {
    window.location.reload(true);
})


