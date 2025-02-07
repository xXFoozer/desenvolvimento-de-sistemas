import leia from 'readline-sync';

export default function exercicio07() {
    let valorProduto = leia.questionFloat("INFORME O VALOR DA VENDA: ");

    if (valorProduto < 20) {
        valorProduto *= 1.45;
    } else {
        valorProduto *= 1.30;
    }
    
    console.log(`O VALOR FINAL DO PRODUTO É R$${valorProduto.toFixed(2)}`)
}