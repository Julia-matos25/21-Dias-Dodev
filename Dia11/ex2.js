//CRIANDO VARIÁVEIS
let modelos = [];
let anos = [];
let valores = [];
let contador = 0;
let continuar = true;

//CRIANDO LOOP
while (continuar) {
  let modeloCarro = prompt("Insira o modelo do carro:");
  let anoCarro = parseInt(prompt("Insira o ano do carro:"));
  let valorCarro = parseFloat(prompt("Insira o valor do carro: "));
  modelos[contador] = modeloCarro;
  anos[contador] = anoCarro;
  valores[contador] = valorCarro;
  contador++;
  continuar = prompt("Deseja continuar inserindo outros modelos? (s/n)");
  if (continuar == "n") continuar = false;
}
//EXIBINDO INFORMAÇÕES
console.log("CARROS CADASTRADOS:");
for (let i = 0; i < modelos.length; i++) {
  console.log(modelos[i] + " - " + anos[i] + " - " + valores[i]);
}
//ORDENAR PELO PREÇO
for (let i = 0; i < valores.length - 1; i++) {
  for (let j = 0; j < valores.length - i - 1; j++) {
    if (valores[j] > valores[j + 1]) {
      // Trocar os valores no array de modelos
      let tempModelo = modelos[j];
      modelos[j] = modelos[j + 1];
      modelos[j + 1] = tempModelo;

      // Trocar os valores no array de anos
      let tempAno = anos[j];
      anos[j] = anos[j + 1];
      anos[j + 1] = tempAno;

      // Trocar os valores no array de valores
      let tempValor = valores[j];
      valores[j] = valores[j + 1];
      valores[j + 1] = tempValor;
    }
  }
}

// EXIBIR CARROS ORDENADOS PELO PREÇO
console.log("\nCARROS ORDENADOS PELO PREÇO:");
for (let i = 0; i < modelos.length; i++) {
  console.log(modelos[i] + " - " + anos[i] + " - " + valores[i]);
}
