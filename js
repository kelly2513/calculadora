function calcularIMC() {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const resultadoIMC = document.getElementById("resultadoIMC");
  const classificacaoIMC = document.getElementById("classificacaoIMC");

  if (isNaN(peso) || isNaN(altura) || altura <= 0) {
    resultadoIMC.textContent = "Por favor, insira valores válidos.";
    classificacaoIMC.textContent = "";
    return;
  }

  const imc = peso / (altura * altura);
  resultadoIMC.textContent = `Seu IMC é: ${imc.toFixed(2)}`;

  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc < 24.9) {
    classificacao = "Peso normal";
  } else if (imc < 29.9) {
    classificacao = "Sobrepeso";
  } else if (imc < 34.9) {
    classificacao = "Obesidade grau I";
  } else if (imc < 39.9) {
    classificacao = "Obesidade grau II";
  } else {
    classificacao = "Obesidade grau III (mórbida)";
  }

  classificacaoIMC.textContent = `Classificação: ${classificacao}`;
}
