function verificarIdade() {
    const age = Number(document.getElementById("age").value);
    let maiorIdade = age;
    if (age >= 18) {
        alert("Parabéns, voce já pode ser preso, voce tem " + maiorIdade + " anos de idade.");
    } else {
        alert("Você ainda não pode ser preso, você tem apenas " + maiorIdade + " anos de idade.");
    }
    
    
  }