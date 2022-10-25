<?php
$email = $_POST["email"];
$whatsapp = $_POST["whatsapp"];
$consulta = $_POST["consulta"];

$mensaje="Email: " . $email . "Telefono: ". $whatsapp ."\r\n" ."Consulta: "."\r\n".$consulta ;

$Asunto="Consulta webs";

$para="cuevatomass02@gmail.com";

mail($para,$Asunto,utf8_decode($mensaje));

header('Location: ../index.html')



?>
