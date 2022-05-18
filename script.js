const userInput = document.getElementById('userInput');
const startCount = document.getElementById('startCount');
const txtDays = document.getElementById('days');
const txtHours = document.getElementById('hours');
const txtMinutes = document.getElementById('minutes');
const txtSeconds = document.getElementById('seconds');
startCount.addEventListener('click', countdownTimer);

const minDate = new Date();
const updateMinDate = userInput.setAttribute('min', minDate.toISOString().slice(0, 10));

function countdownTimer() {
  let date = new Date(userInput.value);
  let currentDate = new Date();
  let time = Math.abs(date - currentDate);

  let seconds = Math.floor(time / 1000);
  let days = Math.floor(seconds / (3600 * 24));
  let hours = Math.floor(seconds % (3600 * 24) / 3600);
  let minutes = Math.floor(seconds % 3600 / 60);
  seconds = Math.floor(seconds % 60);

  txtDays.innerHTML = days;
  txtHours.innerHTML = hours;
  txtMinutes.innerHTML = format(minutes);
  txtSeconds.innerHTML = format(seconds);

  setInterval(countdownTimer, 1000);
}

function format(number) {
  return number < 10 ? `0${number}` : number
}