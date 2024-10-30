let minute = 0;
let second = 0;

let cron;

document.crons.start.onclick = () => start();

function start() {
    pause();
    cron = setInterval(() => { timer(); }, 10);
  }

  document.getElementById('minute').innerText = '00';
  document.getElementById('second').innerText = '00';

function timer () {
    if (second == 60) {
        second = 0;
        minute++;
      }
      if (minute == 60) {
        minute = 0;
        hour++;
      }
}

document.getElementById('minute').innerText = returnData(minute);
document.getElementById('second').innerText = returnData(second);

function returnData(input) {
    return input >= 10 ? input : `0${input}`
  }