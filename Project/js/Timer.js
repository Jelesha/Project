var timeleft =  60; //Здесь можно задать время для таймера
var downloadTimer = setInterval(function () {
  document.getElementById("countdown").innerHTML = `${timeleft} секунд осталось`;
  timeleft -= 1; // отсчёт времени
  if (timeleft <= 0) {  // Условие для появления сообщения о окончании отсчёта времени
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Время закончилось, перезапустите страницу для нового раунда";
  }
}, 1000);

