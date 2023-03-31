function verificaPrimo(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.floor(number / 2); i++) {  // Verifica a divisão
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function gerarTabela() {
  const table = document.getElementById("tabela-primos");

  while (table.rows.length > 0) {
    table.deleteRow(0);
  }

  for (let i = 0; i <= 200; i++) { // adiciona as linhas
    const row = table.insertRow();
    const celulaNumero = row.insertCell();
    const celulaPrimo = row.insertCell();

    celulaNumero.textContent = i;

    if (verificaPrimo(i)) {
      celulaPrimo.textContent = "Sim";
      row.classList.add("verde");
    } else {
      celulaPrimo.textContent = "Não";
      row.classList.add("vermelho");
    }
  }
}

document
  .getElementById("btn-gerar")
  .addEventListener("click", gerarTabela);
