function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function calcularSoma() {
    let res = 0;
    
    for (let i = 0; fibonacci(i) <= 50000; i++) {
      let termo = fibonacci(i);
      if (termo % 2 === 0) {
        res += termo;
      }
    }
    document.getElementById("resultado").textContent = "A soma dos termos da sequência de Fibonacci a partir dos pares 0 e 1 até 50000 é: " + res;
}