let cielo = document.getElementById("cielo");
let sol = document.getElementById("sol");
let monta = document.getElementById("monta");
let mar = document.getElementById("mar");
let text = document.getElementById("text");

let fondo = document.getElementById("fondo");
let cardumen = document.getElementById("cardumen");
let peces = document.getElementById("peces");
let pez = document.getElementById("pez");
let piso = document.getElementById("piso");
let pisob = document.getElementById("pisob");
let text2 = document.getElementById("text2");

let ola = document.getElementById("olas");

window.addEventListener("scroll", function () {
  var value = window.scrollY;
  cielo.style.top = value * 0.5 + "px";
  sol.style.left = -value * 0.5 + "px";
  monta.style.top = -value * 0.2 + "px";
  mar.style.top = value * 0.15 + "px";
  text.style.top = value * 1 + "px";

  ola.style.top = -value * 0.4 + "px";
  // console.log(window.scrollY);
  // if (window.scrollY > 290) {
  fondo.style.top = -value * 0.1 + "px";
  cardumen.style.left = -value * 0.1 + "px";
  peces.style.top = -value * 0.2 + "px";
  pez.style.left = -value * 1.7 + "px";
  piso.style.top = value * 0.03 + "px";
  pisob.style.top = value * 0.03 + "px";
  text2.style.top = -value * 0.11 + "px";
  // }
});
