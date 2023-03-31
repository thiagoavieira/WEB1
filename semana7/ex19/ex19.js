function ordenar() {
    var sequencia = document.getElementById("sequencia").value;
    var original = sequencia.split("");
    var ordenado = sequencia.split("").sort();
    
    document.getElementById("original").innerHTML = original.join("");
    document.getElementById("ordenado").innerHTML = ordenado.join("");
  }