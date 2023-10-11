// CRIANDO CLASSE LIVRO
class Livro {
    Titulo
    Autor
    Editora
    AnoDePublicacao
    Disponibilidade = true
  
    constructor(titulo, autor, editora, anoDePublicacao) {
      this.Titulo = titulo;
      this.Autor = autor;
      this.Editora = editora;
      this.AnoDePublicacao = anoDePublicacao;
    }
  }
  
  // CRIANDO OBJETOS DA CLASSE LIVRO
  let livros = [];
  livros.push(new Livro("livro1", "marcos", "editora A", 2000));
  livros.push(new Livro("livro2", "joao", "editora B", 2001));
  livros.push(new Livro("livro3", "andre", "editora C", 2002));
  livros.push(new Livro("livro4", "alex", "editora D", 2003));
  livros.push(new Livro("livro5", "mario", "editora E", 2004));
  
  // CRIANDO CLASSE BIBLIOTECA
  class Biblioteca {
    Nome
    Endereco
    Telefone
    AcervoDeLivros = []
  
    constructor(nome, endereco, telefone, acervoDeLivros) {
      this.Nome = nome;
      this.Endereco = endereco;
      this.Telefone = telefone;
      this.AcervoDeLivros = acervoDeLivros;
    }
  
    BuscarLivroPeloTitulo(titulo) {
      this.AcervoDeLivros.forEach(livro => {
        if (livro.Titulo === titulo) {
          console.log(livro);
        }
      });
    }
  
    EmprestarLivro(titulo) {
      let emprestado = false;
      this.AcervoDeLivros.forEach(livro => {
        if (livro.Titulo === titulo) {
          if (livro.Disponibilidade === true) {
            livro.Disponibilidade = false;
            emprestado = true;
          }
        }
      });
      if (emprestado) {
        return true;
      } else {
        return false;
      }
    }
  
    DevolverLivro(titulo) {
      this.AcervoDeLivros.forEach(livro => {
        if (livro.Titulo === titulo) {
          livro.Disponibilidade = true;
          console.log("Livro devolvido");
        }
      });
    }
  }
  
  let acervoBiblioteca = livros;
  let biblioteca = new Biblioteca("Biblioteca Dodev", "Rua 2", "123456", acervoBiblioteca);
  
  biblioteca.BuscarLivroPeloTitulo("livro2");
  console.log(biblioteca.EmprestarLivro("livro1"));
  biblioteca.DevolverLivro("livro1");
  