import leia from 'readline-sync';

export default function exercicio22() {
    let maiorValor = Number.MIN_VALUE;
    let menorValor = Number.MAX_VALUE;

    let i = 0;
    while (i < 15) {
        let numero = leia.questionInt(`DIGITE O NUMERO ${i + 1}: `)

        if (numero < menorValor) {
            menorValor = numero;
        }

        if (numero > maiorValor) {
            maiorValor = numero;
        }
        i++;
    }

    console.log(`O MAIOR VALOR DIGITADO É ${maiorValor}`)
    console.log(`O MENOR VALOR DIGITADO É ${menorValor}`)
}