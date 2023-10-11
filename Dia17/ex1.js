// CRIANDO CLASSE HOTEL
class Hotel {
  constructor(id, nome, categoria, endereco, telefone) {
    this.Id = id;
    this.Nome = nome;
    this.Categoria = categoria;
    this.Endereco = endereco;
    this.Telefone = telefone;
  }
}

// CRIANDO CLASSE RESERVA
class Reserva {
  constructor(id, idHotel, responsavel, diaEntrada, diaSaida) {
    this.Id = id;
    this.IdHotel = idHotel;
    this.Responsavel = responsavel;
    this.DiaEntrada = diaEntrada;
    this.DiaSaida = diaSaida;
  }
}

// CRIANDO ARRAYS
let hotels = [];
let reservas = [];
let idHotel = 1;
let idReserva = 1;

// FUNÇÃO PARA CADASTRAR HOTEL
function CadastrarHotel() {
  let nome = prompt("Digite o nome do hotel");
  let categoria = parseInt(prompt("Digite a categoria do hotel"));
  let endereco = prompt("Digite o endereço do hotel");
  let telefone = prompt("Digite o telefone do hotel");
  let hotel = new Hotel(idHotel, nome, categoria, endereco, telefone);
  hotels.push(hotel);
  idHotel++;
}

// FUNÇÃO PARA CADASTRAR RESERVA
function CadastrarReserva() {
  let idHotel;
  let existe = false;
  do {
    idHotel = parseInt(prompt("Digite o id do hotel"));
    existe = hotels.some((hotel) => hotel.Id === idHotel);
    if (!existe) {
      console.log("Id do hotel não cadastrado");
    }
  } while (!existe);

  let nome = prompt("Digite o nome do responsável");
  let diaEntrada = parseInt(prompt("Digite o dia de entrada"));
  let diaSaida;
  do {
    diaSaida = parseInt(prompt("Digite o dia de saída"));
    if (diaSaida <= diaEntrada) {
      console.log("O dia de saída deve ser maior ou igual ao dia de entrada");
    }
  } while (diaSaida <= diaEntrada);

  let reserva = new Reserva(idReserva, idHotel, nome, diaEntrada, diaSaida);
  reservas.push(reserva);
  idReserva++;
}

// FUNÇÃO PARA PROCURAR RESERVAS PELO HOTEL
function ProcurarReservaPeloHotel(idHotel) {
  reservas.forEach((reserva) => {
    if (idHotel === reserva.IdHotel) {
      let hotel = hotels.find((h) => h.Id === idHotel);
      console.log("Hotel:", hotel.Nome);
      console.log("Responsável:", reserva.Responsavel);
      console.log("Dia de entrada:", reserva.DiaEntrada);
      console.log("Dia de saída:", reserva.DiaSaida);
    }
  });
}

// FUNÇÃO PARA PROCURAR HOTEL PELA RESERVA
function ProcurarHotelPelaReserva(idReserva) {
  let reserva = reservas.find((r) => r.Id === idReserva);
  if (reserva) {
    let hotel = hotels.find((h) => h.Id === reserva.IdHotel);
    console.log("Hotel:", hotel.Nome);
    console.log("Responsável:", reserva.Responsavel);
    console.log("Dia de entrada:", reserva.DiaEntrada);
    console.log("Dia de saída:", reserva.DiaSaida);
  } else {
    console.log("Reserva não encontrada.");
  }
}

// FUNÇÃO PARA PROCURAR RESERVA PELO RESPONSÁVEL
function ProcurarReservaPeloNome(nome) {
  let reservasDoResponsavel = reservas.filter((reserva) => reserva.Responsavel === nome);
  if (reservasDoResponsavel.length > 0) {
    reservasDoResponsavel.forEach((reserva) => {
      let hotel = hotels.find((h) => h.Id === reserva.IdHotel);
      console.log("Id da Reserva:", reserva.Id);
      console.log("Hotel:", hotel.Nome);
    });
  } else {
    console.log("Nenhuma reserva encontrada para este responsável.");
  }
}

// FUNÇÃO PARA PROCURAR HOTÉIS PELA CATEGORIA
function ProcurarHotelPelaCategoria(categoria) {
  let hoteisProcurados = hotels.filter((hotel) => hotel.Categoria === categoria);
  if (hoteisProcurados.length > 0) {
    hoteisProcurados.forEach((hotel) => {
      console.log("Nome do hotel:", hotel.Nome);
    });
  } else {
    console.log("Nenhum hotel encontrado para esta categoria.");
  }
}

// FUNÇÃO PARA ATUALIZAR TELEFONE DO HOTEL
function AtualizarTelefone(idHotel, telefone) {
  let hotel = hotels.find((h) => h.Id === idHotel);
  if (hotel) {
    hotel.Telefone = telefone;
    console.log("Número de telefone atualizado!");
  } else {
    console.log("Hotel não encontrado.");
  }
}

// FLUXO DE FUNCIONAMENTO
let continuar = true;
do {
  let opcao = prompt(
    "Escolha uma opção: \n1 - Cadastrar Hotel \n2 - Cadastrar Reserva \n3 - Procurar reserva pelo hotel" +
      "\n4 - Procurar hotel pela reserva \n5 - Procurar reserva pelo responsável \n6 - Procurar hotéis por categoria " +
      "\n7 - Atualizar telefone de um hotel \n8 - Encerrar o programa"
  );
  switch (opcao) {
    case "1":
      CadastrarHotel();
      break;
    case "2":
      CadastrarReserva();
      break;
    case "3":
      ProcurarReservaPeloHotel(parseInt(prompt("Digite o id do Hotel")));
      break;
    case "4":
      ProcurarHotelPelaReserva(parseInt(prompt("Digite o id da reserva")));
      break;
    case "5":
      ProcurarReservaPeloNome(
        prompt("Digite o nome do responsável pela reserva")
      );
      break;
    case "6":
      let categoria = parseInt(prompt("Digite a categoria que deseja procurar"));
      ProcurarHotelPelaCategoria(categoria);
      break;
    case "7":
      let idHotel = parseInt(
        prompt("Digite o id do hotel que deseja atualizar")
      );
      let telefone = prompt("Digite o novo telefone");
      AtualizarTelefone(idHotel, telefone);
      break;
    case "8":
      console.log("Programa encerrado");
      continuar = false;
      break;
    default:
      console.log("Opção inválida");
      break;
  }
} while (continuar);
