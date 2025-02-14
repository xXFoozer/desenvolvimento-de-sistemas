import leia from 'readline-sync';

export default function exercicio15() {
    let valorProduto = leia.questionFloat("INFORME O VALOR DO PRODUTO: ");

    let umReal = leia.questionInt("INFORME A QUANTIDADE DE MOEDAS DE R$1,00: ")
    let cinquentaCent = leia.questionInt("INFORME A QUANTIDADE DE MOEDAS DE R$0,50: ")
    let vinteCincoCent = leia.questionInt("INFORME A QUANTIDADE DE MOEDAS DE R$0,25: ")
    let dezCent = leia.questionInt("INFORME A QUANTIDADE DE MOEDAS DE R$0,10: ")
    let cincoCent = leia.questionInt("INFORME A QUANTIDADE DE MOEDAS DE R$0,05: ")

    let totalCofrinho = (umReal * 1) + (cinquentaCent * 0.5) + (vinteCincoCent * 0.25) + (dezCent * 0.10) + (cincoCent * 0.05)

    console.log(`TOTAL DO COFRINHO É: ${totalCofrinho}`)
    console.log(`VALOR DO PRODUTO É: ${valorProduto}`)

    if (totalCofrinho > valorProduto) {
        console.log("SERÁ POSSÍVEL COMPRAR O PRODUTO")
    } else {
        console.log("NÃO SERÁ POSSÍVEL COMPRAR O PRODUTO")
    }
}