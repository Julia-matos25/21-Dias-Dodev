let alunos = []
let notas = []
let contador = 0
let continuar = true
//criando loop
while (continuar) {
   let nomeAluno = prompt("Insira o nome do " + (contador + 1) + "º aluno")
   let notaAlunos = parseInt(prompt("Insira a nota do aluno"))
alunos[contador] = nomeAluno
notas[contador] = notaAlunos
contador++
let resposta = prompt("Deseja inserir informações de outro aluno? (s/n) ")
if(resposta == "n")
continuar = false
}
 
//exibido informações
console.log("Notas dos alunos: ")
for(let i = 0; i < alunos.length; i++ ){
    console.log(alunos[i] + " - " + notas[i])
}
let somarNotas = 0
for(let i = 0; i < notas.length; i++){
    somarNotas += notas[i]
}

let media = somarNotas / alunos.length
console.log("A soma das notas foi: " + somarNotas)
console.log("A média geral da turma foi: " + media)
