let nomeUsuario = prompt("Digite o seu nome");
let idadeUsuario = parseInt(prompt("Digite a sua idade"));
let carteira = prompt("Você tem carteira de motorista?");
let temCarro = prompt("Você tem algum carro?");

if(idadeUsuario < 18 && carteira == "nao"){
    console.log( nomeUsuario + " você não pode dirigir")
}
else if(idadeUsuario >= 18 || carteira == "sim" && temCarro == "nao"){
    console.log( nomeUsuario + " você pode dirigir, mas não tem um carro ou carta")
}
else if(idadeUsuario >= 18 || carteira == "sim"  && temCarro == "sim"){
    console.log( nomeUsuario + " você será o motorista!")
}