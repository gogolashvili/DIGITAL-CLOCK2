let hour = document.querySelector(".saati");
let minute = document.querySelector(".wuti");
let second = document.querySelector(".wami");
let time = document.querySelector(".am");

let saati = 0;
let wuti = 0;
let wami = 0;
let dro = "AM";

let interval = setInterval(function () {
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
    second.innerHTML = "00";

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

  if (saati < 10) {
    hour.innerHTML = "0" + saati;
  } else {
    hour.innerHTML = saati;
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
}, 1000);
