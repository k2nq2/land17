function formatTime(hours, minutes, seconds) {
    return {
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0')
    };
}

// Функція для оновлення таймера
function updateTimer() {
    // Парсимо рядок часу

    let hoursMob = parseInt(document.getElementById('hoursMob').textContent);
    let minutesMob = parseInt(document.getElementById('minutesMob').textContent);
    let secondsMob = parseInt(document.getElementById('secondsMob').textContent);

    // Зменшуємо час на одну секунду
    if (secondsMob > 0) {
 
        secondsMob--;
    } else {
        if (minutesMob > 0) {

            minutesMob--;

            secondsMob = 59;
        } else {
            if (hoursMob > 0) {
                hoursMob--;

                minutesMob = 59;

                secondsMob = 59;
            } else {
                // Таймер завершено
                clearInterval(timerInterval);
                // alert('Час вийшов!');
                return;
            }
        }
    }

    // Оновлюємо вміст таймера
    const formattedTime = formatTime(hoursMob, minutesMob, secondsMob);

    document.getElementById('hoursMob').textContent = formattedTime.hours;
    document.getElementById('minutesMob').textContent = formattedTime.minutes;
    document.getElementById('secondsMob').textContent = formattedTime.seconds;
}

// Оновлюємо таймер кожну секунду
let timerInterval = setInterval(updateTimer, 1000);