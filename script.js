const descanco = document.getElementById("descanco");
const pastagem = document.getElementById("pastagem");

function calcularPiquetes(a, b) {
  return (a / b) + 1
}

document.getElementById('btnCalcular').addEventListener("click", () => {
  const numDescanco = descanco.value;
  const numPastagem = pastagem.value;

  if (numDescanco !== "" && numPastagem !== " ") {
    const txtresult = document.querySelector(".resultado-txt h2");

    let calculo = calcularPiquetes(numDescanco, numPastagem)

    txtresult.innerHTML = `${calculo.toFixed(0)} <span>Número de Piquetes</span>`;
    document.querySelector('.resultado-container').style.display = "flex";
  }

});

