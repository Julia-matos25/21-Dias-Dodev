//Parte 1 do exercício

let numero = parseInt(prompt("Insira um numero positivo e inteiro:"))

for (let i = 0;  i <= numero ; i++) {
   console.log(i) 
}

//Parte 2 do exercício

for (let i = 0; i <= 50 ; i+=5) {
    console.log(i);
    
}

//Parte 3 do exercício

for (let i = 50; i >= 0 ; i-=5) {
    console.log(i);
    
}

//Parte 4 do exercício
let numero = parseInt(prompt("Insira um numero inteiro e positivo: "))

for (let i = 0; i <= numero + 2; i++) {
    console.log("tabuada do número: " + i)
    for (let j = 0; j <= 10 ; j++) {
        
        console.log(i + " x " + j + " = " + ( i * j))
    }
}
