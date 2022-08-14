var yearPercentage = document.getElementById('year-percentage');
var progressBar = document.getElementById('year-progress-bar');
var dayPercentage = document.getElementById('day-percentage');
var dayProgressBar = document.getElementById('day-progress-bar');
var lifePercentage = document.getElementById('life-percentage');
var lifeProgressBar = document.getElementById('life-progress-bar');
var ageInput = document.getElementById('age');

function getDayOfTheYear() {
  var now = new Date();
  var start = new Date(now.getFullYear(), 0, 0);
  var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 *   1000);
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);
  return day;
}



function getDaysOfAYear() {
  var today = new Date();
  var year = today.getFullYear();
  var isLeapYear = year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
  return isLeapYear ? 366 : 365;
}

function getYearPercentage() {
  return (getDayOfTheYear() / getDaysOfAYear()) * 100;
}



function getSecondsOfCurrentDay() {
  var date = new Date();
  var secs = date.getSeconds() + (60 * (date.getMinutes() + (60 * date.getHours())));
  return secs;
}

function getSecondsInADay() { 
  return 60 * 60 * 24;
}

function getDayPercentage() {
  return (getSecondsOfCurrentDay() / getSecondsInADay()) * 100;
}

function getLifePercentage() {
  var averageLifeExpectancy = 72;
  var secondsInAYear = 60 * 60 * 24 * getDaysOfAYear();
  var secondsInAverageLife = secondsInAYear * averageLifeExpectancy;
  var secondsInYourLife = secondsInAYear * ageInput.value;
  console.log(secondsInYourLife);
  return (secondsInYourLife / secondsInAverageLife) * 100;
}

function render() {
  yearPercentage.innerHTML = '' + getYearPercentage().toFixed() + '%';
  progressBar.value = Math.floor(getYearPercentage());
  
  dayPercentage.innerHTML = '' + getDayPercentage().toFixed() + '%';
  dayProgressBar.value = Math.floor(getDayPercentage());
  
		
  lifePercentage.innerHTML = '' + getLifePercentage().toFixed() + '%';
  lifeProgressBar.value = Math.floor(getLifePercentage());
}

function start() {
  setInterval(function(){ render(); }, 0);
}

start();



/* MONTH, WITHOUT PERCENTAGE */
const now = new Date();
const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
const diffDays = Math.ceil(Math.abs(nextMonth.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
now.setMonth(now.getMonth() + 1);
now.setDate(0);
const daysInCurrentMonth = now.getDate();
progress.max = daysInCurrentMonth;
progress.value = daysInCurrentMonth - diffDays;

/* below for debug purposes only */

console.log('Days in current month: ' + daysInCurrentMonth);
console.log('Days until next month: ' + diffDays);