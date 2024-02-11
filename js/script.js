
// prendo la data da cui voglio partire inserisco la stringa manualmente,
// in un secondo momento potrei inserire un imput per farlo inserire all'utente
let countDownDate = new Date("Feb 12, 2024 09:30:00").getTime();
console.log(countDownDate);


// adesso creo una funzione che mi permette di aggiornare il conto alla rovescia
let countDown = setInterval(function () {

    // prendo la data attuale di oggi e la metto in una variabile
    let now = new Date().getTime();
    console.log(now);

    // adesso devo calcolare la differenza tra la data di oggi e la data nella stringa
    let distance = countDownDate - now;
    console.log(distance);
}, 1000);

