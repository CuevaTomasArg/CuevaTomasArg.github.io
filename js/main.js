var $conteudoGeral = document.querySelector(".contenido-general");
var $conteudoEmArray = [].slice.call(document.querySelectorAll(".card"));
var $botoesDeFechar = [].slice.call(
  document.querySelectorAll(".componente-boton-cerrar")
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
      .querySelector(".card.caixa-conteudo-ativo")
      .classList.remove("caixa-conteudo-ativo");
  });
});