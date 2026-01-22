function vypis(text) {
  document.getElementById("output").textContent = text;
}

function naZmacknutiTlacitka(callback) {
  document.getElementById("btn").addEventListener("click", callback);
}

function cyklus(pole, proKazdeho) {
  for (let i = 0; i < pole.length; i++) {
    proKazdeho(pole[i], i);
  }
}
