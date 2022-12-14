var $conteudoGeral = document.querySelector(".conteudo-geral");
var $conteudoEmArray = [].slice.call(document.querySelectorAll(".componente"));
var $botoesDeFechar = [].slice.call(
  document.querySelectorAll(".componente-botao-fechar")
);
var open = false
var copy = false
var width = screen.width

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

function openNav() {
  if(! open ){
    var ul= document.getElementById("nav-list")
    var header = document.getElementById("nav-bar")
    ul.style.width = "70%";
    ul.style.position = "absolute";
    ul.style.top = "0px";
    ul.style.left = "0px";
    ul.className += "active-canvas";
    header.style.transform = "translateY(0)"
    open = true
  }
}

function closeNav() {
  var ul = document.getElementById("nav-list")
  ul.classList.remove("active-canvas")
  open = false
  var header = document.getElementById("nav-bar")
  header.style.removeProperty("transform")
  if(width < 600){
    ul.style.width = "0";
  }

}

if(width < 600){
  var ul = document.getElementById("nav-list")
  ul.setAttribute("style", "width:0;")
}else{
  var ul = document.getElementById("nav-list")
  ul.setAttribute("style", "width:auto;")
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



$(window).on('load', function () {
  setTimeout(function () {
$(".loader-page").css({visibility:"hidden",opacity:"0"})
}, 2000);
 
});

const body = document.body;
const nav = document.querySelector(".page-header nav");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;
 
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll == 0) {
    body.classList.remove(scrollUp);
    return;
  }
   
  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
  } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});