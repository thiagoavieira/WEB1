function calcularDelta() {
    let a = parseFloat(document.getElementById("input-a").value);
    let b = parseFloat(document.getElementById("input-b").value);
    let c = parseFloat(document.getElementById("input-c").value);
  
    let delta = Math.pow(b, 2) - 4 * a * c;
  
    let resultado = document.getElementById("resultado");
    resultado.textContent = "Δ = b² – 4ac ⠀⠀ →  ⠀⠀";
    resultado.textContent += "Δ = " + b + "² - 4 . " + a + " . " + c + " ⠀⠀ →  ⠀⠀";
    resultado.textContent += "Δ = " + Math.pow(b, 2) + " - " + (4 * a * c) + " ⠀⠀ →  ⠀⠀";
    resultado.textContent += "Δ = " + delta;
}