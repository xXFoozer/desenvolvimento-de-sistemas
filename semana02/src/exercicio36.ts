import leia from 'readline-sync';

export default function exercicio36() {
    let numeros: number[] = [];
    let somatorio = 0;

    for (let i = 0; i < 5; i++) {
        numeros.push(leia.questionInt("INFORME UM NÚMERO: "));
    }

    numeros.forEach((numero) => {
        somatorio += numero;
    })

    console.log(`SOMATÓRIO = ${somatorio}`)
    numeros.forEach((numero) => {
        console.log(numero)
    })
}