
function generaNumeriCasuali(min, max, ) {
    const numeriCasuali = [];
    for (let i = 0; i < 5; i++) {
        numeriCasuali.push(Math.floor(Math.random() * max)+ min); // Numeri casuali 
    }
    return numeriCasuali;
}

function createCountdown(duration, interval, targetElement) {
    let counter = duration;
    const intervalId = setInterval(() => {
        if (counter == 0) {
            clearInterval(intervalId);
            targetElement.innerHTML = 0;
        } else {
            targetElement.innerHTML = counter--;
        }
    }, interval); 

    return intervalId; 
}
