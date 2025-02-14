import leia from 'readline-sync';

export default function exercicio35() {
    let vetorNumeros: number[] = [];
    let multiplacao: number[] = [];

    for (let i = 0; i < 10; i++) {
        vetorNumeros.push(leia.questionInt(`INFORME UM NUMERO ${i + 1}: `));
    }

    let j = 0;
    while (j < vetorNumeros.length) {
        multiplacao[j] = vetorNumeros[j] * 5;
        j++
    }

    console.table(vetorNumeros)
    console.table(multiplacao)
}