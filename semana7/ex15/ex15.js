function calcularPotencia() {
    const base = 2;
    const expoenteMax = 8;
    var resultado = 1;
    var print = "";
  
    for (var expoente = 0; expoente <= expoenteMax; expoente++) {
      if (expoente === 0) {
        resultado = 1;
      } else {
        resultado *= base;
      }
  
      print += `${base}<sup>${expoente}</sup> = ${resultado}<br>`;
    }
    document.getElementById("resultado").innerHTML = print;
  }