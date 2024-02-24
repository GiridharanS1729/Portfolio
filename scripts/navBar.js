let hambuger = document.querySelector(".HamBurger");
let menu = document.querySelector(".Nav-ul");

let a1Element = document.getElementById("1");
let a2Element = document.getElementById("2");
let a3Element = document.getElementById("3");
let a4Element = document.getElementById("4");
let a5Element = document.getElementById("5");


hambuger.onclick = function () {
  hambuger.classList.toggle("Active");
  menu.classList.toggle("Active");
}


a1Element.onclick = function () {
  hambuger.classList.remove("Active");
  menu.classList.remove("Active");

}
a2Element.onclick = function () {
  hambuger.classList.remove("Active");
  menu.classList.remove("Active");

}
a3Element.onclick = function () {
  hambuger.classList.remove("Active");
  menu.classList.remove("Active");

}
a4Element.onclick = function () {
  hambuger.classList.remove("Active");
  menu.classList.remove("Active");

}
a5Element.onclick = function () {
  hambuger.classList.remove("Active");
  menu.classList.remove("Active");

}