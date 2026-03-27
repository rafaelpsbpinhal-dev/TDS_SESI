var idade = 18;
var entradaVIP = true;
var entrada = idade >=18 && entradaVIP == true ? "entrada com autorização" : "entrada sem autorização";

console.log(entrada);

if(idade >= 18 &&entradaVIP == true) {
    console.log ("acesso permitido(if)");
}
else{
    console.log("entrada não autorizada (else)");
}

  