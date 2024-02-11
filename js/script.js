
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

    // calcolo i giorni, le ore, i minuti e i secondi (ho usato un metodo consigliato da w3school, percheé non avevo idea di come farlo
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    console.log(days);

    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    console.log(hours);

    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    console.log(minutes);

    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    console.log(seconds);

}, 1000);

