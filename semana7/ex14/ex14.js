function calcularPotencia() {
    const base = 2;
    const expoenteMax = 8;
  
    let resultado = "";
  
    let expoente = 0;
    let potencia = 1;
    
    while (expoente <= expoenteMax) {
      resultado += base + "<sup>" + expoente + "</sup> = " + potencia + "<br>";
      potencia *= base;
      expoente++;
    }
  
    document.getElementById("resultado").innerHTML = resultado;
  }