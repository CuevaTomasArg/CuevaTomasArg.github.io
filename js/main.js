// const { google } = require("googleapis");
// const OAuth2 = google.auth.OAuth2;

// const accountTransport = require("./account_transport.json");

// const mail_rover = async (callback) => {
//     const oauth2Client = new OAuth2(
//         accountTransport.auth.clientId,
//         accountTransport.auth.clientSecret,
//         "https://developers.google.com/oauthplayground",
//     );
//     oauth2Client.setCredentials({
//         refresh_token: accountTransport.auth.refreshToken,
//         tls: {
//             rejectUnauthorized: false
//         }
//     });
//     oauth2Client.getAccessToken((err, token) => {
//         if (err)
//             return console.log(err);;
//         accountTransport.auth.accessToken = token;
//         callback(nodemailer.createTransport(accountTransport));
//     });
// };

// function send(idAplicativo, calback) {
//     var id = 0;
//     try {
//         var id = parseInt(idAplicativo);
//     } catch (error) {
//         console.log(`error parse idAplicativo feedback.js ${error}`)
//     }
//     mail_rover(function (emailTransporter) {
//         switch (id) {
//             case _ID_APP_1:
//                 json = {
//                     url: _SERVER + 'check/', mail: emailTransporter, app: 'CHECK', from: 'Check <check@planck.biz>',
//                     to: 'CHECK <check@planck.biz>',
//                     slogan: '😋 Comida exquisita, entregas simples. 🛵 Compra YA! 👇🏻',
//                     body_bienvanida: 'Mensaje personalizado', head_bienvanida: 'En Check pide a tu local favorito, o chatea con un asesor por medicina, y te lo llevamos lo antes posible.',
//                     bcc: 'Info <planck.biz@gmail.com>', head: head, footer: footer
//                 };
//                 return calback(json);
//             default:
//                 json = {
//                     url: _SERVER + 'check/', mail: emailTransporter, app: 'CHECK', from: 'Check <check@planck.biz>',
//                     to: 'CHECK <check@planck.biz>',
//                     slogan: '😋 Comida exquisita, entregas simples. 🛵 Compra YA! 👇🏻',
//                     body_bienvanida: 'Mensaje personalizado', head_bienvanida: 'En Check pide a tu local favorito, o chatea con un asesor por medicina, y te lo llevamos lo antes posible.',
//                     bcc: 'Info <planck.biz@gmail.com>', head: head, footer: footer
//                 };
//                 return calback(json);
//         }
//     });
// }


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
console.log(screen.width, screen.height)
