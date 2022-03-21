console.log("Hola mundo");

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
console.log("navbar:" + navbar.offsetTop);
var pegado = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= pegado) {
    navbar.classList.add("pegado")
  } else {
    navbar.classList.remove("pegado");
  }
}