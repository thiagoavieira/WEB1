function encontrarPrimo() {
    let contador = 1;
    let aux = 3;
    
    while (contador < 1001) {
      if (verificaPrimo(aux)) {
        contador++;
      }
      aux += 2;
    }
    
    document.getElementById("resultado").textContent = "O nº 1001 primo é: " + (aux - 2);
  }
  
function verificaPrimo(numero) {
    if (numero < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
}