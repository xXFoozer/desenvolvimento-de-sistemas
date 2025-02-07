import leia from 'readline-sync';

export default function exercicio08() {
    let opcao = leia.keyInSelect(['R$10,00', 'R$25,00', 'R$50,00', 'Outro']) + 1;

    if (opcao === 1) {
        console.log("VOCÊ DOOU R$10,00")
    } else if (opcao === 2) {
        console.log("VOCÊ DOOU R$25,00")
    } else if (opcao === 2) {
        console.log("VOCÊ DOOU R$50,00")
    } else {
        let valor = leia.questionFloat("INFORME O VALOR DA DOAÇÃO: ")
        console.log(`VOCÊ DOOU R$${valor.toFixed(2)}`)
    }
}