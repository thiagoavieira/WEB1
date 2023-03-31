const base = 2;
const expoenteMax = 8;
var resultado = 1;
var print = "";

for(var expoente = 0; expoente <= expoenteMax; expoente++){
  resultado = Math.pow(base, expoente);
  print += `${base}<sup>${expoente}</sup> = ${resultado}<br>`;
}

document.getElementById("resultado").innerHTML = print;