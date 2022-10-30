var $conteudoGeral = document.querySelector(".conteudo-geral");
var $conteudoEmArray = [].slice.call(document.querySelectorAll(".componente"));
var $botoesDeFechar = [].slice.call(
  document.querySelectorAll(".componente-botao-fechar")
);
var open = false
var copy = false
var width = screen.width
console.log("El ancho de la pantalla es: ",width)

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
  if(! open ){
    var ul= document.getElementById("nav-list")
    ul.style.width = "70%";
    ul.className += "active-canvas";
    open = true
  }
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  var ul = document.getElementById("nav-list")
  ul.style.width = "0";
  ul.classList.remove("active-canvas")
  open = false

}

function copiarAlPortapapeles(id_elemento) {
  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
  console.log("Se copio  el", aux);
  if(! copy){
     var confirm = document.getElementById("copiado")
     confirm.className += "copiado"
     copy = true
   }
}

if(width < 600){
  var ul = document.getElementById("nav-list")
  ul.setAttribute("style", "width:0;")
}else{
  var ul = document.getElementById("nav-list")
  ul.setAttribute("style", "width:auto;")
}

$(window).on('load', function () {
  setTimeout(function () {
$(".loader-page").css({visibility:"hidden",opacity:"0"})
}, 2000);
 
});