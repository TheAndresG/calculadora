const botones = document.getElementsByClassName("boton");
let operador = document.getElementsByClassName("operador");
let pantalla = document.getElementById("texto");

let numeroguardado = 0;
let operacion = null;

for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", (e) => {
    pantalla.innerHTML = pantalla.innerHTML + e.path[0].innerHTML;
  });
}

for (let i = 0; i < operador.length; i++) {
  operador[i].addEventListener("click", (e) => {
    if ((operador = "x")) {
      operador = "*";
      console.log(operador);
    }
    if ((operacion = null)) {
      numeroguardado = Number(pantalla.innerHTML);

      pantalla.innerHTML = "";
      operacion = e.path[0].innerHTML;
      console.log(numeroguardado);
      return;
    }

    numeroguardado = eval(
      Number(numeroguardado) + operacion + Number(pantalla.innerHTML)
    );
    pantalla.innerHTML = "";
    operacion = e.path[0].innerHTML;
    console.log(numeroguardado);
  });
}

document
  .getElementsByClassName("borrar")[0]
  .addEventListener("click", function () {
    pantalla.innerHTML = "";
  });
document
  .getElementsByClassName("igual")[0]
  .addEventListener("click", function () {
    pantalla.innerHTML = eval(numeroguardado + operacion + pantalla.innerHTML);
    numeroguardado = 0;
    operacion = null;
  });
