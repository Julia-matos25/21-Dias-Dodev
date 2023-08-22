let quantHomem = 0;
let mulherAcima7 = 0;
let maiorNotaHomem = 0;
let totalAlunos = 0; // Add a variable to keep track of the total number of students
let somaNotas = 0; // Add a variable to keep track of the sum of all student grades
let contador = 1;

let continuar = true;

while (contador <= 10 && continuar) {
  let notaAluno = parseInt(prompt("Insira a nota do " + contador + "º aluno"));
  let sexoAluno = prompt("Insira o sexo do aluno (m/f)");
  
  // Update totalAlunos and somaNotas
  totalAlunos++;
  somaNotas += notaAluno;

  if (sexoAluno === "m") {
    if (notaAluno > maiorNotaHomem) {
      maiorNotaHomem = notaAluno;
    }
    quantHomem++;
  }
  if (sexoAluno === 'f' && notaAluno > 7) {
    mulherAcima7++;
  }
  
  let opcao = prompt("Deseja adicionar mais notas? (s/n)");

  if (opcao === "n") {
    continuar = false;
  }

  contador++;
}

// Calculate the average grade
let mediaAlunos = somaNotas / totalAlunos;

console.log("A média geral dos alunos é: " + mediaAlunos.toFixed(2));
console.log("Quantos homens enviaram notas: " + quantHomem);
console.log("Quantas mulheres tiveram nota acima de 7: " + mulherAcima7);
console.log("Qual a maior nota entre os homens: " + maiorNotaHomem);





 




