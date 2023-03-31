function gerarPotencia() {
    const base = Math.floor(Math.random() * 15) + 1;
    const expoente = Math.floor(Math.random() * 10) + 1;

    let potencia = 1;
    for (let i = 0; i < expoente; i++) {
      potencia *= base;
    }

    document.getElementById("potencia").innerText = `${base}^${expoente} = ${potencia}`;
  }