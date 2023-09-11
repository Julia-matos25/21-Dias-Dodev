let arrayNomes = [];
let arraySenhas = [];
let escolhaUsuario;
let loginUsuario;
let loginSenha;

let continuar = true;
let contador = 0;
while (continuar) {
  escolhaUsuario = prompt(
    "Insira 1- Cadastro 2- login 3- excluir ou 4- encerrar"
  );
  switch (escolhaUsuario) {
    case "1":
      let arrayNome = prompt("Insira o seu nome: ");
      let arraySenha = parseInt(prompt("Insira sua senha: "));
      arrayNomes[contador] = arrayNome;
      arraySenhas[contador] = arraySenha;
      contador++;
      console.log(
        "Seu cadastro foi concluído: " +
          "Usuario: " +
          arrayNomes +
          " - " +
          "Senha: " +
          arraySenhas
      );
      break;
    case "2":
      loginUsuario = prompt("Insira seu nome: ");
      loginSenha = parseInt(prompt("Insira a sua senha:"));

      if (
        loginUsuario == arrayNomes[contador] &&
        loginSenha[contador] == arraySenhas
      ) {
        console.log("Login concluído com sucesso");
      }
      break;
    case "3":
      let exculuircadastro;
      exculuircadastro = prompt("Insira o nome do cadastro que deseja excluir");
      if (exculuircadastro == arrayNomes) {
        alert("Cadastro excluído com sucesso!");
      } else {
        console.log("Exclusão não concluída");
      }
      break;
    case "4":
      if (escolhaUsuario == "4") continuar = false;
      break;
    default:
      console.log("Algo deu errado");
      break;
  }
}
