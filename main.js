let hour = document.querySelector(".saati");
let minute = document.querySelector(".wuti");
let second = document.querySelector(".wami");
let time = document.querySelector(".am");

let saati = 0;
let wuti = 50;
let wami = 0;
let dro = "AM";

let interval = setInterval(function () {
  hour.innerHTML = saati;

  time.innerHTML = dro;

  wami++;
  if (wami < 10) {
    wami = "0" + wami;
    second.innerHTML = wami;
  }
  second.innerHTML = wami;

  if (wami >= 60) {
    wami = 0;
    wuti++;
    if (wuti < 10) {
      minute.innerHTML = "0" + wuti;
    } else {
      minute.innerHTML = wuti;
    }
  }

  if (wuti >= 60) {
    wuti = 0;
    saati++;
    minute.innerHTML = "00";
  }
  if (saati >= 24) {
    saati = 0;
    wuti = 0;
    wami = 0;
  }
  if (saati >= 12 && saati < 24) {
    dro = "PM";
  }
  if (saati >= 0 && saati < 12) {
    dro = "AM";
  }
}, 100);
