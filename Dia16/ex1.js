//Criando array para guardar nome e senha do usuário
let nomeUsuario = [];
let senhaUsuario = [];

//Função que solicita usuário a opção que deseja
function PerguntarAoUsuario() {
  let opcao = prompt("Insira 1- Cadastrar 2- Login 3- Excluir 4- Encerrar");
  return opcao;
}
//Funçao de cadastro que solicita dois valores ao usuário, nome e senha
//E guarda cada um em um respectivo array

function CadastrarUsuario() {
    let nome = prompt("Insira o seu nome para cadastro: ");
    let senha = Number(prompt("Insira a sua senha para cadastro: "));
    nomeUsuario.push(nome);
    senhaUsuario.push(senha);
  }
  
//Função de login que recebe dois valores como parâmetro um nome e uma senha
//Depois procura o nome recebido no array de nomes recebidos e em caso
//positivo compara a senha no array de senhas se as duas comparações forem válidas retorna
// true, se uma delas não for válida retorna false
function FazerLogin(nome, senha) {
  let indice = nomeUsuario.indexOf(nome);
  if (indice !== -1 && senhaUsuario[indice] == senha) {
    return true;
  } else {
    return false;
  }
}
//Função para excluir cadastro
function ExcluirCadastro(nome) {
  let indice = nomeUsuario.indexOf(nome);
  if (indice !== -1) {
    nomeUsuario.splice(indice, 1);
    senhaUsuario.splice(indice, 1);
    console.log("Cadastro excluído com sucesso!");
  } else {
    console.log("Usuário encontrado");
  }
}
//Fluxo de funcionamento do programa
let continuar = true;
while (continuar) {
  let opcao = PerguntarAoUsuario();

  switch (opcao) {
    case "1":
      CadastrarUsuario();
      break;
    case "2":
      let nome = prompt("Indira seu nome: ");
      let senha = parseInt(prompt("Insira a sua senha: "));
      let login = FazerLogin(nome, senha);
      if (login) {
        console.log("Login feito com sucesso");
      } else {
        console.log("Nome ou senha incorretos!");
      }
      break;
    case "3":
      let nomeExcluir = prompt("Insira o seu nome: ");
      ExcluirCadastro(nomeExcluir);
      break;
    case "4":
      continuar = false;
      break;
    default:
      console.log("Opção invalida. Tente novamente.");
      break;
  }
}
