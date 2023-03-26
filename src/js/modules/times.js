export default function timer(id, deadline){

function calcTime(endTime){
    // Полученную дату - вычитаем от времени, которое сейчас
    const resTime = Date.parse(endTime) - Date.parse(new Date());

    const resSec = Math.floor((resTime/1000) % 60);
    const resMin = Math.floor((resTime/1000/60) % 60);
    const resHours = Math.floor((resTime /( 1000 * 60 * 60)) % 24);
    const resDays = Math.floor(resTime /(1000 * 60 * 60 *24));

    return {
        'res': resTime,
        'days': resDays,
        'hourse': resHours,
        'minutes': resMin,
        'seconds': resSec
    }
};
// Функия проверяющая, если чило меньше 10, добавлять впереди ноль
const converterDate = (num) => {
    return num < 10 ? `0${num}` : num;
}


const setClock = (selector, endTime) => {
    const timer = document.querySelector(selector);
    const timeInterval = setInterval(() => {
        const days = document.querySelector('#days');
        const hours = document.querySelector('#hours');
        const minutes = document.querySelector('#minutes');
        const seconds = document.querySelector('#seconds');
    
        const res = calcTime(endTime);

        days.textContent = converterDate(res.days);
        hours.textContent = converterDate(res.hourse);
        minutes.textContent = converterDate(res.minutes);
        seconds.textContent = converterDate(res.seconds);

        if(res.res <= 0){
            days.textContent = "00";
            hours.textContent = "00";
            minutes.textContent = "00";
            seconds.textContent = "00";
            clearInterval(timeInterval);
        } 
    }, 1000);
}
setClock(id, deadline);
}

