function verificarMaiorNumero() {
    const num1 = Number(document.getElementById("numero1").value);
    const num2 = Number(document.getElementById("numero2").value);
    const num3 = Number(document.getElementById("numero3").value);
    
    let maiorNumero = num1;
    
    if (num2 > maiorNumero) {
      maiorNumero = num2;
    }
    
    if (num3 > maiorNumero) {
      maiorNumero = num3;
    }
    
    alert("O maior número é: " + maiorNumero);
  }