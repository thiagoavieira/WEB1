function inverter() {
    var texto = document.getElementById("texto").value;
    var textoInvertido = texto.split("").reverse().join("");
    document.getElementById("resultado").innerHTML = "<br>Texto invertido: " + textoInvertido;
  }