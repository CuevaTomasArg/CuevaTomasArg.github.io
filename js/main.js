var $conteudoGeral = document.querySelector(".conteudo-geral");
var $conteudoEmArray = [].slice.call(document.querySelectorAll(".componente"));
var $botoesDeFechar = [].slice.call(
  document.querySelectorAll(".componente-botao-fechar")
);

setTimeout(function () {
  $conteudoGeral.classList.remove("js-conteudo-geral");
}, 200);

$conteudoEmArray.forEach(function ($componente) {
  $componente.addEventListener("click", function () {
    if (this.classList.contains("caixa-conteudo-ativo")) return;
    $conteudoGeral.classList.add("caixa--componente-ativo");
    this.classList.add("caixa-conteudo-ativo");
  });
});

$botoesDeFechar.forEach(function ($btn) {
  $btn.addEventListener("click", function (e) {
    e.stopPropagation();
    $conteudoGeral.classList.remove("caixa--componente-ativo");
    document
      .querySelector(".componente.caixa-conteudo-ativo")
      .classList.remove("caixa-conteudo-ativo");
  });
});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  var ul= document.getElementById("nav-list")
  ul.style.width = "70%";
  ul.className += "active-canvas";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  var ul = document.getElementById("nav-list")
  ul.style.width = "0";
  ul.classList.remove("active-canvas")

}