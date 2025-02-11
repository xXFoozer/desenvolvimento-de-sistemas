import leia from 'readline-sync';

export default function exercicio12() {
    let qtdApples = leia.questionInt("INFORME A QUANTIDADE DE MAÇAS: ");
    let appleValues = (qtdApples < 12) ? 0.30 : 0.25;
    let valorCompra = qtdApples * appleValues;
    console.log(`VOCÊ VAI PAGAR R$${valorCompra.toFixed(2)}`);
}