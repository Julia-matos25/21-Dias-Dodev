class Carro {
    constructor(nome, potencia, velocidadeMaxima, aceleracao) {
        this.nome = nome;
        this.potencia = potencia;
        this.velocidadeMaxima = velocidadeMaxima;
        this.aceleracao = aceleracao;
    }

    calcularTempoParaPercorrerDistancia(distanciaEmMetros) {
        if (this.velocidadeMaxima <= 0 || this.aceleracao <= 0) {
            throw new Error("A velocidade máxima e a aceleração devem ser maiores que zero.");
        }

        const tempo = distanciaEmMetros / (this.velocidadeMaxima / this.aceleracao);
        return tempo;
    }
}

// Exemplo de uso
const carroFerrari = new Carro("Ferrari", 700, 320, 3.5);
const distanciaAPercorrer = 1000; // em metros
const tempoParaPercorrer = carroFerrari.calcularTempoParaPercorrerDistancia(distanciaAPercorrer);
console.log(`Tempo para percorrer ${distanciaAPercorrer} metros: ${tempoParaPercorrer.toFixed(2)} segundos`);
