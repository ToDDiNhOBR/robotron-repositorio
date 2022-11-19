const lista = document.querySelector("ul");
console.log(lista)
document.querySelector("#botao").addEventListener("click", () => {
  lista.setAttribute("data-lista", "mostrar");
});

document.querySelector(".close").addEventListener("click", () => {
  lista.setAttribute("data-lista", "esconder");
});

function trocaImagem(cor){
  document.querySelector(".robo").src="./img/Robotron 2000 - " + cor + ".png";
}

