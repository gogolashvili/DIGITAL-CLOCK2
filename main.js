let saati = 0;
let wuti = 0;
let wami = 0;
let time = "am";

p.innerHTML = saati + " სთ :" + " " + wuti + " წთ :" + wami + " წმ " + time;

let interval = setInterval(function () {
  p.innerHTML = saati + " სთ :" + " " + wuti + " წთ :" + wami + " წმ " + time;
  wami++;
  if (wami >= 60) {
    wami = 0;
    wuti++;
  }
  if (wuti >= 60) {
    wuti = 0;
    saati++;
  }
  if (saati >= 24) {
    saati = 0;
    wuti = 0;
    wami = 0;
  }
  if (saati >= 12 && saati < 24) {
    time = "pm";
  }
  if (saati >= 0 && saati < 12) {
    time = "am";
  }
}, 1000);
