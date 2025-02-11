import leia from 'readline-sync';

export default function exercicio10() {
    let numero = leia.questionInt("INFORME O NUMERO: ");
    let parOuImpar = (numero % 2 === 0) ? 'PAR' : 'IMPAR';
    console.log(`O NÚMERO É ${parOuImpar}`)
}