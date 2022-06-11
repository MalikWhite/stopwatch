const s = document.querySelector('.s');
const m = document.querySelector('.m');
const h = document.querySelector('.h');
const hours = document.querySelector('.hours')
const minute = document.querySelector('.minutes')

function clock() {
  const date = new Date()
  let seconds = date.getSeconds() * (360 / 60);
  let minutes = date.getMinutes() * (360 / 60);
  let hour = date.getHours() * (360 / 12);
  s.style.transform = `rotate(${seconds}deg)`
  m.style.transform = `rotate(${minutes}deg)`
  h.style.transform = `rotate(${hour}deg)`
  // clock second  
  minute.innerHTML =
    date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`

  hours.innerHTML =
    date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`

  setTimeout(function () {
    clock();
  }, 1000);
}
clock()

// stopwatch

const tabsItem = document.querySelectorAll('.tabsItem');
const tabsContentItem = document.querySelectorAll('.tabsContentItem');

tabsItem.forEach(function (el, i) {
  el.addEventListener('click', function (event) {
    tabsItem.forEach(function (el, i) {
      el.classList.remove('active');
      tabsContentItem[i].classList.remove('active');
    });

    tabsContentItem[i].classList.add('active');
    el.classList.add('active');
  });
});



const stopWatchBtn = document.querySelector('.stopwatch__btn')
const stopWatchSecond = document.querySelector('.stopwatch__seconds')
const stopWatchMinutes = document.querySelector('.stopwatch__minutes')
const stopWatchHours = document.querySelector('.stopwatch__hours')
const tabLinkSpan = document.querySelector(".tabsLink__span")





let sec = 00
let min = 00
let hr = 00
let interval = null
let stat = "stopped"

function secondamer() {
  sec++
  if (sec < 9) {
    stopWatchSecond.innerHTML = '0' + sec
  }
  if (sec > 9) {
    stopWatchSecond.innerHTML = sec
  }
  if (sec > 60) {
    min++
    stopWatchMinutes.innerHTML = '0' + min
    sec = 0
    stopWatchSecond.innerHTML = '0' + sec
  }
  if (min < 9) {
    stopWatchMinutes.innerHTML = '0' + min
  }
  if (min > 9) {
    stopWatchMinutes.innerHTML = min
  }
  if (min > 60) {
    hr++
    stopWatchHours.innerHTML = '0' + hr
    min = 0
    stopWatchMinutes.innerHTML = '0' + min
  }
  if (hr < 9) {
    stopWatchHours.innerHTML = '0' + hr
  }
  if (hr > 9) {
    stopWatchHours.innerHTML = hr
  }
  if (hr > 24) {
    hr = 0
    stopWatchHours.innerHTML = '0' + hr
  }

  //   setTimeout(function () {secondamer();
  // }, 1000);
}


function startStopReset() {
  if (stat === "stopped") {
    interval = window.setInterval(secondamer, 1000);
    document.querySelector(".stopwatch__btn").innerHTML = "Stop"
    stat = "started"
    tabLinkSpan.style.display = 'flex'
    
  } else if (stat === "started") {
    window.clearInterval(interval);
    document.querySelector(".stopwatch__btn").innerHTML = "Reset"
    stat = "stopedone"
    tabLinkSpan.style.background = 'red'
  } else if (stat === "stopedone") {
    window.clearInterval(interval);
    sec = 00
    min = 00
    hr = 00
    document.querySelector('.stopwatch__seconds').innerHTML = "00"
    document.querySelector('.stopwatch__minutes').innerHTML = "00"
    document.querySelector('.stopwatch__hours').innerHTML = "00"
    document.querySelector(".stopwatch__btn").innerHTML = "Start"
    stat = "stopped"
    tabLinkSpan.style.display = 'none'
    tabLinkSpan.style.background = 'white'
  }
}
