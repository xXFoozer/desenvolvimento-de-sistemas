import leia from 'readline-sync';

export default function exercicio13() {
    let clienteUm = leia.question("INFORME O NOME DO PRIMEIRO CLIENTE: ");
    let valorClienteUm = leia.questionFloat("INFORME VALOR DA COMPRA PRIMEIRO CLIENTE: ");

    let clienteDois = leia.question("INFORME O NOME DO SEGUNDO CLIENTE: ")
    let valorClienteDois = leia.questionFloat("INFORME VALOR DA COMPRA SEGUNDO CLIENTE: ");

    let valorTotal = valorClienteUm + valorClienteDois;
    console.log("O VALOR TOTAL GASTO: R$" + valorTotal.toFixed(2))

    let valorMedio = valorTotal / 2;
    console.log("O VALOR MÉDIO GASTO: R$" + valorMedio.toFixed(2))

    console.log("CLIENTES QUE GASTARAM ACIMA DE R$20:")
    if (valorClienteUm < 20 && valorClienteDois < 20) {
        console.log("NINGUÉM GASTOU MAIS DE R$20")
        return;
    }

    // OPERADOR TERNÁRIO (SUMARIZADO)
    valorClienteUm > 20 && console.log(clienteUm)
    valorClienteDois > 20 && console.log(clienteDois)
}