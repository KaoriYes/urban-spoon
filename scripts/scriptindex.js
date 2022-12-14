var button = document.querySelector(".klik");
var buttondone = document.querySelector(".done");
var sections = document.querySelectorAll(".animatie");
var editbar = document.querySelector(".editbar");
var removebutton = document.querySelectorAll(".remove");
var accountsection = document.querySelector(".accountsection");

function animatie(){
  document.body.classList.add("wiggle");
  editbar.classList.add("dropdown");
  button.classList.add("opacity");
}

function animatieuit(){
    document.body.classList.remove("wiggle");
    document.body.classList.remove("removed");
    editbar.classList.remove("dropdown")
    button.classList.remove("opacity");
}

function href(){
  location.href = "features.html?selection=0";
}

button.addEventListener("click", animatie);
buttondone.addEventListener("click", animatieuit)
