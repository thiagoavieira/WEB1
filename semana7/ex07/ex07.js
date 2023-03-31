function calcularSoma() {
    let res = 0;
    
    for (let i = 1; i < 1000; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        res += i;
      }
    }
    
    document.getElementById("resultado").textContent = "A soma dos múltiplos de 3 ou 5 abaixo de 1000 é: " + res;
}