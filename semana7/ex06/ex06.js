function calcularIMC() {
    const altura = Number(document.getElementById("altura").value);
    const peso = Number(document.getElementById("peso").value);
    const imc = peso / (altura * altura);
    
    document.getElementById("resultado").textContent = "Seu IMC é: " + imc.toFixed(2);
}