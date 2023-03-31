function inverter() {
    let sequencia = document.getElementById("sequencia").value;
    let resultado = sequencia.split("").reverse().join("");
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}