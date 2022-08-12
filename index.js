//Calculadora Normal
const botones = document.getElementsByClassName("boton");
let operador = document.getElementsByClassName("operador");
let pantalla = document.getElementById("texto");

//Selector de Modo
let selector = document.getElementById("fondo");
let estado = false;

//Variables auxiliares
let numeroguardado = 0;
let operacion = null;

for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", (e) => {
    pantalla.innerHTML = pantalla.innerHTML + e.path[0].innerHTML;
  });
}

for (let i = 0; i < operador.length; i++) {
  operador[i].addEventListener("click", (e) => {
    if ((operacion = null)) {
      numeroguardado = Number(pantalla.innerHTML);
      pantalla.innerHTML = "";

      if (operador[i].innerHTML === "x") {
        operacion = "*";
      } else {
        operacion = e.path[0].innerHTML;
      }

      return;
    } else {
      numeroguardado = eval(
        Number(numeroguardado) + operacion + Number(pantalla.innerHTML)
      );
      pantalla.innerHTML = "";
      if (operador[i].innerHTML === "x") {
        operacion = "*";
      } else {
        operacion = e.path[0].innerHTML;
      }
    }
  });
}

document
  .getElementsByClassName("borrar")[0]
  .addEventListener("click", function () {
    numeroguardado = 0;
    operacion = null;
    pantalla.innerHTML = "";
  });
document
  .getElementsByClassName("igual")[0]
  .addEventListener("click", function () {
    pantalla.innerHTML = eval(
      Number(numeroguardado) + operacion + Number(pantalla.innerHTML)
    );
    numeroguardado = 0;
    operacion = null;
  });

window.addEventListener(
  "contextmenu",
  function (e) {
    // do something here...
    console.log("click derecho");
    e.preventDefault();

    selector.className = "on";
  },
  false
);

// if (estado === false) {
//   console.log("entre 1");
//   estado = true;
//   return;
// }
// console.log("entre 2");
// estado = false;
// return;
