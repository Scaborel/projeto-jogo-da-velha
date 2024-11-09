let jogo = ["", "", "", "", "", "", "", "", ""];

let jogadorAtual = "X";

document.querySelectorAll(".celula").forEach((celula, index) => {
  celula.addEventListener("click", () => {
    if (jogo[index] === "") {
      jogo[index] = jogadorAtual;
      celula.textContent = jogadorAtual;
      verificarVencedor();
      jogadorAtual = jogadorAtual === "X" ? "O" : "X";
    }
  });
});

document.getElementById("reiniciar").addEventListener("click", () => {
  jogo = ["", "", "", "", "", "", "", "", ""];
  jogadorAtual = "X";
  document.querySelectorAll(".celula").forEach((celula) => {
    celula.textContent = "";
  });
});

function verificarVencedor() {
  const combinacoesVencedoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < combinacoesVencedoras.length; i++) {
    const combinacao = combinacoesVencedoras[i];
    if (
      jogo[combinacao[0]] === jogo[combinacao[1]] &&
      jogo[combinacao[1]] === jogo[combinacao[2]] &&
      jogo[combinacao[0]] !== ""
    ) {
      alert(`Jogador ${jogo[combinacao[0]]} venceu!`);
      return;
    }
  }
}
