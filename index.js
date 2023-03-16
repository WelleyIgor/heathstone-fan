function changeImageIllidan() {
  var image = document.getElementById("illidanImg");
  image.src = "imagens/herois/illidanGIF.webp";
}

function revertImageIllidan() {
  var image = document.getElementById("illidanImg");
  image.src = "./imagens/herois/illidan.webp";
}
function changeImageGuldan() {
  var image = document.getElementById("guldanImg");
  image.src = "./imagens/herois/guldanGIF.webp";
}

function revertImageGuldan() {
  var image = document.getElementById("guldanImg");
  image.src = "./imagens/herois/guldan.webp";
}
function changeImageMalfurion() {
  var image = document.getElementById("malfurionImg");
  image.src = "./imagens/herois/malfurionGIF.webp";
}

function revertImageMalfurion() {
  var image = document.getElementById("malfurionImg");
  image.src = "./imagens/herois/malfurion.webp";
}
function changeImageRexxar() {
  var image = document.getElementById("rexxarImg");
  image.src = "./imagens/herois/rexxarGIF.webp";
}

function revertImageRexxar() {
  var image = document.getElementById("rexxarImg");
  image.src = "./imagens/herois/rexxar.webp";
}
function changeImageJaina() {
  var image = document.getElementById("jainaImg");
  image.src = "./imagens/herois/jainaGIF.webp";
}

function revertImageJaina() {
  var image = document.getElementById("jainaImg");
  image.src = "./imagens/herois/jaina.webp";
}
function changeImageUther() {
  var image = document.getElementById("utherImg");
  image.src = "./imagens/herois/utherGIF.webp";
}

function revertImageUther() {
  var image = document.getElementById("utherImg");
  image.src = "./imagens/herois/uther.webp";
}
function changeImageAnduin() {
  var image = document.getElementById("anduinImg");
  image.src = "./imagens/herois/anduinGIF.webp";
}

function revertImageAnduin() {
  var image = document.getElementById("anduinImg");
  image.src = "./imagens/herois/Anduin.webp";
}
function changeImageValeera() {
  var image = document.getElementById("valeeraImg");
  image.src = "./imagens/herois/valeeraGIF.webp";
}

function revertImageValeera() {
  var image = document.getElementById("valeeraImg");
  image.src = "./imagens/herois/valeera.webp";
}
function changeImageThrall() {
  var image = document.getElementById("thrallImg");
  image.src = "./imagens/herois/thrallGIF.webp";
}

function revertImageThrall() {
  var image = document.getElementById("thrallImg");
  image.src = "./imagens/herois/thrall.webp";
}
function changeImageGarrosh() {
  var image = document.getElementById("garroshImg");
  image.src = "./imagens/herois/garroshGIF.webp";
}

function revertImageGarrosh() {
  var image = document.getElementById("garroshImg");
  image.src = "./imagens/herois/garrosh.webp";
}
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("show");
});
